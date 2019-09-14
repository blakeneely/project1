$(document).ready(function(){

function getNews(){
    var queryURL = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news"
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        console.log(response);
        for(var i = 0; i < response.articles.length; i++){
            var cardDiv = $('<div>');
            cardDiv.addClass('card');
            var cardImage = $('<div>');
            cardImage.addClass('card-image');
            var imgFigure = $('<figure>');
            imgFigure.addClass('image is-2by1');
            var image = $('<img>');
            var imgURL = response.articles[i].images[0].url;
            image.attr('src', imgURL);
            imgFigure.append(image);
            cardImage.append(imgFigure);
            cardDiv.append(cardImage);
            var cardContent = $('<div>');
            cardContent.addClass('card-content');
            var content = $('<div>');
            content.addClass('content');
            var headline = response.articles[i].headline;
            content.text(headline);
            var br = $('<br>');
            content.append(br);
            var aElement = $('<a>');
            var link = response.articles[i].links.web.href;
            console.log(link);
            aElement.attr('href', link);
            aElement.attr('target', '_blank');
            aElement.text(' read more');
            content.append(aElement);
            cardContent.append(content);
            cardDiv.append(cardContent);
            $('.news-container').append(cardDiv);

        }
    });
};
getNews();























});