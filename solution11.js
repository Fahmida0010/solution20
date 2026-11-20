// Problem 11: Richest Customer Wealth

// accounts = [
//     [1,2,3],
//     [3,2,1]
// ];

var maximumWealth = function(accounts){
    let maxWealth =0;
    for (let i = 0; i< accounts.length; i++){
     let currentwealth = 0;
    for (let j =0; j <accounts[i].length; j++){
        currentwealth += accounts[i][j];
    }    
    maxWealth =Math.max(maxWealth, currentWealth);
    }
    return maxWealth;
}
