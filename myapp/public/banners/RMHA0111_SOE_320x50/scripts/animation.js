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
		txt_03 = document.getElementById('txt_03'),
		txt_04 = document.getElementById('txt_04'),
		txt_05 = document.getElementById('txt_05'),
		tcs = document.getElementById('tcs'),
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
	.from(txt_01, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f1+=0.6')
	.to(txt_01, 0.5, {autoAlpha:0, ease: Power2.easeOut}, 'f2-=0.6')

	.from(txt_02, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f2')
	.to(txt_02, 0.5, {autoAlpha:0, ease: Power2.easeOut}, 'f3-=0.6')

	.from(txt_03, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f3')
	.to(txt_03, 0.5, {autoAlpha:0, ease: Power2.easeOut}, 'f4-=0.6')

	.from(blue2, 0.8, {autoAlpha:0, ease: Power2.easeOut}, 'f4')

	.from(txt_04, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f4')
	.to(txt_04, 0.5, {autoAlpha:0, ease: Power2.easeOut}, 'f5-=0.6')

	.from(txt_05, 0.8, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f5')
	.to("#txt_05, #blue2", 0.5, {autoAlpha:0, ease: Power2.easeOut}, 'f6-=0.6')

	.from("#btn, #logo", 0.5, {y:'-=20px', autoAlpha:0, ease: Power2.easeOut}, 'f6')
	.from(tcs, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f6')


	.add(function(){ if(loopNumber >= 0){ tl.stop(); console.log('Paused'); } }) // stops looping animation
	.to(tcs, 0.5, {autoAlpha:0, ease: Power1.easeInOut}, 'f7')
	.to("#btn, #logo", 0.5, {autoAlpha:0, ease: Power2.easeOut}, 'f7')

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

