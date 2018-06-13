function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  var ranks = document.querySelector('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}
function deepestChild() {
 var search = document.getElementById('#grand-node')
 return search.querySelectorAll('div')[search.length-1];
}