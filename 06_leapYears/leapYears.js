const leapYears = function(year) {

    if(year%4 == 0){
        if(year%400 == 0){
            return true;
        }else if(year%100 ==0){
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;


//=IF(OR(MOD(A1,400)=0,AND(MOD(A1,4)=0,MOD(A1,100)<>0)),"Leap Year", "NOT a Leap Year")  