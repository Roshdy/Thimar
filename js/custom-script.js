/**
 * @author IT
 */
// Custom configuration
$(document).on('mobileinit', function(){
	// jQuery Configuration
	$.mobile.allowCrossDomainPages = true;
	$.mobile.defaultPageTransition = "flip";
	$.mobile.pageLoadErrorMessage = "عذراً، يوجد خطأ في تحميل الصفحة";
	$.mobile.pushStateEnabled = false;
	$.mobile.listview.prototype.options.filterPlaceholder = "ابحث";
	/*$.mobile.listview.prototype.options.filterCallback = function(text, searchText, item)
	{
		
	};*/
});

// Custom script
$(document).on('pageinit', function(){
	// NOTE: Before on(page-event), off(page-event) must be called to eliminate multiple calls
	
	// Home-page Operatations
	$('#home-page').off('pageshow').on('pageshow', function(){
		//alert('Home page shown');
	});
	
	// Details-page Operatations
	$('#details-page').off('pageshow').on('pageshow', function(){
		//alert('Details page shown');
	});
	
	// Account-page Operations
	$('#account-page').off('pageshow').on('pageshow', function(){
		//alert('Account page shown');
	});
	
	// Info-page Operations
	$('#info-page').off('pageshow').on('pageshow', function(){
		//alert('Info page shown');
	});
	
	// Sub-Info-page Operations
	$('#sub-info-page').off('pageshow').on('pageshow', function(){
		//alert('Sub-Info page shown');
	});
});