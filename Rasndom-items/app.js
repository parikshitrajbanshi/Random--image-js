

let inputx = document.getElementById('input-text');
let outputx = document.getElementById('output-text');

function showoutput(){
    let splitArr = inputx.value.split(" ");

    outputx.innerText = splitArr[Math.floor(Math.random()*(splitArr.length))];

}
