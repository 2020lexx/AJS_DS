/*
 *
 * Copyright (c) 2017. @pablo
 *
 * Test Code
 */


// Full Navigation Controller 
var FullNavigationCtrl = function($scope,$timeout,main_menu_data){
 
 	// get data
 	var main_data = main_menu_data.main_menu_data;
 
 	function start_init(){

 		// get data+'
 		html_code = '<source src="views/common/bg/'+main_data.video+'"  type="video/mp4">';
 		jQuery('#bgvid').append(html_code);
 	 	// start video
    	TweenMax.to('#bgvid',1,{opacity:1,delay:1});
 		// cat animation
		TweenMax.staggerTo('.btn-menu',2,{opacity:1,delay:1},0.1);
 		TweenMax.to('.btn-menu .nav-label',1,{opacity:1,delay:3});

 		// show footer
    //	TweenMax.to('.footer-bar',.1,{marginBottom:0,delay:4});
 	//	TweenMax.staggerTo('.weather_item',2,{opacity:1,delay:5},0.1);

 	}
 	  
	$timeout(function(){
 		// init
 		start_init();
	});
	// unload
/*	$scope.$on('$destroy', function exit() {
		
		TweenMax.to('.footer-bar',0,{marginBottom:-110});
 

	})
*/
}
// add controller deps
FullNavigationCtrl.$inject =['$scope','$timeout','main_menu_data'];

 
angular.module('zx_ds')	
   	   .controller('FullNavigationCtrl',FullNavigationCtrl)
  