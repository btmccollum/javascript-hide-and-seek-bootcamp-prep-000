function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  var rankings = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rankings.length; i++) {
    rankings[i].innerHTML = parseInt(rankings[i].innerHTML) + n;
  }
}
function deepestChild() {
 var search = document.querySelectorAll('div#grand-node');
 return search[search.length-1];
}