/*
 * Copyright (c) 2017. @pablo
 *
 * Test Code
 */



var  MainCtrl = function($scope,$timeout,viewport_var) {


	// set viewport heigth
    function set_viewport(){

        viewportH = jQuery(window).height();
   //++     viewport_var.update(viewportH);
    
    }

   
  	$scope.topControls = d_top_controls.v_top_controls /// ??????

   
    $timeout(function() { 
	   // viewport
        set_viewport();
 	 });
    
};
// add controller deps
MainCtrl.$inject =['$scope','$timeout','viewport_var'];
 

angular
    .module('zx_ds')
    .controller('MainCtrl', MainCtrl) 