let michael = [
    {
        principal: 2500,
        time: 1.8
        },
        {
        principal: 1000, 
        time: 5
        },
        {
        principal: 3000, 
        time: 1
        },
        {
        principal: 2000, 
        time: 3
        }
    ];
    
    function interestCalculator(michael){
    let interestData=[];
    for (let i = 0; i < michael.length; i++) {
    let interest = '';
    let rate = 0;
    let myInterest = {};
    let principal = michael[i].principal;
    let time = michael[i].time;
    if(principal >= 2500 && time > 1 && time <= 3){
    rate = 3;
    interest = (principal * rate * time) / 100;
    myInterest = {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest
    };
    interestData.push(myInterest);
    }else if(principal >= 2500 && time >= 3){
    rate = 4
    interest = (principal * rate * time) / 100;
    myInterest = {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest
    };
    interestData.push(myInterest);
    }else if(principal < 2500 || time <= 1){
    rate = 2
    interest = (principal * rate * time) / 100;
    myInterest = {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest
    };
    interestData.push(myInterest);
    }else{
    rate = 1
    interest = (principal * rate * time) / 100;
    myInterest = {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest
    };
    interestData.push(myInterest);
    }
    }
    console.log(interestData);
    return interestData;
    }
    interestCalculator(michael);