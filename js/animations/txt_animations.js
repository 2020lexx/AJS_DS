/*
* ZX_DS+
*/
/* Animations */

// TXT
function txt1Ani(slide_id,reset){
	//++console.log("txt ani1:"+slide_id);
	  if(!reset){ 
	 	// txt animation
		TweenMax.to('#'+slide_id+' .txt1, #'+slide_id+' .txt2', 1, {alpha:1});
		TweenMax.to('#'+slide_id+' .txt1', 2, {marginLeft: "10%" }, .3); 
		TweenMax.to('#'+slide_id+' .txt2', 3, {marginLeft: "10%" }, .3);  
	} else {
		// reset 
		TweenMax.killTweensOf('#'+slide_id+' .txt1, #'+slide_id+' .txt2');
 		TweenMax.to('#'+slide_id+' .txt1, #'+slide_id+' .txt2',0,{marginLeft:0,alpha:0});
	}
}
function txt2Ani(slide_id,reset){
	//++console.log("txt2");
	 if(!reset){ 
		TweenMax.to('#'+slide_id+' .txt1, #'+slide_id+' .txt2', 1, {alpha:1});
		TweenMax.to('#'+slide_id+' .txt1', 2, {marginLeft: "20%" }, .3); 
 		TweenMax.to('#'+slide_id+' .txt2', 7, {marginLeft: "20%" });  
		TweenMax.to('#'+slide_id+' .img1', 2, {opacity: 1 , delay:7});  
	} else {
		TweenMax.killTweensOf('#'+slide_id+' .txt1, #'+slide_id+' .txt2');
	 	TweenMax.to('#'+slide_id+' .txt1, #'+slide_id+' .txt2',0,{marginLeft:0,alpha:0});
		TweenMax.to('#'+slide_id+' .img1', 2, {opacity: 0 });  
 	}
}
/* blog slide */
function txt3Ani(slide_id,reset){	
	 if(!reset){
	 	TweenMax.to('#'+slide_id+' .txt1, #'+slide_id+' .txt2', 1, {alpha:1});
		TweenMax.to('#'+slide_id+' .txt1', 2, {marginLeft: "10%" }, .3); 
		TweenMax.to('#'+slide_id+' .txt2', 4, {marginLeft: "10%" }, .3);  
	} else {
		TweenMax.killTweensOf('#'+slide_id+' .txt1, #'+slide_id+' .txt2');
  	    TweenMax.to('#'+slide_id+' .txt1, #'+slide_id+' .txt2',0,{marginLeft:0,alpha:0});
	 
	}
}
function txt4Ani(slide_id,reset){
	if(!reset){ 
		var Slide4Ani = new TimelineLite( );
		TweenMax.to('#'+slide_id+' .txt1, #'+slide_id+' .txt2 ', 1, {alpha:1});
		TweenMax.to('#'+slide_id+' .txt1', 2, {marginLeft: "10%" }, .3); 
		TweenMax.to('#'+slide_id+' .txt2', 4, {marginLeft: "10%" }, .3); 
		Slide4Ani.to('#'+slide_id+' .txt3' , 2, {alpha:1,marginTop: "8%" , delay:2})
 	 	Slide4Ani.to('#'+slide_id+' .img3',3,{alpha:1,marginTop:"5%"})
 	} else {  		
 		TweenMax.killTweensOf('#'+slide_id+' .txt1, #'+slide_id+' .txt2,#'+slide_id+' .txt3 ,#'+slide_id+' .txt4, #'+slide_id+' .img3');
		if(Slide4Ani){ Slide4Ani.kill(); }
		TweenMax.to('#'+slide_id+' .txt1, #'+slide_id+' .txt2',0,{marginLeft:0,alpha:0});
		TweenMax.to('#'+slide_id+' .txt3, #'+slide_id+' .txt4',0,{marginTop:0,alpha:0});
	 	TweenMax.to('#'+slide_id+' .img3',0,{marginTop:0,alpha:0});
 
	}
	 
}
function txt5Ani(slide_id,reset){
	//++console.log("txt ani1:"+slide_id);
	  if(!reset){ 
	 	// txt animation
		TweenMax.to('#'+slide_id+' .txt5, #'+slide_id+' .txt6', 1, {alpha:1});
		TweenMax.to('#'+slide_id+' .txt5', 2, {marginLeft: "50%" }, .3); 
		TweenMax.to('#'+slide_id+' .txt6', 3, {marginLeft: "50%" }, .3);  
	} else {
		// reset 
		TweenMax.killTweensOf('#'+slide_id+' .txt5, #'+slide_id+' .txt6');
 		TweenMax.to('#'+slide_id+' .txt5, #'+slide_id+' .txt6',0,{marginLeft:0,alpha:0});
	}
} 