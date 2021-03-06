/**
 * @fileoverview This demo is used for MarkerClusterer. It will show 100 markers
 * using MarkerClusterer and count the time to show the difference between using
 * MarkerClusterer and without MarkerClusterer.
 * @author Luke Mahe (v2 author: Xiaoxi Wu)
 */

 var clusterdata;
 var clusterdatacount;
 
function mapdata_js(params3, params4) {
  
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
  debugger
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
      speedTest.pics[i].latitude,
      speedTest.pics[i].longitude
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
    var fn1 = speedTest.markerClickFunction_mouseout(speedTest.pics[i], latLng);
    google.maps.event.addListener(marker,'mouseover', fn);
    google.maps.event.addListener(marker, "mouseout", fn1);
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


    var title = pic.cases;
    var address = pic.user_zipcode;
    
    var infoHtml = '<div class="info"><table style="text-align:justify;"><tr><td  style="padding: 5px;font-weight:bold;">ZipCode </td><td  style="padding: 5px;font-weight:bold;background: #677B8C 0% 0% no-repeat padding-box;border-radius: 8px;color:#fff;">' + pic.user_zipcode + '</td></tr><tr><td  style="padding: 5px;font-weight:500;">Have COVID-19 </td><td  style="padding: 5px;font-weight:500;">&#160;&#160; ' + pic.have_covid + '</td></tr><tr><tr><td  style="padding: 5px;">Fever </td><td  style="padding: 5px;">&#160;&#160; ' + pic.fever + '</td></tr><tr><td  style="padding: 5px;"> Cough </td><td  style="padding: 5px;">&#160;&#160; ' + pic.cough + '</td></tr><tr><td  style="padding: 5px;">  Sore Throat</td><td  style="padding: 5px;"> &#160;&#160;&#160;' + pic.sore_throat + '</td></tr><tr><td  style="padding: 5px;">  Chills </td><td  style="padding: 5px;">&#160;&#160; ' + pic.chills + '</td></tr><tr><td  style="padding: 5px;">   Muscle Pain </td><td  style="padding: 5px;">&#160;&#160; ' + pic.muscle_pain + '</td></tr><tr><td  style="padding: 5px;"> New Loss of taste or Smell&#160;&#160;</td><td  style="padding: 5px;">&#160;&#160; ' + pic.loss_of_taste_and_smell + '</td></tr><tr><td  style="padding: 5px;">  Shortness of breath or Difficulty Breathing &#160;&#160;</td><td  style="padding: 5px;"> &#160;&#160;&#160;' + pic.shortness_of_breath + '</td></tr><tr><td  style="padding: 5px;">  Total people reporting with symptoms&#160;&#160; </td><td  style="padding: 5px;">&#160;&#160; ' + pic.users + '</td></tr></table></div>';     

    speedTest.infoWindow.setContent(infoHtml);
    speedTest.infoWindow.setPosition(latlng);
    speedTest.infoWindow.open(speedTest.map);

  };
};

speedTest.markerClickFunction_mouseout = function(pic, latlng) {
  return function(e) {
    setTimeout(function(){
      speedTest.infoWindow.close(speedTest.map);
    }, 500);
  }
}


// speedTest.clear = function() {
//   $("timetaken").innerHTML = "cleaning...";
//   for (var i = 0, marker; (marker = speedTest.markers[i]); i++) {
//     marker.setMap(null);
//   }
// };

// speedTest.change = function() {
//   speedTest.clear();
//   speedTest.showMarkers();
// };

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
