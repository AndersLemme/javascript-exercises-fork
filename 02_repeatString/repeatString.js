const repeatString = function(x, num) {
    if (num < 0){
        return "ERROR"
    }
    let i = 0;
    let hey = "";
    while( i < num){
        hey += x;
        i++;
    }
    return hey
};

// Do not edit below this line
module.exports = repeatString;
