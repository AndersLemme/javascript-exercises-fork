const fibonacci = function(num) {
    
    let n=[1,1];
    
    let ans = 0;
    for(let i = 2; i<num; i++){
        n[i] = n[i-1] + n[i-2];
        //console.log(n);
    }
    return n[n.length-1];

};

// Do not edit below this line
module.exports = fibonacci;
