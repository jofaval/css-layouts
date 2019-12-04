window.addEventListener("load", function () {
    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var volume = document.getElementById("volume");
    var lengthBar = document.getElementById("lengthBar");
    var mute = document.getElementById("mute");
    var loop = document.getElementById("loop");
    var durationText = document.getElementById("duration");
    var lengthText = document.getElementById("length");

    volume.onchange = updateVolume;
    volume.oninput = updateVolume;
    volume.value = 1;
    updateVolume(null);


    function updateVolume(event) {
        var value = parseFloat(volume.value);
        volume.parentElement.parentElement.firstElementChild.volume = value;
        var percentage = value * 100;
        volume.style.background = `linear-gradient(to right, #0e1116 0%, #0e1116 ${percentage - 0.01}%, #ebebeb ${percentage}%)`;
    };

    /*lengthBar.enabled = false;
    play.enabled = false;*/

    var audio = lengthBar.parentElement.parentElement.firstElementChild;
    var duration = audio.duration;
    lengthText.innerText = `${parseInt(duration / 60)}:${parseInt(duration % 60)}`;

    lengthBar.onchange = updateCurrentTime;
    lengthBar.oninput = updateCurrentTime;
    lengthBar.max = duration;
    function updateCurrentTime(event) {
        this.parentElement.parentElement.firstElementChild.currentTime = parseFloat(this.value);
    };

    audio.addEventListener("load", function () {
        /*lengthBar.enabled = true;
        play.enabled = true;*/
    });

    timeUpdateEvent(null);
    audio.addEventListener("timeupdate", timeUpdateEvent);
    function timeUpdateEvent(event) {
        var currentTime = audio.currentTime;

        var formattedTime = parseInt(currentTime % 60).toLocaleString('es-ES', { minimumIntegerDigits: 2 });
        durationText.innerText = `${parseInt(currentTime / 60)}:${formattedTime}`;
        lengthBar.value = currentTime;
        var percentage = parseFloat(currentTime / duration * 100);
        lengthBar.style.background = `linear-gradient(to right, #0e1116 0%, #0e1116 ${percentage - 0.01}%, #ebebeb ${percentage}%)`;
    }

    audio.addEventListener("ended", function () {
        var play = play;
        if (play.style.display == "none") {
            pause.click();
        }
    });

    play.onclick = function () {
        var audio = this.parentElement.parentElement.firstElementChild;
        audio.play();
        this.nextElementSibling.style.display = 'inline-flex';

        this.style.display = 'none';
    }
    pause.onclick = function () {
        this.parentElement.parentElement.firstElementChild.pause();
        this.previousElementSibling.style.display = 'inline-flex';
        this.style.display = 'none';
    };
    mute.onclick = function () {
        var audio = this.parentElement.parentElement.firstElementChild;
        audio.muted = !audio.muted;

        if (audio.muted) {
            mute.firstElementChild.style.color = "#f44336";
        } else {
            mute.firstElementChild.style = "";
        }
    };
    loop.onclick = function () {
        var audio = this.parentElement.parentElement.firstElementChild;
        audio.loop = !audio.loop;

        if (audio.loop) {
            loop.firstElementChild.style.color = "#f44336";
        } else {
            loop.firstElementChild.style = "";
        }
    };


    /*AUTOPLAY*/
    var bgsound = document.getElementById("bgsound");
    if (bgsound != null) {
        bgsound.load()
        bgsound.addEventListener("click", function () {
            bgsound.play();
        }, true);
        bgsound.addEventListener("load", function () {
            bgsound.click();
        }, true);
        bgsound.loop = true;
        bgsound.volume = 1;
    }
});