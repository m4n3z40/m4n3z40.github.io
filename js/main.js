(function(root, doc, undefined) {
    'use strict';

    var position = {
        latitude: -23.5980161,
        longitude: -46.6413542
    };

    function initializeLocationMap(gMaps) {
    	var mapOptions = {
	    		center: new gMaps.LatLng(position.latitude, position.longitude),
		        zoom: 16,
		        mapTypeId: gMaps.MapTypeId.ROADMAP,
		        disableDefaultUI: true,
                scrollwheel: false
	    	};

    	return new gMaps.Map(doc.getElementById('location-map'), mapOptions);
    }

    function addPlaceMarker(gMaps, map) {
        return new gMaps.Marker({
            position: new gMaps.LatLng(position.latitude, position.longitude),
            map: map,
            title: 'Nosso endereço'
        });
    }

    function addAddresInfoWindow(gMaps, map, marker) {
        var infoWindow = new gMaps.InfoWindow({
            content: ['<h4>Nosso Endereço</h4>',
                      '<address>R. Marselhesa, 658 - ',
                      'Vila Mariana, SP, 04020-060</address>'].join('')
        });

        gMaps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });

        return infoWindow;
    }

    $(doc).ready(function() {
    	var gMaps = root.google.maps,
            locationMap = initializeLocationMap(gMaps),
            placeMarker = addPlaceMarker(gMaps, locationMap);

        addAddresInfoWindow(gMaps, locationMap, placeMarker);
    });

})(window, document);
