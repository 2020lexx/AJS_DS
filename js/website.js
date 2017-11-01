/*
 *
 * Copyright (c) 2017. @pablo
 *
 * Test Code
 */

// Web SIte
var WebSiteCtrl = function($scope,$timeout,web_site_data,viewport_var){

	$scope.web_site_data = web_site_data.web_site_data;
		
    
	function start_init(){

        viewportH = jQuery(window).height();

         // main-container
        jQuery('#main-container').height(viewportH);
        // wrapper
        jQuery('.wrapper').height(viewportH);
		// set viewport
	 
		html_code = '<iframe style="height:'+viewportH +'px;width:100%;" src="'+$scope.web_site_data.site+'"></iframe>';
		// append
		jQuery('#web_site').append(html_code);
		TweenLite.to('#web_site',2,{opacity:1,delay:1});
	}

	// load page
	$timeout(function(){

		start_init();
	});
	// unload
	$scope.$on('$destroy', function exit() {

	})
}
// add controller deps
WebSiteCtrl.$inject =['$scope','$timeout','web_site_data','viewport_var'];

angular.module('zx_ds')	
   	   .controller('WebSiteCtrl',WebSiteCtrl)
  