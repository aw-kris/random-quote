//function to get quote from API
var getQuote = function() {
  $.ajaxSetup({cache:false});
  $.getJSON('https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(json) {
    $('#qText').html(json.quoteText);
    if(json.quoteAuthor==='') {
      $('#qAuthor').html('&mdash; Anonymous');
    }
    else {
      $('#qAuthor').html('&mdash; ' + json.quoteAuthor);
    }
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text='+json.quoteText+' - '+json.quoteAuthor);
  });
};

$(document).ready(function() {
  getQuote();
  $('#new').on('click', getQuote);
});