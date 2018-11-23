AFRAME.registerComponent('handle-road2', {
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
		var videosphere3 = document.querySelector('#videosphere3');
        var videosphere4 = document.querySelector('#videosphere4');
		var videosphere5 = document.querySelector('#videosphere5');	
		var videosphere6 = document.querySelector('#videosphere6');
		var question1= document.querySelector('#question1');
		var question2= document.querySelector('#question2');
		var question3= document.querySelector('#question3');
		var question4= document.querySelector('#question4');
		var question5= document.querySelector('#question5');
		var question6= document.querySelector('#question6');
		var btn1= document.querySelector('#btn1');
		var btn2= document.querySelector('#btn2');
		var btn3= document.querySelector('#btn3');
		var btn4= document.querySelector('#btn4');
		var btn5= document.querySelector('#btn5');
		var btn6= document.querySelector('#btn6');
		var btn7= document.querySelector('#btn7');
		var btn8= document.querySelector('#btn8');
		var btn9= document.querySelector('#btn9');
		var btn10= document.querySelector('#btn10');
		var btn11= document.querySelector('#btn11');
		var btn12= document.querySelector('#btn12');
		
		
		var videos = [videosphere1,videosphere2,videosphere3,videosphere4,videosphere5,videosphere6];
		var questions =[question1,question2,question3,question4,question5,question6];
		var buttons = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12];
		
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
