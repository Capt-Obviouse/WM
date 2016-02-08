console.log("Pre-Owl function");
$(document).ready(function() 
{
	console.log("Document is ready");
	$("#owl-example").owlCarousel({
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		singleItem : true,
		itemsScaleUp : true,
	 
		//Basic Speeds
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
	 
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
	 
		// Navigation
		navigation : false,
		navigationText : ["prev","next"],
		rewindNav : false,
		scrollPerPage : false,
	 
		//Pagination
		pagination : false,
		paginationNumbers: false,
	 
		// Responsive 
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window,
	 
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
	 
		//Lazy load
		lazyLoad : false,
		lazyFollow : true,
		lazyEffect : "fade",
	 
		//Auto height
		autoHeight : true,
	 
		//JSON 
		jsonPath : false, 
		jsonSuccess : false,
	 
		//Mouse Events
		dragBeforeAnimFinish : true,
		mouseDrag : true,
		touchDrag : true,
	 
		//Transitions
		transitionStyle : false,
	 
		// Other
		addClassActive : false,
	 
		//Callbacks
		beforeUpdate : false,
		afterUpdate : false,
		beforeInit: false, 
		afterInit: false, 
		beforeMove: false, 
		afterMove: false,
		afterAction: false,
		startDragging : false,
		afterLazyLoad : false
	});
});