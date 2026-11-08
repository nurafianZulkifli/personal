document.addEventListener('DOMContentLoaded', function () {
    var journey = document.querySelector('[data-journey]');
    if (!journey) return;

    var panels = Array.from(journey.querySelectorAll('[data-journey-panel]'));
    var stepButtons = Array.from(journey.querySelectorAll('[data-journey-step]'));
    var controls = journey.querySelector('.ccl-journey-controls');
    var status = journey.querySelector('.ccl-journey-status');
    var hotspots = journey.querySelector('.ccl-station-hotspots');
    var stationHint = journey.querySelector('[data-station-hint]');
    var traveller = journey.querySelector('[data-station-traveller]');
    var previous = journey.querySelector('[data-journey-prev]');
    var next = journey.querySelector('[data-journey-next]');
    var replay = journey.querySelector('[data-journey-replay]');
    var platformAudio = journey.querySelector('#platform-announcement');
    var audioButton = journey.querySelector('[data-platform-audio-button]');
    var audioError = journey.querySelector('[data-platform-audio-error]');
    var current = -1;
    var movementTimer;
    var scrollTimer;
    var movementDuration = 800;
    var travellerPositions = [
        ['13%', '47.87%'], ['44%', '47.87%'], ['68%', '47.87%'],
        ['90%', '47.87%'], ['42%', '87.31%'], ['76%', '87.31%']
    ];

    function showStep(index, moveFocus) {
        clearTimeout(scrollTimer);
        current = index;
        if (traveller) {
            traveller.style.left = travellerPositions[current][0];
            traveller.style.top = travellerPositions[current][1];
            traveller.classList.add('is-moving');
            clearTimeout(movementTimer);
            movementTimer = setTimeout(function () {
                traveller.classList.remove('is-moving');
            }, movementDuration);
        }
        panels.forEach(function (panel, panelIndex) {
            panel.hidden = panelIndex !== current;
            if (panel.hidden) {
                panel.querySelectorAll('audio').forEach(function (audio) {
                    audio.pause();
                });
            }
        });
        stepButtons.forEach(function (button) {
            if (Number(button.getAttribute('data-journey-step')) === current) {
                button.setAttribute('aria-current', 'step');
            } else {
                button.removeAttribute('aria-current');
            }
        });
        previous.disabled = current === 0;
        next.disabled = current === panels.length - 1;
        controls.hidden = false;
        var heading = panels[current].querySelector('h3');
        status.textContent = 'Step ' + (current + 1) + ' of ' + panels.length + ': ' + heading.textContent;
        if (moveFocus) heading.focus({ preventScroll: true });
    }

    function showStepAndScroll(index) {
        var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var isMoving = traveller && (traveller.classList.contains('is-moving') ||
            index !== (current < 0 ? 0 : current));
        showStep(index, false);

        function scrollToStep() {
            panels[index].querySelector('h3').focus({ preventScroll: true });
            panels[index].scrollIntoView({
                behavior: reducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        }

        if (isMoving && !reducedMotion) {
            scrollTimer = setTimeout(scrollToStep, movementDuration);
        } else {
            scrollToStep();
        }
    }

    stepButtons.forEach(function (button) {
        button.setAttribute('aria-describedby', 'station-hint');
        button.addEventListener('click', function () {
            showStepAndScroll(Number(button.getAttribute('data-journey-step')));
        });
    });
    journey.addEventListener('keydown', function (event) {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        var button = event.target.closest('[data-journey-step]');
        var heading = event.target.matches('[data-journey-panel] h3');
        var control = event.target.closest('.ccl-journey-controls button');
        if (!button && !heading && !control) return;

        var direction;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            direction = 1;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            direction = -1;
        } else {
            return;
        }

        var index = button ? Number(button.getAttribute('data-journey-step')) : current;
        if (index < 0) return;
        event.preventDefault();
        var targetIndex = Math.max(0, Math.min(panels.length - 1, index + direction));
        var target = stepButtons.find(function (stepButton) {
            return Number(stepButton.getAttribute('data-journey-step')) === targetIndex;
        });
        if (target) {
            showStep(targetIndex, false);
            target.focus();
        }
    });
    previous.addEventListener('click', function () {
        if (current > 0) showStepAndScroll(current - 1);
    });
    next.addEventListener('click', function () {
        if (current < panels.length - 1) showStepAndScroll(current + 1);
    });
    replay.addEventListener('click', function () {
        showStepAndScroll(0);
    });

    if (platformAudio && audioButton && audioError) {
        function updateAudioButton() {
            var playing = !platformAudio.paused;
            audioButton.textContent = playing ? '\u23f8' : '\u25b6';
            audioButton.setAttribute('aria-label', (playing ? 'Pause' : 'Play') + ' Platform B announcement');
        }

        audioButton.addEventListener('click', function () {
            if (!platformAudio.paused) {
                platformAudio.pause();
                return;
            }
            audioError.hidden = true;
            platformAudio.play().catch(function (error) {
                if (error.name === 'AbortError') return;
                audioError.textContent = 'Unable to play the Platform B announcement. Please try again.';
                audioError.hidden = false;
            });
        });
        platformAudio.addEventListener('play', updateAudioButton);
        platformAudio.addEventListener('pause', updateAudioButton);
        platformAudio.addEventListener('ended', updateAudioButton);
        audioButton.hidden = false;
    }

    panels.forEach(function (panel) {
        panel.hidden = true;
        panel.querySelector('h3').setAttribute('aria-describedby', 'station-hint');
    });
    if (hotspots) hotspots.hidden = false;
    if (stationHint) stationHint.hidden = false;
    if (traveller) traveller.removeAttribute('hidden');
});
