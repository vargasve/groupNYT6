$(document).ready(function () {

    $("#search").on("click", function (event) {   //click button 
        event.preventDefault();
        var searchTerm = $("#search-term").val().trim();
        var startYear;
        var endYear;


        var limit = $("#article-count").val().trim();
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        

        
        if (  startYear.lenth==8 && endYear.length==8){

            url += '?' + $.param({
                'api-key': "da7be3a4e5494580bc887c4a0b3c13de",
                'q': searchTerm,
                'begin_date': startYear,
                'end_date': endYear
            });
        }
        else if (startYear.lenth!=8 && endYear.length!=8){
            url += '?' + $.param({
                'api-key': "da7be3a4e5494580bc887c4a0b3c13de",
                'q': searchTerm,
            });
        }
       
        console.log( url)

        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            //var resultSearch = result.response.docs[i].byline;
            for (i = 0; i < limit; i++) {
                console.log(result.response.docs)
                var newsDiv = $("<div>");
                var button = $("<button>").text(i+1);
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