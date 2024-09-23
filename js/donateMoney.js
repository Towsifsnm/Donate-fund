




document.getElementById('donate-money').addEventListener('click',function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('donate-amount').value; 
    const allDonate = document.getElementById('all-donate').innerText; 
    const donate = parseFloat(donateMoney);
    const all = parseFloat(allDonate);
    const avilable= donate + all;

    document.getElementById('all-donate').innerText = avilable;


    const mainBalance = document.getElementById('main-balance').innerText;
    const main = parseFloat(mainBalance);

    const lastAmount = main - donate;

    document.getElementById('main-balance').innerText = lastAmount;

// trsnsation history
    //  const p = document.createElement('p');
    // p.innerText = `${donate-money} Taka is donated for famine-2024 at feni, Bangladeh`;
    // console.log(p);

    // document.getElementById('transaction-history').appendChild(p);




    // if (donateMoney ===NaN && allDonate=== NaN){
    //        const donateMoney = getInputFieldById('donate-amount');
    //        const allDonate =getTextFieldById('all-donate');
    //        const avilable = donate + all;
    //        const lastAmount = main - donate;
    //        document.getElementById('main-balance').innerText = lastAmount;
    // }
    // else {
    //     alert('You can not deposite money now. Thank you.')
    // }
  
 
});

document.getElementById('donate-money2').addEventListener('click',function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('donate-amount2').value; 
    const allDonate = document.getElementById('all-donate2').innerText; 
    const donate = parseFloat(donateMoney);
    const all = parseFloat(allDonate);
    const avilable= donate + all;

    document.getElementById('all-donate2').innerText = avilable;


    const mainBalance = document.getElementById('main-balance').innerText;
    const main = parseFloat(mainBalance);

    const lastAmount = main - donate;

    document.getElementById('main-balance').innerText = lastAmount;

   

  

});

document.getElementById('donate-money3').addEventListener('click',function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('donate-amount3').value; 
    const allDonate = document.getElementById('all-donate3').innerText; 
    const donate = parseFloat(donateMoney);
    const all = parseFloat(allDonate);
    const avilable= donate + all;

    document.getElementById('all-donate3').innerText = avilable;


    const mainBalance = document.getElementById('main-balance').innerText;
    const main = parseFloat(mainBalance);

    const lastAmount = main - donate;

    document.getElementById('main-balance').innerText = lastAmount;

  

});

