/**
 * @fileoverview This demo is used for MarkerClusterer. It will show 100 markers
 * using MarkerClusterer and count the time to show the difference between using
 * MarkerClusterer and without MarkerClusterer.
 * @author Luke Mahe (v2 author: Xiaoxi Wu)
 */

 var clusterdata;
 var clusterdatacount;
//  var testclusterdata;
//  var testclusterdatacount;

 
// function myfunction(params1, params2) {
  
//   clusterdata = params1;
//   clusterdatacount = params2;
//   console.log('clusterdata', clusterdata);
//   console.log('clusterdatacount', clusterdatacount);
// }

 
function mapdata(params3, params4) {
  
  clusterdata = params3;
  clusterdatacount = params4;

}


function $(element) {
  return document.getElementById(element);
}

var speedTest = {};

speedTest.pics = null;
speedTest.map = null;
speedTest.markerClusterer = null;
speedTest.markers = [];
speedTest.infoWindow = null;

speedTestinit = function() {
  var latlng = new google.maps.LatLng(39.096975, -77.199597);
  var options = {
    zoom: 4,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  speedTest.map = new google.maps.Map($("map"), options);
  speedTest.pics = clusterdata;
  //console.log('...................js file .......', speedTest.pics);

  var useGmm = document.getElementById("usegmm");
  google.maps.event.addDomListener(useGmm, "click", speedTest.change);

  var numMarkers = document.getElementById("nummarkers");
  google.maps.event.addDomListener(numMarkers, "change", speedTest.change);

  speedTest.infoWindow = new google.maps.InfoWindow();

  speedTest.showMarkers();
};

speedTest.showMarkers = function() {
  speedTest.markers = [];

  var type = 1;
  if ($("usegmm").checked) {
    type = 0;
  }

  if (speedTest.markerClusterer) {
    speedTest.markerClusterer.clearMarkers();
  }

  var panel = $("markerlist");
  panel.innerHTML = "";
  var numMarkers = clusterdatacount;
  //console.log("..............js file.........", numMarkers);

  for (var i = 0; i < numMarkers; i++) {
   var titleText = speedTest.pics[i].Name_of_center;
    if (titleText == "") {
      titleText = "No title";
    }

    var item = document.createElement("DIV");
    var title = document.createElement("A");
    title.href = "#";
    title.className = "title";
    title.innerHTML = titleText;

    item.appendChild(title);
    panel.appendChild(item);

    var latLng = new google.maps.LatLng(
      speedTest.pics[i].Latitute,
      speedTest.pics[i].Longitude
    );

    var imageUrl =
      "http://chart.apis.google.com/chart?cht=mm&chs=24x32&chco=" +
      "FFFFFF,008CFF,000000&ext=.png";
    var markerImage = new google.maps.MarkerImage(
      imageUrl,
      new google.maps.Size(24, 32)
    );

    var marker = new google.maps.Marker({
      position: latLng,
      icon: markerImage
    });

    var fn = speedTest.markerClickFunction(speedTest.pics[i], latLng);
    google.maps.event.addListener(marker, "click", fn);
    google.maps.event.addDomListener(title, "click", fn);
    speedTest.markers.push(marker);
  }

  window.setTimeout(speedTest.time, 0);
};

speedTest.markerClickFunction = function(pic, latlng) {
  return function(e) {
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }
    var title = pic.Name_of_center;
    var address = pic.Address;
    var city = pic.City;
    var date = pic.Date;
    

    var infoHtml ='<div class="info"><h6>' + title + '</h6><div class="info-body"><strong> Address: </strong>' + address + '</div><div class="info-body"><strong> City:</strong>' + city + '<div class="info-body"><strong> State:</strong>' + pic.State + '</div><div><a href="'+  pic.URL + '" target="_blank"></a></div><div><strong> Date:</strong> '+ date + '</div>';
   // console.log(".......html........", infoHtml);

    speedTest.infoWindow.setContent(infoHtml);
    speedTest.infoWindow.setPosition(latlng);
    speedTest.infoWindow.open(speedTest.map);
  };
};

speedTest.clear = function() {
  $("timetaken").innerHTML = "cleaning...";
  for (var i = 0, marker; (marker = speedTest.markers[i]); i++) {
    marker.setMap(null);
  }
};

speedTest.change = function() {
  speedTest.clear();
  speedTest.showMarkers();
};

speedTest.time = function() {
  $("timetaken").innerHTML = "timing...";
  var start = new Date();
  if ($("usegmm").checked) {
    speedTest.markerClusterer = new MarkerClusterer(
      speedTest.map,
      speedTest.markers
    );
  } else {
    for (var i = 0, marker; (marker = speedTest.markers[i]); i++) {
      marker.setMap(speedTest.map);
    }
  }

  var end = new Date();
  $("timetaken").innerHTML = end - start;
};
