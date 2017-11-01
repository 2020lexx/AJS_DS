/*
* ZX_DS+
*/
/* Animations */
// BG 
// zooming in - down-right
function bg1Ani(slide_id,reset){
	 if(!reset){ 
		 // start zoom
		var tl = new TimelineMax();
		tl.to('#'+slide_id+' .bg', 5, { height: '+=25%',width:'+=25%',  force3D:true,	ease: Linear.easeNone  });
	} else {
		// set inital 100%
		TweenMax.killTweensOf('#'+slide_id+' .bg');
		TweenLite.set('#'+slide_id+' .bg',{ height: '',width:''});
	}
 }
 function bg2Ani(slide_id,reset){
	 if(!reset){ 
		 // start zoom
		var tl = new TimelineMax();
		tl.to('#'+slide_id+' .bg', 5, { height: '+=25%',width:'+=25%',left:'-15%',top:'-20%',  force3D:true,	ease: Linear.easeNone  });
	} else {
		// set inital 100%
		TweenMax.killTweensOf('#'+slide_id+' .bg');
		TweenLite.set('#'+slide_id+' .bg',{ height: '',width:'',left:'',top:''});
	}
 }
 function bg3Ani(slide_id,reset){
	 if(!reset){ 
		 // start zoom
		var tl = new TimelineMax();
		tl.to('#'+slide_id+' .bg', 5, { height: '+=25%',width:'+=25%',left:'-25%', force3D:true,	ease: Linear.easeNone  });
	} else {
		// set inital 100%
		TweenMax.killTweensOf('#'+slide_id+' .bg');
		TweenLite.set('#'+slide_id+' .bg',{ height: '',width:'',left:''});
	}
 }
 function bg4Ani(slide_id,reset){
	 if(!reset){ 
		 // start zoom
		var tl = new TimelineMax();
		tl.to('#'+slide_id+' .bg', 5, { height: '+=25%',width:'+=25%',top:'-50%', force3D:true,	ease: Linear.easeNone  });
	} else {
		// set inital 100%
		TweenMax.killTweensOf('#'+slide_id+' .bg');
		TweenLite.set('#'+slide_id+' .bg',{ height: '',width:'',top:''});
	}
 }