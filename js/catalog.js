/*
 * Copyright (c) 2017. @pablo
 *
 * Test Code
 */


// Catalog controller
var CatalogCtrl = function($scope,$timeout,catalog_data){

		// main data
		$scope.catalog_data = catalog_data.catalog_data;
		var margin_move = '650px';
		$scope.showSingleProduct = false;

	function start_init(){ 
				 
			// attach slide_code + css
			var css_element ='';		  
		 	$scope.catalog_data.forEach(function(elem,index){
		 		cat_id = elem.cat_id;
		 		var element_slide ='';
		 		// catalog line
		 		elem.data.forEach(function(elem_cat,index_ca){
		 			 element_slide = element_slide + '<div  id="'+cat_id+"_"+elem_cat.prod_id+'" onClick="angular.element('+cat_id+"_"+elem_cat.prod_id+').scope().select(\''+cat_id+","+elem_cat.prod_id+'\')" class="catalog_item" style="background-image:url(\'views/catalog/catalog/'+cat_id+'/'+elem_cat.img_sl+'\')" >'+elem_cat.code_sl+'</div>';
		 		//	 element_slide = element_slide + '<div id="'+cat_id+"_"+elem_cat.prod_id+'" class="catalog_item" ><img src=\'views/catalog/catalog/'+cat_id+'/'+elem_cat.img_sl+'\' />'+elem_cat.code_sl+'</div>';
		 		   	 css_element = css_element +elem_cat.css_sl;
		 		  	 });
		 		// attach elements on single catalog
				jQuery('#'+cat_id).append(element_slide);
	 			
				});
		 	// attach css
		 // 	css_element = '<style type="text/css">' + css_element + '</style>';
		  	jQuery('#catalog_home').append(css_element);
		  	// start scroll
		 	scrolling();
	 	
	 	}
 
 	// automatic horizontal scrolling
 	function scrolling(){

 	  catalog_0_sl = TweenMax.to('#catalog_0',10, {marginLeft:'-'+margin_move,repeatDelay:2,yoyo:true,repeat:-1,useFrames:false,ease:Linear.easeNone});
 	  catalog_1_sl = TweenMax.to('#catalog_1',10, {marginLeft:'0px',repeatDelay:1,yoyo:true,repeat:-1,useFrames:false,ease:Linear.easeNone});
 	  catalog_2_sl = TweenMax.to('#catalog_2',10, {marginLeft:'-'+margin_move,repeatDelay:3,yoyo:true,repeat:-1,useFrames:false,ease:Linear.easeNone});
 	  catalog_0_bg =TweenMax.to('#catalog_home #catalog_0 .catalog_item',10,{backgroundPositionX:'0px',repeatDelay:2,yoyo:true,repeat:-1,useFrames:false,ease:Linear.easeNone})
 	  catalog_1_bg =TweenMax.to('#catalog_home #catalog_1 .catalog_item',9,{backgroundPositionX:'-100px',repeatDelay:1,yoyo:true,repeat:-1,useFrames:false,ease:Linear.easeNone})
 	  catalog_2_bg =TweenMax.to('#catalog_home #catalog_2 .catalog_item',8,{backgroundPositionX:'0px',repeatDelay:3,yoyo:true,repeat:-1,useFrames:false,ease:Linear.easeNone})
		
	  // show
	   TweenLite.to('#catalog_home',4,{opacity:1});
	}


  // dragging function
  catalog_0_dg = Draggable.create("#catalog_0", {
		type:"x",
	 	bounds:{ left:-650,width:2900},
		throwProps:true,
		dragClickables:true,
		onPress:function() {
			// stop dragging
		     catalog_0_sl.pause(); 
	 		 catalog_0_bg.pause();
	 		},
		onDragStart:function() {
			// stop dragging
		     catalog_0_sl.pause(); 
	 		 catalog_0_bg.pause();
	 		},
 		onClick:function() {
		// stop dragging
	     catalog_0_sl.pause(); 
 		 catalog_0_bg.pause();
 		}
		});
 catalog_1_dg = Draggable.create("#catalog_1", {
		type:"x",
	 	bounds:{ left:-650,width:2900}, 
		throwProps:true,
		dragClickables:true,
		onPress:function() {
			// stop dragging
		     catalog_1_sl.pause(); 
	 		 catalog_1_bg.pause();
	 		},
		onDragStart:function() {
			// stop dragging
		     catalog_1_sl.pause(); 
	 		 catalog_1_bg.pause();
	 		},
 		onClick:function() {
		// stop dragging
	     catalog_1_sl.pause(); 
 		 catalog_1_bg.pause();
 		}
		});

 catalog_2_dg = Draggable.create("#catalog_2", {
		type:"x",
	 	bounds:{ left:-650,width:2900}, 
		throwProps:true,
		dragClickables:true,
		onPress:function() {
			// stop dragging
		     catalog_2_sl.pause(); 
	 		 catalog_2_bg.pause();
	 		},
		onDragStart:function() {
			// stop dragging
		     catalog_2_sl.pause(); 
	 		 catalog_2_bg.pause();
	 		},
 		onClick:function() {
		// stop dragging
	     catalog_2_sl.pause(); 
 		 catalog_2_bg.pause();
 		}
		});


	// call product page
	$scope.select = function(select) {

		// clear last code
		clear_single_product_code();

		show_prod = new TimelineMax();
		show_prod.to('#catalog_home',1,{autoAlpha:0});
		show_prod.to('#catalog_home',0,{display:'none'});
		show_prod.to('#catalog_single_prod',0,{display:'block'});
		show_prod.to('#catalog_single_prod',1,{autoAlpha:1});
	 		// show html
 	 	// call data
 	 	call_prod = select.split(',');
 	 	// get cat_id
 	 	prod_cat = call_prod[0];
 	 	prod_id = call_prod[1];
 	 	console.log(prod_cat +"-"+prod_id);
 	 	// get catalog item from array
 	 	single_cat = $scope.catalog_data[get_index_cat(prod_cat)];
 	 	// get single prod from catalog.data[x]
 	 	$scope.single_product = single_cat.data[get_index_prod(single_cat.data,prod_id)];
 		 // prod img
 	    single_product_img='views/catalog/catalog/'+prod_cat+'/'+$scope.single_product.img_prd;
 		jQuery('#catalog_single_prod #single_product_img').attr('src',single_product_img);
 		// code
 		jQuery('#catalog_single_prod #single_product_code').append($scope.single_product.code_prd);
 		// other data
 /*		jQuery('#catalog_single_prod #single_product_new_cost_prd').append('€ '+$scope.single_product.new_cost_prd);
 		jQuery('#catalog_single_prod #single_product_old_cost_prd').append('€ '+$scope.single_product.old_cost_prd);
 		jQuery('#catalog_single_prod #single_product_end_prom').append($scope.single_product.end_prom);
 */		// Qr
 		qr_code = '<div id="qrcode"></div> 	<script type="text/javascript"> var qrcode = new QRCode(document.getElementById("qrcode"), {  text: "'+$scope.single_product.qr_data+'",  width: 128,  height: 128,   colorDark : "#000000",  colorLight : "#ffffff",  correctLevel : QRCode.CorrectLevel.H }); </script>';
 		jQuery('#catalog_single_prod #single_product_qr').append(qr_code);
		// SVG
		svg_code = '<svg height="700" width="700">  <path id="svg1" stroke="red"  stroke-width="3" fill="none" d="M220 635 L220 530 L440 530 L440 200" />   <circle stroke="red" stroke-width="3"  fill="red" cx="440" cy="200" r="10" />   </svg>';
		svg_code = '<svg height="700" width="700">  <path id="svg1" stroke="red"  stroke-width="3" fill="none" d="M220 635 L220 530 L290 530 L290 400" />   <circle stroke="red" stroke-width="3"  fill="red" cx="290" cy="400" r="10" />   </svg>';
	 	svg_code = '<svg height="700" width="700">  <path id="svg1" stroke="red"  stroke-width="3" fill="none" d="M220 635 L220 530 L550 530 L550 93 L600 93" />   <circle stroke="red" stroke-width="3"  fill="red" cx="600" cy="93" r="10" />   </svg>';
		svg_code = '<svg height="700" width="700">  <path id="svg1" stroke="red"  stroke-width="3" fill="none" d="M220 635 L220 530 L180 530 L180 305 L140 305" />   <circle id="svg_circle" stroke="red" stroke-width="3"  fill="red" cx="140" cy="305" r="10" />   </svg>';
	//svg_code =' <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="699.000000pt" height="659.000000pt" viewBox="0 0 699.000000 659.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,659.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path id="svg1" stroke="red"  stroke-width="10" fill="none" d="M150 0 L75 200"/> </g></svg>';

	 	jQuery('#catalog_single_prod #catalog_single_prod_map ').append($scope.single_product.svg_path);
	
		var svg1 = document.querySelector('#catalog_single_prod_map #svg'+1); 
		// blink circle destination
		var bl = new TimelineMax({repeat:13, yoyo:true});
			bl.to('#svg_circle',.5,{opacity:0});
		var tl = new TimelineMax({repeat:1, yoyo:false});

		//create a timeline with 2 tweens that draw 2 separate strokes
	 	tl.add(createLineTween(svg1)) ;
				 	
	};

	// goto scrolling page
	$scope.close_single_prod = function(){
		// start dragging
		catalog_0_sl.play(); 
	 	catalog_0_bg.play();
		catalog_1_sl.play(); 
	 	catalog_1_bg.play();
		catalog_2_sl.play(); 
	 	catalog_2_bg.play();

		show_drag = new TimelineMax();
		show_drag.to('#catalog_single_prod',1,{autoAlpha:0});
		show_drag.to('#catalog_single_prod',0,{display:'none'});
		show_drag.to('#catalog_home',0,{display:'block'});
		show_drag.to('#catalog_home',1,{autoAlpha:1,onComplete:clear_single_product_code});
		TweenLite.to('#svg_circle',0,{opacity:0});
	}


	function clear_single_product_code(){
	    // clear code
		jQuery('#catalog_single_prod #single_product_code').empty();
		jQuery('#catalog_single_prod #single_product_qr').empty();
		jQuery('#catalog_single_prod #catalog_single_prod_map ').empty();

	}
	// svg map animation
	//this function creates a single tween that animates the stroke of an svg
	function createLineTween(svg) { 
	   var pathObject = {length:0, pathLength:svg.getTotalLength()}; 
	   var tween = TweenLite.to(pathObject, 4, {length:pathObject.pathLength, onUpdate:drawLine, onUpdateParams:[pathObject, svg], immediateRender:true});
	   return tween;
	};


	 //update stroke   
	 function drawLine(obj, svg) {
	  svg.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
	 };
	// close single product page and return to scrolling page
	$scope.singleProdClose = function(){

		// show html
 		$scope.showSingleProduct = false;
	}
	$scope.stop = function(){
 	 	console.log("stop:"+jQuery('#catalog_0').css('margin-left'));
 	//	catalog_0_sl.pause(); 
 	//	 catalog_0_bg.pause();
  		} 
 

 
      // get index cat fnc
      function get_index_cat(catalog_id){
         for(ind=0;ind<$scope.catalog_data.length;ind++){
          if ($scope.catalog_data[ind].cat_id == catalog_id) { 
            return ind;
          };
        };  
      }
      // get index pro fnc
      function get_index_prod(prod_data,prod_id){
         for(ind=0;ind<prod_data.length;ind++){
          if (prod_data[ind].prod_id == prod_id) { 
            return ind;
          };
        };  
      }




 $timeout(function() { 

	 start_init();
	
	})

	// unload
	$scope.$on('$destroy', function exit() {
	 	 // clear code
		jQuery('#catalog_single_prod #single_product_code').empty();
		jQuery('#catalog_single_prod #single_product_qr').empty();
		jQuery('#catalog_single_prod #catalog_single_prod_map ').empty();
		TweenLite.to('#catalog_single_prod',0,{autoAlpha:0});
		TweenLite.to('#catalog_home',0,{autoAlpha:0});
		TweenLite.to('#svg_circle',0,{opacity:0});

		// kill draggable	
	    catalog_0_sl.kill(); 
 		catalog_0_bg.kill();
    	catalog_1_sl.kill(); 
 		catalog_1_bg.kill();
    	catalog_2_sl.kill(); 
 		catalog_2_bg.kill();
	
	})










}
// add controller deps
CatalogCtrl.$inject =['$scope','$timeout','catalog_data'];


angular
   .module('zx_ds')
   .controller('CatalogCtrl',CatalogCtrl)