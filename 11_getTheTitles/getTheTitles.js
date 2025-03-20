const getTheTitles1 = function(obj) {
let ans = [];
    for(let i = 0; i< obj.length; i++){
        ans.push(obj[i].title);
    }
    return ans;
};
const getTheTitles = function(obj) {
    return obj.map(book=>book.title)
}
// Do not edit below this line
module.exports = getTheTitles;
