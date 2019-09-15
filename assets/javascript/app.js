$(document).ready(function(){

function getStats(){
    $('.stats-container').empty();
    var userInput = $('#user-input').val().trim();
    userInput = userInput.split(" ").join("-").toLowerCase();
    console.log(userInput);
    var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2019-regular/cumulative_player_stats.json?&player=" + userInput;
    $.ajax({
      url: queryURL,
      type: "GET",
      dataType: "json",
      headers: { 
        "Authorization": "Basic " + btoa("a437f7dc-b82f-4f70-8989-798c15" + ":" + "Classwork12")
     }
    }).then(function(response){
      console.log(response);
      var table = $('<table>');
      var thead = $('<thead>');
      var tbody = $('<tbody>');
      var tableDiv = $('<div>');
      tableDiv.addClass('table-container');
      table.addClass('table');
      thead.addClass('thead');
      tbody.addClass('tbody');
      var name = response.cumulativeplayerstats.playerstatsentry[0].player.FirstName + " " + response.cumulativeplayerstats.playerstatsentry[0].player.LastName;
      var position = response.cumulativeplayerstats.playerstatsentry[0].player.Position;
      var team = response.cumulativeplayerstats.playerstatsentry[0].team.City + " " + response.cumulativeplayerstats.playerstatsentry[0].team.Name;
      var h1Name = $('<h1>');
      h1Name.addClass('is-size-3');
      h1Name.text(name);
      var pPosition = $('<p>');
      pPosition.text(position);
      var pTeam = $('<p>');
      pTeam.addClass('is-italic');
      pTeam.text(team);
      $('.stats-container').append(h1Name, pTeam, pPosition);
      var h2Passing = $('<h2>');
      h2Passing.addClass('is-size-4');
      h2Passing.text('Passing');
      $('.stats-container').append(h2Passing);
      $('.stats-container').append(table);
      $('.table').append(thead);
      $('.table').append(tbody);
      var header = $('<tr>').append(
        $('<th>').text('ATT'),
        $('<th>').text('CMP'),
        $('<th>').text('CMP%'),
        $('<th>').text('YARDS'),
        $('<th>').text('AVG'),
        $('<th>').text('INT'),
        $('<th>').text('TD'),
        $('<th>').text('FUM'),
        $('<th>').text('SACK'),
        );
        $('.thead').append(header);
      var newRow = $('<tr>').append(
        $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].player.stats.PassAttempts.text),
        $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].player.stats.PassCompletions.text),
        $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].player.stats.PassPct.text),
        $('<td>').text('YARDS'),
        $('<td>').text('AVG'),
        $('<td>').text('INT'),
        $('<td>').text('TD'),
        $('<td>').text('FUM'),
        $('<td>').text('SACK'),
        );
      $('.tbody').append(newRow);




    });
  };

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
            imgFigure.addClass('image is-3by2');
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
$(document).on('click', '#submit', getStats);























});