/*
 *
 * Copyright (c) 2017. @pablo
 *
 * Test Code
 */


// Video Controller 
var MenuCtrl = function($scope,$timeout,d_top_controls,menu_data){

		$scope.showSingleProduct = false;

		$scope.menu_data = menu_data.menu_data;
		

	// set category list table					
	$scope.catList = function(cat_id){
	//	console.log("->"+JSON.stringify($scope.menu_data[cat_id].data[1].name));
		$scope.showSingleProduct = false;
		 $scope.list_data = $scope.menu_data[cat_id].data;
		 // list animation
		setTimeout(function(){TweenMax.staggerTo('.list_item',2,{opacity:1},0.5)},1000);
		TweenLite.to('.prod_item',0,{opacity:0});
	 	TweenLite.to('.restaurant_bg',2,{opacity:0});
	// setTimeout(function(){new Vivus('my-div', {type: 'oneByOne', duration: 2500,file: 'views/menu/svg1/a.svg'})},5000);
	} 


	// show single product
	$scope.singleProd = function(item){
		$scope.showSingleProduct = true;
		$scope.single_product = item;
		TweenMax.to('.prod_item',2,{opacity:1});
		TweenLite.to('.list_item',0,{opacity:0});



	}
	// close single product
	$scope.singleProdClose = function(){
		$scope.showSingleProduct = false;
		TweenMax.staggerTo('.list_item',2,{opacity:1},0.5);
		TweenLite.to('.prod_item',0,{opacity:0});
	}
	// load page
	$timeout(function(){
   		
   		viewportH = jQuery(window).height();
        // main-container
        jQuery('#main-container').height(viewportH);
        // wrapper
        jQuery('.wrapper').height(viewportH);
		// add bh
		jQuery('#main-container').css('background','url("views/menu/imgs/texture.jpg") no-repeat').css('background-size','cover');
		// cat animation
		TweenMax.staggerTo('.cat_item',2,{opacity:1,delay:1},0.5);
 		// title animation
 		TweenMax.to('#restaurant_title',2,{opacity:1,delay:1});
	});


}
// add controller deps
MenuCtrl.$inject =['$scope','$timeout','d_top_controls','menu_data'];

// category animation
var item_ani = function(){
	return {

		removeClass:function(element,className, done) {
	      console.log(element+"cat-removeclass");
	        done();
	     
	    },
		beforeRemoveClass:function(element,className, done) {
	      console.log(element+"cat-beforeremoveclass");
	        done();
	     
	    },
	    beforeAddClass:function(element,className, done) {
	      console.log(element+"cat-beforeaddclass");
	        done();
	     
	    },
		addClass: function(element,className, done) {
	      console.log(element+"cat-addclass");
	        done();
	     
	    },
		 move: function(element, done) {
	      console.log(element+"cat-move");
	        done();
	     
	    },
		 animate: function(element, done) {
	      console.log(element+"cat-animate");
	        done();
	     
	    },
	    enter: function(element, done) {
	      console.log(element+"cat-enter");
	        done();
	     
	    },
	    leave: function(element, done) {
	        console.log(element+"cat-live");
	        done();
	    }
  	}
}
// item animation
var xxitem_ani = function(){
	return {
	    enter: function(element, done) {
	      console.log(element+"it-enter");
	        done();
	     
	    },
	    leave: function(element, done) {
	        console.log(element+"it live");
	        done();
	    }
  	}
}
// prod animation
var prod_ani = function(){
	return {
	    enter: function(element, done) {
	      console.log(element+"pr-enter");
	        done();
	     
	    },
	    leave: function(element, done) {
	        console.log(element+"pr-live");
	        done();
	    }
  	}
} 
angular.module('zx_ds')	
   	   .controller('MenuCtrl',MenuCtrl)
 	//  .animation('.cat_ani',cat_ani)
	      .animation('.item_ani',item_ani)
	   .animation('.prod_ani',prod_ani) 
