const removeFromArray = function(arr, ...values) {
    //using filter instead of splice to remove multiple of the same number
    arr = arr.filter(item => !values.includes(item)); 
    

    /*
    for (let each of values) {
        arr.splice(arr.indexOf(each), 1);
        console.log(each)
    }*/

    return arr
};
    
module.exports = removeFromArray;
