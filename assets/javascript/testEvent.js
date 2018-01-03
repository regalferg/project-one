var eventName = '';
var eventCity = '';

$("#add-band").on("click", function(event) {
    event.preventDefault();
    eventName = $("#band-input").val().trim();
    eventCity = $("#venue-input").val().trim();
    console.log(eventName);
    console.log(eventCity);
    if (eventName === "") {
        $("#band-display").html("<tr><td><strong>Please Input an Artist</strong><br></td></tr>");
        return
    }

    if (eventCity === "") {
        
        $("#band-display").html("<tr><td><strong>Plase Input a City</strong><br></td></tr>");
        return 
    }
    
    var queryURL =
        "https://app.ticketmaster.com/discovery/v2/events?apikey=Y68sacNOAQxxvGbr0Du9KNZNykWVrE3m&keyword=" + eventName + "&city=" + eventCity;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response._embedded);
        document.preventDefault;


        if (response._embedded === undefined) {
            $("#band-display").html("<tr><td><strong>No Event Available</strong><br></td></tr>");
        }




        var results = response._embedded.events[0]._embedded.venues;
        for (var i = 0; i < results.length; i++) {
            var eventsObj = results[i];
            console.log(eventsObj);
            $("#band-display").html("<tr><td><strong> Venue Name:</strong><br> " + eventsObj.name + "</td></tr>");
            $("#band-display").append("<tr><td><strong> Address: </strong><br>" + eventsObj.address.line1 + "</td></tr>");
            $("#band-display").append("<tr><td><strong> city: </strong><br>" + eventsObj.city.name + "</td></tr>");
            $("#band-display").append("<tr><td><strong> General Rules:</strong><br> " + eventsObj.generalInfo.generalRule + "</td></tr>");
            $("#band-display").append("<tr><td><strong> Parking:</strong><br> " + eventsObj.parkingDetail + "</td></tr>");
            $("#band-display").append("<tr><td><strong> Social: </strong><br>" + eventsObj.social.twitter.handle + "</td></tr>");
            var posterImage = eventsObj.images[0].url;
            console.log(posterImage);
            var img = $('<img>').attr('src', posterImage)
            $("#band-display").append(img);
        }


    });
});