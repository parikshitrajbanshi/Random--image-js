function runfun(){
    console.log('yes bro');
    let inputdata = document.getElementById('ip-id');
    console.log(inputdata.value);

    let resultArea = document.getElementById('result');
    let  splitArr = inputdata.value.split(" ");
    
    console.log(splitArr);
    if(splitArr[0]=='Add'){
        resultArea.innerText = Number(splitArr[1]) + Number(splitArr[2]);
    }else if(splitArr[0]=='sub'){
        resultArea.innerText = Number(splitArr[1]) - Number(splitArr[2]);
    }else if(splitArr[0]=='multi'){
        resultArea.innerText = Number(splitArr[1]) * Number(splitArr[2]);
    }else if(splitArr[0]=='div'){
        resultArea.innerText = Number(splitArr[1]) /  Number(splitArr[2]);
    }else if(splitArr == splitArr.slice(0,1)){
        resultArea.innerText  =  '  add last item';
    }else{
         resultArea.innerText = 'NOT an operastion';
    }
}






    
    
}