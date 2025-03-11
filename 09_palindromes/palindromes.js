const palindromes = function (s) {
    s = s.replace(/[!,. ]/g,'');
    let r = s.split('').reverse().join('');

    if(r.toLowerCase() == s.toLowerCase()){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
