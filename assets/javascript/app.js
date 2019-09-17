$(document).ready(function(){

function getStats(){
    $('.stats-container').empty();
    var userInput = $('#user-input').val().trim();
    userInput = userInput.split(" ").join("-").toLowerCase();
    $('#user-input').val("");
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
      var position = response.cumulativeplayerstats.playerstatsentry[0].player.Position;
      var table = $('<table>');
      var thead = $('<thead>');
      var tbody = $('<tbody>');
      var tableDiv = $('<div>');
      tableDiv.addClass('table-container');
      table.addClass('table');
      thead.addClass('thead');
      tbody.addClass('tbody');
      var name = response.cumulativeplayerstats.playerstatsentry[0].player.FirstName + " " + response.cumulativeplayerstats.playerstatsentry[0].player.LastName;
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
      if (position === 'QB'){
        var h2Passing = $('<h2>');
        h2Passing.addClass('is-size-4');
        h2Passing.text('Passing');
        $('.stats-container').append(h2Passing);
        $('.stats-container').append(tableDiv);
        $('.table-container').append(table);
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
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassAttempts['#text']),
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassCompletions['#text']),
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassPct['#text']),
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassYards['#text']),
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassAvg['#text']),
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassInt['#text']),
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassTD['#text']),
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.Fumbles['#text']),
          $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassSacks['#text']),
          );
          $('.tbody').append(newRow);
        }
        else if (position === 'WR' || position === 'RB' || position === 'TE') {
          var table = $('<table>');
          var thead = $('<thead>');
          var tbody  = $('<tbody>');
          var tableDiv = $('<div>');
          tableDiv.addClass('table-container');    
          table.addClass('table');
          thead.addClass('thead');
          tbody.addClass('tbody');
          var h2Receiving = $('<h2>');
          h2Receiving.addClass('is-size-4');
          h2Receiving.text('Receiving and Rushing');
          $('.stats-container').append(h2Receiving);
          $('.stats-container').append(tableDiv);
          $('.table-container').append(table);
          $('.table').append(thead);
          $('.table').append(tbody);
          var header = $('<tr>').append(
            $('<th>').text('REC'),
            $('<th>').text('REC YRDS'),
            $('<th>').text('REC AVG'),
            $('<th>').text('REC TD'),
            $('<th>').text('RSH'),
            $('<th>').text('RSH YRDS'),
            $('<th>').text('RSH AVG'),
            $('<th>').text('RSH TD'),
            $('<th>').text('FUM'),
            );
          $('.thead').append(header);
          var newRow = $('<tr>').append(
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.Receptions['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.RecYards['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.RecAverage['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.RecTD['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.RushAttempts['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.RushYards['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.RushAverage['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.RushTD['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.Fumbles['#text']),
            );
          $('.tbody').append(newRow);
        }
        else if (position === 'LB' || position === 'DT' || position === 'DE' || position === 'CB' || position === 'FS' || position === 'SS') {
          var table = $('<table>');
          var thead = $('<thead>');
          var tbody  = $('<tbody>');
          var tableDiv = $('<div>');
          tableDiv.addClass('table-container');    
          table.addClass('table');
          thead.addClass('thead');
          tbody.addClass('tbody');
          var h2Defense = $('<h2>');
          h2Defense.addClass('is-size-4');
          h2Defense.text('Defense');
          $('.stats-container').append(h2Defense);
          $('.stats-container').append(tableDiv);
          $('.table-container').append(table);
          $('.table').append(thead);
          $('.table').append(tbody);
          var header = $('<tr>').append(
            $('<th>').text('TKL'),
            $('<th>').text('TKL 4 LS'),
            $('<th>').text('SAFE'),
            $('<th>').text('FUM'),
            $('<th>').text('FUM REC'),
            $('<th>').text('FUM TD'),
            $('<th>').text('PS DEF'),
            $('<th>').text('INT'),
            $('<th>').text('INT TD'),
            );
          $('.thead').append(header);
          var newRow = $('<tr>').append(
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.TackleTotal['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.TacklesForLoss['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.Safeties['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.FumForced['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.FumTotalRec['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.FumTD['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.PassesDefended['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.Interceptions['#text']),
            $('<td>').text(response.cumulativeplayerstats.playerstatsentry[0].stats.IntTD['#text']),
            );
          $('.tbody').append(newRow);
        }
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