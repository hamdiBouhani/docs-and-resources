var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');

var tl = gsap.timeline({repeat:1, repeatDelay:2});
gsap.defaults({
  ease:Quad.easeInOut,
  force3D:false,
  duration:0.5
});

window.onload = function() {

  tl.set(banner, {visibility: "visible"})


	/*frame one*/
	.from(".dell-logo, .funding-f1", {autoAlpha:0}, "frame1")	
	.from(".title1",  {autoAlpha:0, xPercent:-50}, "frame1+=.5")
	.from(".pro-f1",  {autoAlpha:0, xPercent:50}, "frame1+=.5")
	.to(".title1, .dell-logo, .funding-box, .pro-f1", { autoAlpha:0}, "frame1+=2.5")

	/*frame two*/
	.add("frame2","frame1+=3")
    .from(".title2",  {autoAlpha:0}, "frame2")
    .from(".pro-f2",  {autoAlpha:0, xPercent:-50}, "frame2")
	.from(".viof2, .price-f2, .name-f2", .5, { alpha:0, ease:Expo.easeInOut}, "frame2+=.3")	
	.from(".vio_textf2", .5, {xPercent:-100, ease:Expo.easeInOut}, "frame2+=.8")
	.to(".title2, .vio-boxf2, .price-f2, .name-f2, .pro-f2",.5, { autoAlpha:0}, "frame2+=2.5")	


	/*frame three*/
	.add("frame3","frame2+=3")
    .from(".title3",  {autoAlpha:0, xPercent:-50}, "frame3")
    .from(".pro-f3",  {autoAlpha:0, xPercent:50}, "frame3")
	.from(".viof3, .price-f3, .name-f3", .5, { alpha:0, ease:Expo.easeInOut}, "frame3+=.3")	
	.from(".vio_textf3", .5, {xPercent:100, ease:Expo.easeInOut}, "frame3+=.8")
	.to(".title3, .vio-boxf3, .price-f3, .name-f3, .pro-f3", { autoAlpha:0}, "frame3+=2.5")		
	
	/*frame four*/ 
	.add("frame4","frame3+=3")
	.from(".f4-bg",  {autoAlpha:0,}, "frame4")
	.to(".f4-bg",  {autoAlpha:0,}, "frame4+=2.5")

	/*frame five*/ 
	.add("frame5","frame4+=3")
	.from(".title5, .price-f5, .name-f5", { autoAlpha:0}, "frame5")
	.from(".pro-f5",  {autoAlpha:0, xPercent:-50}, "frame5")
	.from(".dell-logo-f5, .funding-f5,.funding-copy2", { autoAlpha:0}, "frame5+=.3")


	// tl.seek("loop")
	var currentDuration = tl.duration();
	var repeatDelay  = tl.repeatDelay();
	console.log(currentDuration + repeatDelay); 

};
