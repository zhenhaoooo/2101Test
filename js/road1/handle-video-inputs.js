AFRAME.registerComponent('handle-video-inputs', {
    init: function () {
        console.log('in ' + this.el.id + '::init()');
        this.onClick = this.onClick.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.debug = this.debug.bind(this);
        
        this.videosphere1 = document.querySelector('#videosphere1');
        this.videosphere2 = document.querySelector('#videosphere2');

		
        this.video1 = videosphere1.components.material.material.map.image;
        this.video2 = videosphere2.components.material.material.map.image;

    }, 
    play: function () {
        console.log('in ' + this.el.id + '::play() and attaching listeners');
        window.addEventListener('click', this.onClick);
        window.addEventListener('keyup', this.onKeyUp);
    },
    pause: function () {
        console.log('in ' + this.el.id + '::pause() and removing listeners');
        window.removeEventListener('click', this.onClick);
        window.removeEventListener('keyup', this.onKeyUp);
    },
    onClick: function (evt) {
        console.log('in ' + this.el.id + '::onClick()');
        var video;
        if (this.videosphere1 && this.videosphere1.getAttribute('visible'))
            video = this.video1;
		else
            video = this.video2;

        this.togglePlay(video, true);
    },
    onKeyUp: function (evt) {
        //console.log('in ' + this.el.id + '::onKeyUp()');
        var video;
        if (this.videosphere1 && this.videosphere1.getAttribute('visible'))
            video = this.video1;
        else 
            video = this.video2;

        if (evt.code == "Space")
            this.togglePlay(video);
        else if (evt.code == "KeyS")
            this.skipToEnd(video);
        else if (evt.code == 'KeyD')
            this.debug();
    },
    togglePlay: function (video, isJustPlay=false) {
        console.log('in ' + this.el.id + '::togglePlay() isJustPlay='+ isJustPlay + ' with video=' + video.id );

        if (!video)
            return;

        if (isJustPlay){
            if (video.paused)
                video.play();
        }
        else {
            if (!video.paused)
                video.pause();
            else
                video.play();
        } 
    },
    skipToEnd: function (video) {
        console.log('in ' + this.el.id + '::skipToEnd() for video=' + video.id);
        video.currentTime = 190;
        video.pause();
    },
    debug: function() {
       // console.log('in ' + this.el.id + '::debug()');
       // this.videosphere2.pause();
		//this.videosphere3.pause();
		//this.videosphere4.pause();
       // console.log('in ' + this.el.id + '::debug() AFTER pause ' + videosphere2.id + ' paused=' + this.videosphere2.components.material.material.map.image.paused);
    }
});
