// function getInputFieldById(id){
//     const donateMoney = document.getElementById('donate-amount').value; 
//     const allDonate = document.getElementById('all-donate').innerText; 
//     const donate = parseFloat(donateMoney);
//     const all = parseFloat(allDonate);
//     const avilable= donate + all;

//     document.getElementById('all-donate').innerText = avilable;


//     const mainBalance = document.getElementById('main-balance').innerText;
//     const main = parseFloat(mainBalance);

//     const lastAmount = main - donate;
//     return lastAmount;
// } 


// function getInputFieldById(id){
//     const inputValue = document.getElementById(id).value;
//     const inputNumber = parseFloat(inputValue);
//     return inputNumber;
// }


// function getTextFieldById(id){
//     const textValue = document.getElementById(id).innerText;
//     const textNumber = parseFloat(textValue);
//     return textNumber;
// }




document.getElementById('donate-page').addEventListener('click', function(){
    
    document.getElementById('main-page').classList.remove('hidden');
    document.getElementById('blg-sec').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    
});
document.getElementById('history-page').addEventListener('click', function(){
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('blg-sec').classList.add('hidden');
   
    
});
document.getElementById('blog-section').addEventListener('click', function(){

    document.getElementById('blg-sec').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('main-page').classList.add('hidden');
    
   
    
});