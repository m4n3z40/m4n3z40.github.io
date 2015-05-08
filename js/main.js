(function(root, doc, undefined) {
    'use strict';

    function initializeLocationMap() {
    	var gMaps = root.google.maps,
	    	mapOptions = {
	    		center: new gMaps.LatLng(-34.397, 150.644),
		        zoom: 8,
		        mapTypeId: gMaps.MapTypeId.ROADMAP,
		        disableDefaultUI: true,
                scrollwheel: false
	    	};

    	return new gMaps.Map(doc.getElementById('location-map'), mapOptions);
    }

    $(doc).ready(function() {
    	var locationMap = initializeLocationMap();
    });

})(window, document);