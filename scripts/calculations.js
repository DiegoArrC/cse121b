function convertList(inputText) {
    let splitText = inputText.split(",");
    let numberList = [];
    console.log(splitText);
    splitText.forEach(numberText => {
        let number = parseInt(numberText);
        numberList.push(number);
    });
    console.log(numberList);
    numberList.sort(function(leftNum,rightNum){return leftNum-rightNum});
    console.log(numberList)
    document.querySelector('#sortedList').value = numberList;
    return numberList;
    
}
function doListCalculations(){
    let entry = document.querySelector("#listInput").value;
    let convertedList = convertList(entry);
    mean(convertedList);
    median(convertedList);
    mode(convertedList);
}

document.querySelector('#calculateValues').addEventListener('click', doListCalculations);

const mean = function (numberList) { 
    let sum = numberList.reduce((sum,number) => sum + number,0);
    let mean = sum / numberList.length;
    document.querySelector('#mean').value = mean;
}

const median = function(numberList) {
    // gets the index of the middle value of the list
    let middle = Math.floor(numberList.length/2);
    console.log(middle);

    // switch case statement to handle whether there is an odd or even amount of values entered
    // switch(numberList){
    //     case numberList.length % 2:
    //         document.querySelector('#median').value = numberList[middle];
    //         break;
    //     case numberList.length % 2 === 0:
    //         document.querySelector('#median').value = (numberList[middle - 1] + numberList[middle]) / 2;
    //         break;
    // }
    if (numberList.length % 2) {
        document.querySelector("#median").value = numberList[middle];
    }
    else {
        document.querySelector("#median").value = (numberList[middle -1] + numberList[middle]) / 2; 
    }
}

const mode = function(numberList) {
    let countList = {};
    let modeValueAmount;
    let modeValueKey;
    let listModesAmount;
    numberList.forEach(function(number) {
        if (countList[number] === undefined) {
            countList[number] = 0;
        }
        countList[number] ++;
        listModesAmount = Object.values(countList);
        console.log(listModesAmount);
    })
    console.log(countList);
    modeValueAmount = listModesAmount.reduce((a,b) => Math.max(a,b), -Infinity);
    modeValueKey = Object.keys(countList).find(key => countList[key] === modeValueAmount);

    console.log(modeValueKey);
    document.querySelector('#mode').value = modeValueKey;
}