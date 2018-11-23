var nextvideonumber=1;


var videosphere1 = document.querySelector('#videosphere1');
var videosphere2 = document.querySelector('#videosphere2'); 
var videosphere3 = document.querySelector('#videosphere3');
var videosphere4 = document.querySelector('#videosphere4'); 
var videosphere5 = document.querySelector('#videosphere5');
var question1= document.querySelector('#question1');
var question2= document.querySelector('#question2');
var question3= document.querySelector('#question3');
var question4= document.querySelector('#question4');
var question5= document.querySelector('#question5');
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

		
var videos = [videosphere1,videosphere2,videosphere3,videosphere4,videosphere5];
var questions =[question1,question2,question3,question4,question5];
var buttons = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10];

/*Handler for positive answer. goto next sub level*/
AFRAME.registerComponent('handle-positive', {
    init: function() {
        el = this.el;
        this.gotoNextScene = this.gotoNextScene.bind(this);
        el.addEventListener('click', this.gotoNextScene);
    },
    gotoNextScene: function(evt) {
        if (this.el.getAttribute('visible')) {
			
			//Loop to clear video, questions and options
			for (var i=0; i< videos.length; i++){
				if (videos[i].getAttribute('visible')==true){
					console.log("aaaaa  "+i);
					//last video. go to next level
					if (i == videos.length-1){
						window.location="road2.html"
						return;
					}
					else{
						//clear current question upon selected an option
						questions[i].setAttribute('visible','false');
						videos[i].setAttribute('visible',false);
						
						//hide buttons (options) related to the question, once questions answered
						if (i==0){//zero
							buttons[0].setAttribute('visible', 'false');
							buttons[1].setAttribute('visible', 'false');	
							buttons[0].parentNode.appendChild(buttons[0]); 
							buttons[1].parentNode.appendChild(buttons[1]); 
						}
						else{
							var tmp  = i*2;
							buttons[tmp].setAttribute('visible', 'false');
							buttons[tmp+1].setAttribute('visible', 'false');	
							buttons[tmp].parentNode.appendChild(buttons[tmp]); 
							buttons[tmp+1].parentNode.appendChild(buttons[tmp+1]); 
						}
						break;
					}
				}
			}
			
		//change video	
		console.log('in window.gotoNextScene');
		if (nextvideonumber <videos.length){
			//set next video visible and play it
			videos[nextvideonumber].setAttribute('visible', 'true');
			videos[nextvideonumber].setAttribute('display', 'block');
			videos[nextvideonumber].play();
			videos[nextvideonumber].components.material.material.map.image.play();
			console.log(videos[i].toString());
			// restablish listeners
			document.querySelector('#scenes').play();
				
			// remove self
			//this.el.parentNode.removeChild(this.el); 

			// change the scene
			videos[nextvideonumber].setAttribute('visible', 'true');
			videos[nextvideonumber].components.material.material.map.image.play();
			
			nextvideonumber+=1;
		}
	} },
});


/*handler for negative answer*/
AFRAME.registerComponent('handle-negative', {
    init: function() {
        el = this.el;
        this.gotoNextScene = this.gotoNextScene.bind(this);
        el.addEventListener('click', this.gotoNextScene);
    },
    gotoNextScene: function(evt) {
        if (this.el.getAttribute('visible')) {
			
			//Loop to clear video, questions and options
			for (var i=0; i< videos.length; i++){
				if (videos[i].getAttribute('visible')==true){
					
					//last video. back to menu
					if (i == videos.length-1){
						window.location="memu.html"
					}
					//else, wrong answer. repeat video
					else{
						//clear current question upon selected an option
						questions[i].setAttribute('visible','false');
						
						//hide buttons (options) related to the question, once questions answered
						if (i==0){//zero
							buttons[0].setAttribute('visible', 'false');
							buttons[1].setAttribute('visible', 'false');	
						}
						else{
							var tmp  = i*2;
							buttons[tmp].setAttribute('visible', 'false');
							buttons[tmp+1].setAttribute('visible', 'false');	
						}
						console.log('restart video');
						//repeat video
						nextvideonumber-=1;
						videos[nextvideonumber].currentTime=0;
						videos[nextvideonumber].play();
						videos[nextvideonumber].components.material.material.map.image.play();
						nextvideonumber+=1;
						
						// restablish listeners
						document.querySelector('#scenes').play();
						break;
					}
				}
			}	
        }
    },
});

