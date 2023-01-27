/* this file is used to place banners in place holders and to track impressions and clicks*/
$(document).ready(function() {
			
	bannerPlaceholders = Array();
	
	//get placeholders from page
	$('.banner-placeholder').each(function() {
		
		//get place holder id		
		var id  = this.id.split('-');
		var pid = id[2];
		
		//add placeholder to array		 
		bannerPlaceholders.push(pid);
		
		//if placeholder exist
		if(bannerPlaceholders.length == $('.banner-placeholder').length) {
			
			//get banners using ajax request to server
			$.ajax({
				url: '/ajax/impressions.php',
				data: {placeholders: bannerPlaceholders.join(',')},
				type: 'post'
			}).done(function(response) {
				if(response) {
					
					//place banners in placeholders
					for (var placeholderId in response) {
						var html 	= '<a id="banner-'+response[placeholderId]['banner_id']+'" class="banner-tracker prevent-click" href="'+response[placeholderId]['href']+'">';				
						html 		= html + '<img alt="'+response[placeholderId]['href']+'" src="/assets/img/get-banner.php?img='+response[placeholderId]['src']+'" />';
						html 		= html + '</a>';
						$('#banner-placeholder-'+placeholderId).html(html);						
   					}
				}
			});	
		}		
	});
	
	//this is used to track banner clicks
	$(document).on("click", '.banner-tracker', function(event){
		event.preventDefault();
		event.stopPropagation();
		
		//get bannerId and link(href)
		var exp 	 = this.id.split('-');
		var bannerId = exp[1];
		var href	 = $(this).attr('href');
		
		if(bannerId) {
			//add new banner click
			$.ajax({
				url: '/ajax/clicks.php',
				data: {banner_id: bannerId},
				type: 'post'
			}).done(function(response) {
				
				//open new tab with href
				window.open(href, '_parent');
			});	
		}		
	});
});