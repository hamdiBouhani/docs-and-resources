$.fn.novellrater = function(options) {
    var opts = $.extend({}, $.fn.novellrater.defaults, options);
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
			// load rating
			$.getJSON(opts.postHref + "?group=" + opts.group + '&id=' + $this.attr('id'),
				function(data){
					if(data == null) {
						$this.rating = 0;
						$this.count = 0;						
					}
					else {
						$this.rating = parseFloat(data['rating']);
						$this.count = parseFloat(data['count']);
					}
					$on.width($this.rating * opts.size);
					$this.find('.novl-rater-numeric').text($this.rating.toFixed(1));
					$this.find('.novl-rater-count').text("("+$this.count+")");
				}
			);
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
				$.fn.novellrater.rate($this, opts, r);
        	}
		).css('cursor', 'pointer'); $on.css('cursor', 'pointer');
    });
};

$.fn.novellrater.defaults = {
    postHref: "/common/inc/jquery/plugins/novellrater/vote.php",
    units: 5,
    step: 1
};

$.fn.novellrater.rate = function($this, opts, rating) {
    var $on = $this.find('.novl-rater-on');
    var $off = $this.find('.novl-rater-off');
    $off.fadeTo(600, 0.4, function() {

		$.getJSON(opts.postHref + "?group=" + opts.group + '&id=' + $this.attr('id') + '&v=' + rating + "&m=" + opts.units,
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
