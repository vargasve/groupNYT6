$(document).ready(function () {

    $("#search").on("click", function (event) {   //click button 
        event.preventDefault();
        console.log("click");
      

        var searchTerm = $("#search-term").val().trim();
        var startYear = $("#start-year").val().trim();
        var endYear = $("#end-year").val().trim();


        var limit = $("#article-count").val().trim();



        console.log("searchTerm: " + searchTerm);
        console.log("startYear: " + startYear);
        console.log("endYear: " + endYear);
        console.log("limit: " + limit);


        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "da7be3a4e5494580bc887c4a0b3c13de",
            'q': searchTerm,
            'begin_date': startYear,
            'end_date': endYear
        });


        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
            console.log(result.response.docs);
            //var resultSearch = result.response.docs[i].byline;
   


            for (i = 0; i <= limit; i++) {

               

                var newsDiv = $("<div>");
                var button = $("<button>").text(i+1);
                console.log(result.response.docs[i].headline.main);
                var title = $("<h3>").text(result.response.docs[i].headline.main);
                var author = $("<p>").text("author : " + result.response.docs[i].byline.original);


                newsDiv.append(button);
                newsDiv.append(title);
                newsDiv.append(author);


                $("#show-result").append(newsDiv);
            }
        }).catch(function (err) {
            throw err;
        });
    });
});