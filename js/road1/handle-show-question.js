AFRAME.registerComponent('handle-road1', {
    init: function () {
        console.log('in ' + this.el.id + '::init()');
        this.gotoNextScene = this.gotoNextScene.bind(this);
        this.video = this.el.components.material.material.map.image;
    },
    play: function () {
        console.log('in ' + this.el.id + '::play() and attaching listeners');
        this.video.addEventListener('ended', this.gotoNextScene);
    },
    pause: function () {
        console.log('in ' + this.el.id + '::pause() and removing listeners');
        this.video.removeEventListener('ended', this.gotoNextScene);
    }, 
    gotoNextScene: function() {
        console.log('in ' + this.el.id + '::gotoNextScene(), VIDEO ended');

        // remove video control listeners
        document.querySelector('#scenes').pause();
		var videosphere1 = document.querySelector('#videosphere1');
        var videosphere2 = document.querySelector('#videosphere2'); 	
		var question1= document.querySelector('#question1');
		var question2= document.querySelector('#question2');
		var btn1= document.querySelector('#btn1');
		var btn2= document.querySelector('#btn2');
		var btn3= document.querySelector('#btn3');
		var btn4= document.querySelector('#btn4');

		
		var videos = [videosphere1,videosphere2];
		var questions =[question1,question2];
		var buttons = [btn1,btn2,btn3,btn4];
		
		//display the correct questions correspond to the video
		for (var i=0; i< videos.length; i++){
			console.log(i);
			if (videos[i].getAttribute('visible')==true){
				questions[i].setAttribute('visible','true');
				
				//show buttons (options) related to the question, once video ended
				if (i==0){//zero
					buttons[0].setAttribute('visible', 'true');
					buttons[1].setAttribute('visible', 'true');	
				}
				else{
					var tmp  = i*2;
					buttons[tmp].setAttribute('visible', 'true');
					buttons[tmp+1].setAttribute('visible', 'true');	
				}
				break;
			}
		}
		 


    }
});
