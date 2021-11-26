(function pageSpeed() {
    const startTime = new Date();

    window.onload = function() {
        const endTime = new Date();
        const latency = (endTime - startTime) / 1000;
        const latencyBlock = document.querySelector('.latency');

        latencyBlock.innerHTML = 'Load time is ' + latency + ' sec';
    };
})();