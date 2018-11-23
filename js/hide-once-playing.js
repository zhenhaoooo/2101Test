AFRAME.registerComponent('hide-once-playing', {
    init: function () {
        this.onPlaying = this.onPlaying.bind(this);
        this.onPause = this.onPause.bind(this);
        this.justPlay = this.justPlay.bind(this);
        
        // aggregate the 2 scenes here
        this.videosphere1 = document.querySelector('#videosphere1');
        this.videosphere2 = document.querySelector('#videosphere2');
        this.video1 = videosphere1.components.material.material.map.image;
        this.video2 = videosphere2.components.material.material.map.image;

    },
    play: function () {
        // get the visible video
        var video;
        if (this.videosphere1 && this.videosphere1.getAttribute('visible'))
            video = this.video1;
        else
            video = this.video2;

        console.log('in ' + this.el.id + '::play() with ' + video.id + ' visible');

        // add video listeners to react to them
        video.addEventListener('playing', this.onPlaying);
        video.addEventListener('pause', this.onPause);

        // add click listener to this helper text plane
        this.el.addEventListener('click', this.justPlay);

        // maybe vid already playing so set this text to invisible on start
        if (video.playing)
            this.el.setAttribute('visible', false);
    },
    pause: function () {
        // get the visible video
        var video;
        if (this.videosphere1 && this.videosphere1.getAttribute('visible'))
            video = this.video1;
        else
            video = this.video2;

        console.log('in ' + this.el.id + '::pause() with ' + video.id + ' visible');

        video.removeEventListener('playing', this.onPlaying);
        video.removeEventListener('pause', this.onPause);

        this.el.removeEventListener('click', this.justPlay);
    },
    onPlaying: function (evt) {
        console.log('in ' + this.el.id + '::onPlaying()');
        this.el.setAttribute('visible', false);
    },
    onPause: function (evt) {
        console.log('in ' + this.el.id + '::onPause()');
        this.el.setAttribute('visible', true);
    },
    justPlay: function (evt) {
        var video;
        if (this.videosphere1 && this.videosphere1.getAttribute('visible'))
            video = this.video1;
        else
            video = this.video2;

        console.log('in ' + this.el.id + '::justPlay() for video=' + video.id);

        if (!video)
            return;

        if (video.paused)
            video.play();
    }
});
