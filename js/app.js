function initMap(){
	var udacity={lat:41.8719,lng:12.5674}
	var map = new google.maps.Map(
		document.getElementById("map") , {zoom:8,center:udacity}
	)
	var marker=new google.maps.Marker({position:udacity,map:map,icon:'http://maps.google.com/mapfiles/ms/micons/restaurant.png'})
	var info=new google.maps.InfoWindow({content:'<h3>udacity restaurant</h3><a href="https://www.udacity.com">view website</a>'})
	marker.addListener('click',function(){
			info.open(map,marker)
	})
}