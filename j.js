(function pageSpeed() {
    window.onload = function() {
        const latency = performance.now() / 1000;
        const latencyBlock = document.querySelector('.latency');

        latencyBlock.innerHTML = 'Load time is ' + latency + ' sec';
    };
})();
window.addEventListener('load',function () {
	let a = document.querySelectorAll('.menu-link');
	a.forEach(element => {
		if (element.href == window.location.href) {
			element.classList.add('active');
		}
	});
})
