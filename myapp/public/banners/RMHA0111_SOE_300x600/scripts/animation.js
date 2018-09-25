function listen(evnt, elem, func) {
	if (elem.addEventListener)  // W3C DOM
		elem.addEventListener(evnt,func,false);
	else if (elem.attachEvent) { // IE DOM
		return elem.attachEvent("on"+evnt, func);
	}
}

listen("load", window, initAnimation);

function initAnimation() {
	var txt_01 = document.getElementById('txt_01'),
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
	.add('f2', 3)
	.add('f3', 6)
	.add('f4', 9)
	.add('f5', 12)
	.add('f6', 15)
	.add('f7', 18)

	tl
	.from("#txt_01, #txt_02", 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f1+=0.6')
	.from(tcs, 0.4, {autoAlpha:0,  ease: Power2.easeOut}, 'f1+=0.6')
	.to(tcs, 0.4, {autoAlpha:0,  ease: Power2.easeOut}, 'f2')
	.to(txt_02, 0.5, {autoAlpha:0}, 'f2-=0.5')

	.from(txt_03, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f2')
	.from(flag1, 0.4, {scale:(2), autoAlpha:0, ease: Bounce.easeOut}, 'f2')
	.to(flag1, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f3-=0.5')

	.from(flag2, 0.4, {scale:(2), autoAlpha:0, ease: Bounce.easeOut}, 'f3')
	.to("#flag2, #txt_03, #txt_01", 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f4-=0.5')

	.from(txt_04, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f4')
	.from(flag3, 0.4, {scale:(2), autoAlpha:0, ease: Bounce.easeOut}, 'f4')
	.to("#flag3, #txt_04", 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f5-=0.5')

	.from(txt_05, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f5')
	.from(btn, 0.5, {y:'-=10px', autoAlpha:0, ease: Power1.easeInOut}, 'f5+=0.3')
	.from(glogo, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f5+=0.5')


	.add(function(){ if(loopNumber >= 0){ tl.stop(); console.log('Paused'); } }) // stops looping animation
	.to(flag2, 0.5, {autoAlpha:0, ease: Power2.easeOut}, 'f7+=3')
	.to(btn, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f7+=3')
	.to(tcs, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f7+=3')

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

