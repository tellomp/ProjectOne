function searchZipCode(zipCode) {

  //API key
  var APIKey = "959307fb0f3e089c6b571646c688dd9f";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&appid=" + APIKey
  // AJAX Call
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // stores all retrieved data
    .then(function (response) {
      var weatherDiv = $("#weather-display");
      //console.log(queryURL);
      //onsole.log(response);

      
      var city = $('<div>id= city</div>').html("<h2>" + response.name + " Weather Details</h2>");
      var temp = $('<div>id= temp</div>').html("Temperature (F) :" + " " + response.main.temp);
      //console.log("Temperature (F): " + response.main.temp);
      var weatherDescription = $('<div>id= weatherDescription</div>').html(response.weather[0].description);
      var imageURL = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";

      //console.log(imageURL);

      var weatherImage = $("<img>");
      $(weatherImage).attr('src', imageURL);

      $("#weather-display").empty();
      weatherDiv.append(city,weatherDescription, temp, weatherImage);
    });
};

























