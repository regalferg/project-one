var artist = '';
 
 $("#add-band").on("click", function(event) {
  artist = $("#band-input").val().trim();
  var queryURL = 
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Y68sacNOAQxxvGbr0Du9KNZNykWVrE3m&keyword=" + artist;
   
      $.ajax({
          url: queryURL,
          method: "GET"
        })
       
        .done(function(response) {
          console.log(response)
          document.preventDefault;
          
          });

          var results = response.events;
          for (var i = 0; i < results.length; i++) {
              var events = results[i].venue;
              console.log(events);
              $("#band-display").html("<tr><td>" + events + "</td></tr>");     
            }

    });