 
	var artist = "";
  var title = "";

  function searchLyrics(){


		var queryURL = "https://api.lyrics.ovh/v1/"+ artist + "/" + title ;
      $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
    	 console.log(response);
        document.preventDefault;
    	

});
  }
      $("#add-lyrics").on("click", function(event) {
 
        event.preventDefault();
         artist = $("#name-input").val().trim();
        console.log(artist);
        });

		$("#add-lyrics").on("click", function(event) {
        event.preventDefault();
        
        title = $("#lyrics-input").val().trim();

    
       	console.log(title);        
      });

        


//    $(document).on("click", searchLyrics);




