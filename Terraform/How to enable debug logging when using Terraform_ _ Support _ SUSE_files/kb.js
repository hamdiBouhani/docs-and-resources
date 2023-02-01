$(document).ready(function() {
	$("#support_doc_bookmark a").click(function(e) {
		e.preventDefault();
		if(window.sidebar) { // Mozilla Firefox Bookmark
			window.sidebar.addPanel(window.document.title, window.location.href,"");
		} else if( window.external ) { // IE Favorite
			window.external.AddFavorite(window.location.href, window.document.title); 
		}
	});

	$("#support_doc_mail a").click(function(e) {
		e.preventDefault();
		openExternal("/company/contact/sendemail.html?url="+encodeURIComponent(location.href),535,810,true,"_blank",true);
	});
	$("#support_doc_print a").click(function(e) {
		e.preventDefault();
		window.print();
	});

	$('#support_doc_fav a').click(function(e) {
		e.preventDefault();
		if (typeof(window.logged_in) != "undefined") {
			$("#login_overlay, #login_overlay_mask").show();
			return false;
		}
		var favaction = $(this).parent().data('favaction');
		if (favaction == 'remove') {
			path = "/common/inc/ajax_delete_document_favorite.php";
			newaction = 'add';
		}
		else {
			path = "/common/inc/ajax_save_document_favorite.php";
			newaction = 'remove';
		}
		var tid = $(this).parent().data('tid');
		var title = $(this).parent().data('title');
		var favid = $(this).parent().data('fid');
		var my_this = $(this);
		$.post(path,{
			'title':title,
			'documentId':tid,
			'favorite_id':favid
		},
		function(response) {
			var response_obj = $.parseJSON(response);
			if ((response_obj.status == true) || (response_obj[0].status == true)) {
				if (favaction == 'add') {
					$('#content .fav_corner').show();
					my_this.parent().data('fid', response_obj[0].id);
					html = '<tr><td class="name" id="name_'+tid+'"><a href="/support/kb/doc.php?id='+tid+'">'+title+'</a>';
					html += '</td><td class="actions"><ul data-favorite_id="'+response_obj[0].id+'" data-document_id="'+tid+'" data-slice_id="1">';
					html += '<li class="fav_edit"><a href="#">edit</a></li><li class="fav_delete"><a href="#">delete</a></li></ul></td></tr>';
					$(html).appendTo('#saved_docs_tbody');
					my_this.addClass('remove');
				}
				else {
					$('#content .fav_corner').hide();
					$('#name_'+tid).parent().remove();
					my_this.removeClass('remove');
				}
				my_this.attr('title', newaction.capitalize() + ' Favorite');
				my_this.parent().data('favaction', newaction)
			}
		});
		//return true;
	});
	
	/****************
	* Favorites
	*****************/
	$("#kbfavorites a").click(function(e) {
		e.preventDefault();
		if($("#kbfav").hasClass("expanded")) {
			$("#kbfav").slideUp("fast").removeClass("expanded");
		}
		else {
			$("#kbfav").slideDown("fast").addClass("expanded").show().css('zoom',1);
		}
	});

	$('.show_results a').click(function(e) {
		e.preventDefault();
		$(this).closest('ul').children('li:gt(9)').toggle();
	});

	$("#kbfav .fav_close a").click(function(e) {
		e.preventDefault();
		$("#kbfav").slideUp("fast").removeClass("expanded");
	});

	$("#kbfav .fav_select a").click(function(e) {
		e.preventDefault();
		$(this).parent().parent().next("form").find("input").attr('checked','checked');
	});

	$("#content #kbsearch #kbSearchString").wrap('<span class="input_wrap" />');

	$(".input_wrap input").focus(function() {
		addClearBtn(this);
	}).keypress(function() {
		var txtVal = this.value;
		if(txtVal != "") {
			addClearBtn(this);
		}
	});
	$(".input_wrap input").blur(function() {
		if($(this).next("p.input_clear").size() > 0) {
			setTimeout('$("#'+this.id+'").next("p.input_clear").remove()', 200);
		}
	});

	$("#sortby").change(function() {
		$("#search_sortby").val($(this).val());
		$('#kbsearch form').submit();
	});

	$(".search_functions #search_save").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		if (typeof(window.logged_in) != "undefined") {
			set_kbsearch_cookie();	
			$("#login_overlay, #login_overlay_mask").show();
			return false;
		}
		var q = $('#kbSearchString').val();
		var title = q;
		var date_from = $('#date_from').val();
		var date_to = $('#date_to').val();
		var searchType = $('.advanceditem #context').val();
		var sortBy = $('#results_container #sortby').val();
		var archive = $('.checkbox #filter-archived').is(':checked');
		var dt = $('#doctypes_container #doctypes').val();
		var product = $('#kbproductlist').val();
		var bu_novell = $('#filter-novell').is(':checked');
		var bu_suse = $('#filter-suse').is(':checked');
		var bu_netiq = $('#filter-netiq').is(':checked');
		$.post("/common/inc/ajax_save_search_favorite.php",{
			"q":q,
			"title":title,
			"date_from":date_from,
			"date_to":date_to,
			"searchType":searchType,
			"sortBy":sortBy,
			"archive":archive,
			"dt":dt,
			"product":product,
			"bu_novell":bu_novell,
			"bu_suse":bu_suse,
			"bu_netiq":bu_netiq,
			"full_save":"true"
			},
			function(response) {
				var response_obj = $.parseJSON(response);
				if (response_obj[0].saveId) {
					var orig_save_id = response_obj[0].saveId;
					var saveId = response_obj[0].saveId.replace('.','_');
					var save_title = response_obj[0].title;
					html = '<tr><td id="name_'+saveId+'"><a href="/support/kb/?search_id='+orig_save_id+'">'+save_title+'</a></td>';
					html += '<td class="actions"><ul data-search_id="'+saveId+'"><li class="fav_edit">';
					html += '<a href="#">edit</a></li><li class="fav_delete"><a href="#">delete</a></li></ul></td></tr>';
					$(html).appendTo('.saved_search_tbody');
					//window.location.reload();
					$("#search_saved").css("display", "inline");
					$("#search_saved").fadeOut(3000);
				}
			}
		);
		//window.location.reload();			
	});
	
	$("#fav_documents .fav_edit").on("click", function(e) {
		e.preventDefault();
		var document_id = $(this).parent().data("document_id");
		var old_name = $("#name_"+document_id+" a").html().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		var html = '<input id="name_text_'+document_id+'" type="text" value="'+old_name+'" style="padding:0;margin:0;width:725px;" />';
		$("#name_"+document_id).html(html);
		$("#name_text_"+document_id).select();
		$(this).data("old_name", old_name);
		$(this).removeClass("fav_edit");
		$(this).addClass("fav_cancel");
		$(this).html('<a class="fav_save" href="#">save</a> &nbsp;&nbsp;&nbsp;&nbsp;<a href="#">cancel</a>');
	});

	$('#fav_searches .fav_edit').on("click", function(e) {
		e.preventDefault();
		var search_id = $(this).parent().data("search_id");
		var old_name = $("#name_"+search_id+" a").html().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, "&quot;");
		var html = '<input id="name_text_'+search_id+'" type="text" value="'+old_name+'" style="padding:0;margin:0;width:725px;" />';
		$('#name_'+search_id).html(html);
		$('#name_text_'+search_id).select();
		$(this).data("old_name", old_name);
		$(this).removeClass("fav_edit");
		$(this).addClass("fav_cancel");
		$(this).html('<a class="fav_save" href="#">save</a> &nbsp;&nbsp;&nbsp;&nbsp;<a href="#">cancel</a>');
	});

	$('#fav_searches .fav_cancel').on("click", function(e) {
		e.preventDefault();
		var search_id = $(this).parent().data('search_id');
		var state_id = $(this).parent().data('state_id');
		var old_name = $(this).data("old_name");
		var html = '<a href="/support/kb/?stateId='+state_id+'&startIndex=1">'+old_name+'</a>';
		$('#name_'+search_id).html(html);
		$(this).removeClass('fav_cancel');
		$(this).addClass('fav_edit');
		$(this).html('<a href="#">edit</a>');
	});

	$("#fav_searches .fav_save").on("click", function(e) {
		e.preventDefault();
		e.stopPropagation();
		var search_id = $(this).parent().parent().data('search_id');
		var state_id = $(this).parent().parent().data('state_id');
		var post_search_id = search_id.replace(/_/g, '.');
		var name = $("#name_text_"+search_id).val();
		var this_elm = $(this).parent();
		$(this).parent().prepend('<img src="/common/img/ajax-loader.gif" width="15" height="15" style="margin-right:10px;vertical-align:bottom;" />');
		$.post(
			"/common/inc/ajax_save_search_favorite.php",
			{"search_id":post_search_id,
			"title":name,
			"full_save":"false"},
			function(response) {
				var response_obj = $.parseJSON(response);
				if (response_obj[0].status) {
					var html = '<a href="/support/kb/?stateId='+state_id+'&startIndex=1">'+name+'</a>';
					$("#name_"+search_id).html(html);
					this_elm.removeClass("fav_cancel");
					this_elm.addClass("fav_edit");
					this_elm.html('<a href="#">edit</a>');
				}
			}
		);
	});
	
	$("#fav_documents .fav_save").on("click", function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var document_id = $(this).parent().parent().data("document_id");
		var slice_id = $(this).parent().parent().data("slice_id");
		var name = $("#name_text_"+document_id).val();
		var this_elm = $(this).parent();
		
		$(this).parent().prepend('<img src="/common/img/ajax-loader.gif" width="15" height="15" style="margin-right:10px;vertical-align:bottom;" />');
		
		// Post data to save favorite.
		$.post(
			"/common/inc/ajax_save_document_favorite.php",
			{"documentId":document_id,
			"sliceId":slice_id,
			"title":name},
			function(response) {
				var response_obj = $.parseJSON(response);
				if (response_obj[0].status) {
					var html = '<a href="/support/kb/doc.php?id='+document_id+'">'+name+'</a>';
					$("#name_"+document_id).html(html);
					this_elm.removeClass("fav_cancel");
					this_elm.addClass("fav_edit");
					this_elm.html('<a href="#">edit</a>');					
				}
			}
		);
	});
	
	$("#fav_documents .fav_cancel").on("click", function(e) {
		e.preventDefault();
		var document_id = $(this).parent().data("document_id");
		var old_name = $(this).data("old_name");
		
		var html = '<a href="/support/kb/doc.php?id='+document_id+'">'+old_name+'</a>';
		
		$("#name_"+document_id).html(html);

		$(this).removeClass("fav_cancel");
		$(this).addClass("fav_edit");
		
		$(this).html('<a href="#">edit</a>');
	});

	$("#fav_documents .fav_delete").on("click", function(e) {
		e.preventDefault();
		var favorite_id = $(this).parent().data("favorite_id");
		var my_this = $(this);
		
		$.post(
			"/common/inc/ajax_delete_document_favorite.php",
			{"favorite_id":favorite_id},
			function(response) {
				var response_obj = $.parseJSON(response);
				if (response_obj.status) {
					my_this.parent().parent().parent().remove();
					if ($('#support_doc_fav').data('fid') == favorite_id) {
						$('#support_doc_fav a').removeClass('remove');
						$('#support_doc_fav a').attr('title', 'Add Favorite');
						$('#content .fav_corner').hide();
						$('#support_doc_fav').data('favaction','add');
					}
				}
			}
		);
		
	});

	$("#fav_searches .fav_delete").on("click", function(e) {
		e.preventDefault();
		var favorite_id = $(this).parent().data("search_id");
		var my_this = $(this);
	
		$.post(
			"/common/inc/ajax_delete_search_favorite.php",
			{"favorite_id":favorite_id},
			function(response) {
				var response_obj = $.parseJSON(response);
				if (response_obj.status) {
					my_this.parent().parent().parent().remove();
				}
			}
		);
	});
});
	
$.fn.kbrater = function(options) {
    var opts = $.extend({}, $.fn.kbrater.defaults, options);
    return this.each(function() {
        var $this = $(this);
		if(opts.group == undefined) opts.group = '';
		$this.html('<div class="novl-rater"><span class="novl-rater-off"><span class="novl-rater-on"></span></span></div>');
		var $on = $this.find('.novl-rater-on');
        var $off = $this.find('.novl-rater-off');
        opts.size = $on.height();
		$off.width(opts.size * opts.units);
		$on.width(0);
		
		if(opts.showNumericRating == true) $this.find('.novl-rater').append('<span class="novl-rater-numeric"></span>');
		if(opts.showCount == true) $this.find('.novl-rater').append('<span class="novl-rater-count"></span>');
		
		if(opts.rating == undefined){
			opts.rating = 0;
		}
		else{
			$this.rating = parseFloat(opts.rating);
			$on.width($this.rating * opts.size);
			$this.find('.novl-rater-numeric').text($this.rating.toFixed(1));

			if(opts.count !== undefined){
				$this.count = parseFloat(opts.count);
				$this.find('.novl-rater-count').text("("+$this.count+")");
			}
		}
        
        $off.mousemove(
			function(e) {
				var left = e.clientX - $off.offset().left;
				var width = $off.width() - ($off.width() - left);
				width = Math.ceil(width / (opts.size / opts.step)) * opts.size / opts.step;
				$on.width(width);
        	}
		).hover(
			function(e) { 
				$on.addClass('novl-rater-hover'); 
			}, 
			function(e) {
            	$on.removeClass('novl-rater-hover');
				$on.width($this.rating * opts.size);
        	}
		).click(
			function(e) {
				var r = Math.round($on.width() / $off.width() * (opts.units * opts.step)) / opts.step;
				$off.unbind('click').unbind('mousemove').unbind('mouseenter').unbind('mouseleave');
				$off.css('cursor', 'default'); $on.css('cursor', 'default');
				$.fn.kbrater.rate($this, opts, r);
        	}
		).css('cursor', 'pointer'); $on.css('cursor', 'pointer');
    });
};

$.fn.kbrater.defaults = {
    postHref: "/common/inc/ajax_save_document_rating.php",
    units: 5,
    step: 1
};

$.fn.kbrater.rate = function($this, opts, rating) {
    var $on = $this.find('.novl-rater-on');
    var $off = $this.find('.novl-rater-off');
	var documentId = $this.data('document_id');
	var sliceId = $this.data('slice_id');
    $off.fadeTo(600, 0.4, function() {

		$.post(opts.postHref,{
			'documentId':documentId,
			'sliceId':sliceId,
			'rating':rating
			},
			function(data){
				$this.rating = parseFloat(data['rating']);
				$this.count = parseFloat(data['count']);
				$off.fadeTo(600, 0.1, 
					function() {
						$on.removeClass('novl-rater-hover').width($this.rating * opts.size);
						$this.find('.novl-rater-numeric').text($this.rating.toFixed(1));
						$this.find('.novl-rater-ratecount').text("("+$this.count+")");
						$off.fadeTo(600, 1, 
							function() {
								if($off[0].style.filter && $off[0].style.removeAttribute) {
									$off[0].style.removeAttribute("filter");
								}
							}
						);
					}
				);
			}
		);

    });
};



function set_kbsearch_cookie() {
	var expdate = new Date();
	expdate.setDate(expdate.getDate() + 1);
	var c_value = window.location.search;
	c_value += "; expires=" + expdate.toUTCString();
	var c_name = "kbsearch";
	document.cookie=c_name + "=" + c_value;
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

function set_rating() {
	
}
