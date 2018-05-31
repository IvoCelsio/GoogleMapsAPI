function initMap(){
    var options = {
        zoom: 8,
        center: {lat:48.137154, lng:11.576124}
    }

    //New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // // Listen for click on map
    // google.maps.event.addListener(map, 'click', function(event){
    //     //Add new marker
    //     addMarker({coords: event.latLng});
    // });

    /*
    //Add marker
    var marker = new google.maps.Marker({
        position : {lat:48.138224, lng:11.463547},
        map : map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Pasing, München</h1>'
    })

marker.addListener('click', function(){
        infoWindow.open(map, marker);
    })
*/

    // Array of markers
    var markers = [
        {
        coords:{lat:47.9999615, lng:11.3390089},iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Starnberg bei München</h1>'
        },
        {
            coords:{lat:48.137079, lng:11.576006},
            content: '<h1>Marienplatz, München</h1>'
        },
        {
            coords:{lat:48.1075, lng:11.7575}
        }
    ];

    //Loop through markers
    for(var i = 0; i < markers.length; i++){
        // Add marker
        addMarker(markers[i]);
    }
    
    // Add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position : props.coords,
            map : map,
            // icon: props.iconImage
        });
        
        // Check for custom icon
        if(props.iconImage){
            // Set icon image
            marker.setIcon(props.iconImage);
        }
        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
               content: props.content
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}

