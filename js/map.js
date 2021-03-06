var map;

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(21.748551, 96.162655),
    zoom: 5,
    disableDefaultUI: true,
    styles: [
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }, {
            "color": "#f49f53"
          }
        ]
      }, {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      }, {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          }, {
            "color": "#ffffff"
          }
        ]
      }, {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "weight": "2.00"
          }
        ]
      }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f9ddc5"
          }, {
            "lightness": -7
          }
        ]
      }, {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }, {
            "color": "#ede1e1"
          }
        ]
      }, {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          }, {
            "color": "#f2f2f2"
          }
        ]
      }, {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f1f1f1"
          }, {
            "visibility": "simplified"
          }
        ]
      }, {
        "featureType": "landscape",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          }, {
            "color": "#ffffff"
          }
        ]
      }, {
        "featureType": "landscape.natural",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          }, {
            "color": "#fbf2f2"
          }
        ]
      }, {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }, {
            "color": "#f6b544"
          }
        ]
      }, {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }, {
            "color": "#dcdcdc"
          }
        ]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f3f3f3"
          }
        ]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
          {
            "color": "#645c20"
          }, {
            "lightness": 38
          }
        ]
      }, {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
          {
            "color": "#9e5916"
          }, {
            "lightness": 46
          }
        ]
      }, {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#813033"
          }, {
            "lightness": 38
          }, {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
          {
            "color": "#645c20"
          }, {
            "lightness": 39
          }
        ]
      }, {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
          {
            "color": "#a95521"
          }, {
            "lightness": 35
          }
        ]
      }, {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
          {
            "color": "#9e5916"
          }, {
            "lightness": 32
          }
        ]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "color": "#813033"
          }, {
            "lightness": 43
          }
        ]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          }, {
            "color": "#eadede"
          }
        ]
      }, {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f19f53"
          }, {
            "weight": 1.3
          }, {
            "visibility": "on"
          }, {
            "lightness": 16
          }
        ]
      }, {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#f19f53"
          }, {
            "lightness": -10
          }
        ]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          }, {
            "visibility": "on"
          }
        ]
      }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "lightness": 38
          }
        ]
      }, {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
          {
            "color": "#813033"
          }, {
            "lightness": 22
          }
        ]
      }, {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#1994bf"
          }, {
            "saturation": -69
          }, {
            "gamma": 0.99
          }, {
            "lightness": 43
          }
        ]
      }
    ]
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
