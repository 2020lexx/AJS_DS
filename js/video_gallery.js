/*
 *
 * Copyright (c) 2017. @pablo
 *
 * Test Code
 */


// Video Controller 
var VideoCtrl = function($scope,$timeout,$sce,d_top_controls){
	 var controller = this;
 		

        controller.state = null;
        controller.API = null;
        controller.currentVideo = 0;

        var video_data_main = [
            {
             video_id:'video_0',
             video_name:'Earth',
             video_txt1:'Video Earth',
             video_txt2:'ZX DS+',
             txt_ani_id:1,
             custom_css:'',
            }, {
             video_id:'video_1',
             video_name:'Meduse HD',
             video_txt1:'Meduse HD',
             video_txt2:'ZX DS+',
             txt_ani_id:1,
             custom_css:'',
            }
             ];

        // set video sources (callit by index)
      controller.videos = [
            {
                 sources: [
                    {src: "views/video_gallery/vd/videogular.mp4", type: "video/mp4"},
            /*        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"} */
                ]
            },
            {
                 sources: [
                    {src:  "views/video_gallery/vd/vd2.mp4", type: "video/mp4"},
          //          {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg"}
                ]
            }
        ];  

        // main config  
    controller.config = {
        preload: "none",
        autoPlay: true,
                sources: controller.videos[0].sources,
                theme:{
                    url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
                },
                plugins: {
                    controls: {
                        autoHide: true,
                        autoHideTime: 1000
                    },
                }
      };

    function start_init(){ 
      // attach TXT
      var txt_element ='';
      video_data_main.forEach(function(elem,index){
        txt_s1_element = '<div id="'+elem.video_id+'"><div class="txt1">'+elem.video_txt1+'</div>';
        txt_s2_element = '<div class="txt2">'+elem.video_txt2+'</div></div>';
        txt_element = txt_element + txt_s1_element + txt_s2_element;
        // reset TXT animations
        overlay_animation(index,true);
        });
        jQuery(txt_element).insertAfter("#video-element");
 
      // attach controllers
      var btn_element = '';   
      video_data_main.forEach(function(elem,index){
        btn_s_element = '<button type="button" class="m-xs btn btn-primary btn-outline btn-depliant" onclick="angular.element(\'#top-controls\').controller().setVideo('+index+')">'+elem.video_name+'</div>';
        btn_element = btn_element + btn_s_element;
        // reset TXT animations
        //++textAni(elem.slide_id,true);
        });
        jQuery("#top-controls").append(btn_element);
        TweenMax.staggerFrom(".btn-depliant", 2, {opacity:0, delay:0.5, ease:Power4.easeOut, force3D:true}, 0.2);
        // start video
        controller.setVideo(0);
  
    }    
        // ready to play
        controller.onPlayerReady = function(API) {
                controller.API = API;
                console.log("video onPlayerReady:"+controller.currentState);
            };
        // on complete play next video
		  controller.onCompleteVideo = function() {
			       
               controller.isCompleted = true;

               // reset TXT animation
               overlay_animation(controller.currentVideo,true);        

                controller.currentVideo++;

                if (controller.currentVideo >= controller.videos.length) { controller.currentVideo = 0; }

                controller.setVideo(controller.currentVideo);
            
            };

        
		// play new video
		controller.setVideo = function(index) {
      console.log('inx:'+index);
			// fade out and stop animation
			 TweenMax.to(jQuery('#video-element'), 2, {opacity:0,  onComplete:video_change,  onCompleteParams:[index]});
       // reset TXT animation
       overlay_animation(controller.currentVideo,true);        
      };

        function video_change(index) { 
        	  // stop and set new source
     		    controller.API.stop();
            controller.currentVideo = index;
            controller.config.sources = controller.videos[index].sources;
            $timeout(controller.API.play.bind(controller.API), 300);
            // fade in and call custom animation
            TweenMax.to(jQuery('#video-element'), 2,{opacity:1,delay:1,onComplete:overlay_animation,onCompleteParams:[index,false]});
            
      }

      // Video overlay animations
      function overlay_animation(video_id,reset){
      // TXT Animations
      video_id='video_'+video_id;
      // get txt animation id from main array
      txt_ani_sw= video_data_main[get_index(video_id)].txt_ani_id;
       // call custom txt animation functions
      switch(txt_ani_sw){
        case 1: txt1Ani(video_id,reset); break;
        case 2: txt2Ani(video_id,reset); break;
        case 3: txt3Ani(video_id,reset); break;
        case 4: txt4Ani(video_id,reset); break;
        }
      }
 
      // get index fnc
      function get_index(video_id){
         for(ind=0;ind<video_data_main.length;ind++){
          if (video_data_main[ind].video_id == video_id) { 
            return ind;
          };
        };  
      }

 
   
	/*$scope.video = [ 
			{ id:'1', url:'http://www.youtube.com/embed/DqO90q0WZ0M'},
			{ id:'2', url:'http://www.youtube.com/embed/YqNszThAZjI'},
			{ id:'3', url:'http://www.youtube.com/embed/c1jp5HzzN2A'},
			{ id:'4', url:'http://www.youtube.com/embed/HkPk-uVWLMY'}
			];
 $scope.video = [ 
			{ id:'1', url:'img/1.jpg'},
			{ id:'2', url:'http://www.youtube.com/embed/HkPk-uVWLMY'},
			];

	$scope.currentIndex = 2;
    $scope.setCurrentVideoIndex = function (index) {
        $scope.currentIndex = index;
    };
    $scope.isCurrentVideoIndex = function (index) {
     
        return $scope.currentIndex === index;
	}*/ 	
 	
	// show top navi controls
	function load_controls(){
	

	}
	$timeout(function() { 
		// item loaded .. 
		// load controls
	 start_init();
	  });
}
// add controller deps
VideoCtrl.$inject =['$scope','$timeout','$sce','d_top_controls'];
 

 
function repeatAni(){
	return {
/*		setup: function(element,done){
			console.log("leave-start");
			
		},
		start: function(element,done){
			console.log("leave-start");
		},*/
		enter: function(element,done){
			 
			console.log("enter");
		 	TweenMax.to(element,1,{opacity:0, onComplete:done})
		},
		leave: function(element,done){
		 
			console.log("leave");
		},
/*		move: function(element,done){
			console.log("move");
		}*/
	}
}
 
 
angular.module('zx_ds')	
   		.controller('VideoCtrl',VideoCtrl)
    	.animation('.repeat-ani',repeatAni)
 