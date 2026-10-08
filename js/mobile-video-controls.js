(() => {
    const mobileViewport = window.matchMedia('(max-width: 767px)');
    const videos = document.querySelectorAll('video[controls]');
    const hideTimers = new WeakMap();
    const hideDelay = 3000;

    function updateControls() {
        videos.forEach((video) => {
            clearTimeout(hideTimers.get(video));
            video.controls = !mobileViewport.matches;
        });
    }

    videos.forEach((video) => {
        video.addEventListener('click', () => {
            if (!mobileViewport.matches) return;

            video.controls = true;
            clearTimeout(hideTimers.get(video));
            hideTimers.set(video, setTimeout(() => {
                video.controls = false;
                hideTimers.delete(video);
            }, hideDelay));
        });
    });

    mobileViewport.addEventListener('change', updateControls);
    updateControls();
})();
