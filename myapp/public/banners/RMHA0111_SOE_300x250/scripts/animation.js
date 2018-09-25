function listen(evnt, elem, func) {
	if (elem.addEventListener)  // W3C DOM
		elem.addEventListener(evnt,func,false);
	else if (elem.attachEvent) { // IE DOM
		return elem.attachEvent("on"+evnt, func);
	}
}

listen("load", window, initAnimation);

function initAnimation() {
	var overlay = document.getElementById('overlay'),
		txt_01 = document.getElementById('txt_01'),
		txt_02 = document.getElementById('txt_02'),
		flag1 = document.getElementById('flag1'),
		flag2 = document.getElementById('flag2'),
		btn = document.getElementById('btn'),
		tcs = document.getElementById('tcs'),
		glogo = document.getElementById('glogo'),
		banner = document.getElementById('banner'),
		tl = new TimelineLite();
		tl.eventCallback("onComplete", loopAnimation);

	tl
	.add('f1', 0)
	.add('f2', 3.5)
	.add('f3', 6.5)
	.add('f4', 9.5)
	.add('f5', 12.5)
	.add('f6', 15.5)
	.add('f7', 18.5)

	tl
	.from(overlay, 2,{autoAlpha:0, ease: Power4.easeOut}, 'f1+=0.5')
	.from("#txt_01, #txt_02", 1, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f1+=1')
	.from(tcs, 1, {autoAlpha:0,  ease: Power2.easeOut}, 'f1+=1.5')
	.to(txt_02, 0.5, {autoAlpha:0}, 'f2')
	.to(tcs, 0.4, {autoAlpha:0,  ease: Power2.easeOut}, 'f2')

	.from(txt_03, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f2')
	.to("#txt_03, #txt_01", 0.5, {autoAlpha:0, ease: Power2.easeOut}, 'f3')

	.from(flag1, 0.4, {scale:(2), autoAlpha:0, ease: Bounce.easeOut}, 'f3')
	.to(flag1, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f4')

	.from(flag2, 0.4, {scale:(2), autoAlpha:0, ease: Bounce.easeOut}, 'f4')
	.to(flag2, 0.5, {autoAlpha:0, ease: Power1.easeOut}, 'f5')
	
	.from(flag3, 0.4, {scale:(2), autoAlpha:0, ease: Bounce.easeOut}, 'f5')
	.to(overlay, 1.5,{autoAlpha:0, ease: Power1.easeInOut}, 'f6-=0.5')
	.to(flag3, 0.5, {autoAlpha:0, ease: Power1.easeOut}, 'f6')

	.from(btn, 0.5, {y:'-=10px', autoAlpha:0, ease: Power1.easeInOut}, 'f6')
	.from(glogo, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f6')


	.add(function(){ if(loopNumber >= 0){ tl.stop(); console.log('Paused'); } }) // stops looping animation
	.to(btn, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f7+=2')
	.to(glogo, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f7+=2')

	banner.style.visibility = 'visible';
	// .call(pauseLine)

	
	// Call pause on timeline for testing
	function pauseLine() {
    	tl.pause();
    	console.log('Test paused')
	}

	// start looping animation
	var loopNumber = 0;

	function loopAnimation() {
		loopNumber = loopNumber + 1;

		if (loopNumber >= 1) {

		} else {
			tl.restart();
			console.log('Times looped = ' + loopNumber);
		}
	}

}

