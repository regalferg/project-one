var event = '';
 
 $("#add-band").on("click", function(event) {
  event = $("#band-input").val().trim();
  var queryURL = 
  "https://app.ticketmaster.com/discovery/v2/events?apikey=Y68sacNOAQxxvGbr0Du9KNZNykWVrE3m&keyword=" + event;
   
      $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response._embedded);
          document.preventDefault;


          var results = response._embedded.events[0]._embedded.venues;
          for (var i = 0; i < results.length; i++) {
              var events = results[i];
              console.log(events);
              $("#band-display").html("<tr><td>" + events.name + "</td></tr>"); 
              $("#band-display").append("<tr><td>" + events.address.line1 + "</td></tr>");    
            }

          
          });

          

    });