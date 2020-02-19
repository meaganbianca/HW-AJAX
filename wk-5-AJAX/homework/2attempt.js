function getData () {

    var input = $("#searchText").val();

    // my api key for Gighy Developers
    var apiKey = "WAUhQyoIckmLYIQnFQtLRy8p2Nkf1MKW";
    var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey  + "&limit=10");

    xhr.done(function(response) {

        console.log("sucess got data", response);
        var jiffs = response.data;
        
        for (i in jiffs) {
            $(".inner").append("img scr=" + jiffs[i].images.original.url + "/>");
        };

    });

}