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
 var search = document.querySelector('#grand-node').querySelectorAll('div');
 while (search) {
   if (criteriaFn(current)) {
     return current;
   }
   if (Array.isArray(current)){
     for (var i = 0; i < current.length; i++) {
       next.push(current[i]);
     }
   }current = next.shift();
   
 }
 return null;
 
}