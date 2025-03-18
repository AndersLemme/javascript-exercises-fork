const fibonacci = function(num) {
    num =Number(num);
    if (num < 0){
        return "OOPS";
    }
    let n=[0,1];
    
    let ans = 0;
    for(let i = 2; i<num+1; i++){
        n[i] = n[i-1] + n[i-2];
        //console.log(n);
    }
    return n[num];

};

// Do not edit below this line
module.exports = fibonacci;
