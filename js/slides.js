/*
 *
 * Copyright (c) 2017. @pablo
 *
 * Test Code
 */



// Depliant controller

var SlidesCtrl = function($scope,$timeout,slides_data){

	var data_main_tc = slides_data.slides_data;

    var slide ;
	var currentSlide ;
	var slide_prev;
	var slide_auto = true;
	var slide_timer_id;
	var slide_first_id = 'slide1';

 	// execute when document is loaded
	angular.element(document).ready(function () {


	
	 	// maximize container
 		jQuery('#main-container').height((jQuery('body').height())-127);
		// init slide procedire
		 start_init();
    });

	function start_init(){ 
			 
		// attach slide_code + css
		var css_element ='';		  
	 	data_main_tc.forEach(function(elem,index){
	 		 element = '<div id="'+elem.slide_id+'" class="slide" style="opacity:0;"><img class="bg" src=\'views/slides/slides/'+elem.slide_id+'/'+elem.bg_src+'\' />'+elem.slide_code+'</div>';
 	 	//	 element = '<div id="'+elem.slide_id+'" class="slide" style="background-size:100% 100%;opacity:0;background-image:url(views/slides/slides/'+elem.slide_id+'/'+elem.bg_src+')">'+elem.slide_code+'</div>';
 		  	 css_element = css_element +elem.css_code;
 		  	 jQuery('#home_slider').append(element);
			});
	 	// attach css
	 	css_element = '<style type="text/css">' + css_element + '</style>';
	 	jQuery('#home_slider').append(css_element);
	 	// attach controllers
	 	var btn_element = '';	  
	 	data_main_tc.forEach(function(elem,index){
	 		btn_s_element = '<button type="button" class="m-xs btn btn-primary btn-outline btn-slides" onclick="angular.element(\'#home_slider\').scope().gotoSlide('+elem.slide_id+')">'+elem.slide_name+'</div>';
		 	btn_element = btn_element + btn_s_element;
		 	// reset TXT animations
 			textAni(elem.slide_id,true);
			});
//	   	jQuery("#top-controls").append(btn_element);
//	    TweenMax.staggerFrom(".btn-slides", 2, {opacity:0, delay:0.5, ease:Power4.easeOut, force3D:true}, 0.2);


		// Main slider init
		 slide=jQuery(".slide");
 		 currentSlide = slide.last();
		 slide_prev=slide.last();
		 slide_auto = true;
 		// start 
       goToSlide(currentSlide,slide_prev);
 	
 	}
 	
 	 
	// main continuos slider show time
	function slide_timer(slide_id){
		// if manual mode is on, stop auto slider
		if(!slide_auto){ return; };
//++		console.log("go next:"+slide_auto);
		// get data from main array (in seconds)
	 	timer = data_main_tc[get_index_img(slide_id)].std_time;
	    slide_timer_id = setTimeout(goToSlide,timer*1000);
	}	 

//++jQuery("#gonext").on('click', function go(){ani_tween.pause();goToNextSlide()});
//++jQuery("#goprev").on('click', function go(){ani_tween.pause();goToPrevSlide()});
 
//++function goToPrevSlide() {  if ( !currentSlide.prev().length) { goToSlide(slide.last(),slide.first());} else{goToSlide( currentSlide.prev(), currentSlide);}}
/*
function goToNextSlide() {  
	// next
	if ( !currentSlide.next().length) { 
		console.log(slide.first());
		goToSlide(slide.first(),slide.last());
	}else{
		goToSlide( currentSlide.next(), currentSlide);
	}
}
*/

// Manual slide switch
$scope.gotoSlide = function(slide_object){
	console.log("goto:"+jQuery(slide_object).attr('id')+ "curr:"+currentSlide.attr('id'));
	// stop continuous slider timer
	clearTimeout(slide_timer_id);
	slide_auto = false;
	// call slide
	goToSlide(jQuery(slide_object),currentSlide);
}

function goToSlide() { 
 	 // check if last
	if (!currentSlide.next().attr('id')) { 
		console.log("last");
		slide_id=slide.first().attr("id");
		slide_prev_id=slide.last().attr("id");
		currentSlide=slide.first();
	 } else {
	    slide_id = currentSlide.next().attr("id");
		slide_prev_id=currentSlide.attr("id");
		currentSlide=currentSlide.next();
	} 
	
 	console.log('goToSlide from:'+slide_prev_id+' to:'+slide_id);

	transitionAni(slide_id,slide_prev_id); 
	
 }

// Transition Complete
function transitionComplete(slide_id){
	console.log("transitionComplete:"+slide_id);
	// start slide timer
	slide_timer(slide_id);
	// background animation
 	backgroundAni(slide_id,false);
	// TXT animation
	textAni(slide_id,false);

}
// Transition Reset Previous Slide (execute when prev slide is hidden so can reset ran animations)
function transitionReset(slide_prev_id){
	console.log('transitionReset:'+slide_prev_id);
	// reset background animation 
	backgroundAni(slide_prev_id,true);
	// reset TXT animation
 	textAni(slide_prev_id,true);
}

// Transition Animations
function transitionAni(slide_id,slide_prev_id){

 	// get bganimation id from main array
	tr_ani_sw= data_main_tc[get_index_img(slide_id)].tr_ani_id;
	 console.log("transition:"+slide_id+"  "+tr_ani_sw);
	// call custom transition animation functions
	switch(tr_ani_sw){
		case 1: tr1Ani(slide_id,slide_prev_id);break;
		case 2: tr2Ani(slide_id,slide_prev_id);break;
		default: tr1Ani(slide_id,slide_prev_id);break;
		}	
	}
// Background Animations
function backgroundAni(slide_id,reset){
	// get bganimation id from main array
	bg_ani_sw= data_main_tc[get_index_img(slide_id)].bg_ani_id;
	// call custom txt animation functions
	switch(bg_ani_sw){
		case 1: bg1Ani(slide_id,reset); break;
		case 2: bg2Ani(slide_id,reset); break;
		case 3: bg3Ani(slide_id,reset); break;
		case 4: bg4Ani(slide_id,reset); break;
		}
	}
// TXT Animations
function textAni(slide_id,reset){
	// get txt animation id from main array
	txt_ani_sw= data_main_tc[get_index_img(slide_id)].txt_ani_id;
	// call custom txt animation functions
	switch(txt_ani_sw){
		case 1: txt1Ani(slide_id,reset); break;
		case 2: txt2Ani(slide_id,reset); break;
		case 3: txt3Ani(slide_id,reset); break;
		case 4: txt4Ani(slide_id,reset); break;
		case 5: txt5Ani(slide_id,reset); break;
		}
	}


// TR
function tr1Ani(slide_id,slide_prev_id){
   	var SlideAni = new TimelineLite( );
		SlideAni.to('#'+slide_prev_id, 1, {autoAlpha:0,display:'none',onComplete:transitionReset, onCompleteParams:[ slide_prev_id]});
	 	SlideAni.to('#'+slide_id, 1, {autoAlpha:1,display:'block',onComplete:transitionComplete, onCompleteParams:[ slide_id ]});
}
function tr2Ani(slide_id,slide_prev_id){
  	var SlideAniPrev = new TimelineLite( );
  	var SlideAni= new TimelineLite( );
		SlideAniPrev.to('#'+slide_prev_id, 1, {autoAlpha:0,display:'none',onComplete:transitionReset, onCompleteParams:[ slide_prev_id]});
	 	SlideAni.to('#'+slide_id, 1, {autoAlpha:1,display:'block',onComplete:transitionComplete, onCompleteParams:[ slide_id ]});
}
 
 	// get index fnc
	function get_index_img(id){
		 for(ind=0;ind<data_main_tc.length;ind++){
		 	if (data_main_tc[ind].slide_id == id) { 
				return ind;
			};
		};  
	}
 
 $timeout(function() { 

	//jQuery("body").find("#top-controls").append("<p>hi</p>");
		// item loaded .. 
		// load controls
	// 	load_top();
		//start animation
		//controller.setVideo(0);
		 	// attach controllers	  
		// clear top controls
	
	})
	// unload
	$scope.$on('$destroy', function exit() {
		// stop timers
		clearTimeout(slide_timer_id);
		slide_auto = false;
		transitionReset(currentSlide.attr('id'));

	})

}
// add controller deps
SlidesCtrl.$inject =['$scope','$timeout','slides_data'];


angular
   .module('zx_ds')
   .controller('SlidesCtrl',SlidesCtrl)
 
