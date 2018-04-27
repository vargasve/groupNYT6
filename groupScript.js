$(document).ready(function () {

    $("#search").on("click", function (event) {   //click button 
        event.preventDefault();
        console.log("click");


        var searchTerm = $("#search-term").val().trim();
        var startYear;
        var endYear;







       





        var limit = $("#article-count").val().trim();

        console.log("searchTerm: " + searchTerm);
        console.log("startYear: " + startYear);
        console.log("endYear: " + endYear);
        console.log("limit: " + limit);


        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "da7be3a4e5494580bc887c4a0b3c13de",
            'q': searchTerm
        });

        if ($("#end-year").val().trim()) {
            url += "&end_date="+$("#end-year").val().trim();
        }

        if ($("#start-year").val().trim()) {
            url += "&begin_date="+$("#start-year").val().trim();
        }


        console.log(url);


        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
            console.log(result.response.docs);
            //var resultSearch = result.response.docs[i].byline;



            for (i = 0; i <= limit - 1; i++) {



                var newsDiv = $("<div>");
                var button = $("<button>").text(i + 1);
               
                if (result.response.docs[i].headline){
                    var title = $("<h3>").text(result.response.docs[i].headline.main);
                } else {
                    var title = $("<h3>").text("No title");
                }

                
                if (result.response.docs[i].byline){
                    var author = $("<p>").text("Author : " + result.response.docs[i].byline.original);
                } else {
                    var author = $("<p>").text("Author : no author");
                }


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