




document.getElementById('donate-money').addEventListener('click',function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('donate-amount').value; 
    const allDonate = document.getElementById('all-donate').innerText;
    const donate = parseFloat(donateMoney);
    const mainBalance = document.getElementById('main-balance').innerText;
    const main = parseFloat(mainBalance);
    if (donate > 0 && mainBalance > donateMoney) {
    const all = parseFloat(allDonate);
    const avilable= donate + all;

    document.getElementById('all-donate').innerText = avilable;


    // const mainBalance = document.getElementById('main-balance').innerText;
    // const main = parseFloat(mainBalance);

    const lastAmount = main - donate;

    document.getElementById('main-balance').innerText = lastAmount;
} else {
    alert('Invalid Donation Money')

}


// trsnsation history
     const p = document.createElement('p');
    let html = `<b>${donate}</b> <b>Taka is donated for famine-2024 at feni, Bangladeh</b>`;
    html += `<br/>`;
    html += new Date();
    p.innerHTML = html;

    document.getElementById('transaction-history').appendChild(p);



 
 
});

document.getElementById('donate-money2').addEventListener('click',function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('donate-amount2').value; 
    const allDonate = document.getElementById('all-donate2').innerText; 
    const donate = parseFloat(donateMoney);
    const mainBalance = document.getElementById('main-balance').innerText;
        const main = parseFloat(mainBalance);
    
    if (donate > 0 && mainBalance > donateMoney) {
        const all = parseFloat(allDonate);
        const avilable= donate + all;
    
        document.getElementById('all-donate2').innerText = avilable;
    
    
        
        const lastAmount = main - donate;
    
        document.getElementById('main-balance').innerText = lastAmount;

        
    } else {
        alert('Invalid Donation Money')

    }
   
// trsnsation history
const p = document.createElement('p');
let html = `<b>${donate}</b> <b>Taka is donated for famine-2024 at feni, Bangladeh</b>`;
html += `<br/>`;
html += new Date();
p.innerHTML = html;

document.getElementById('transaction-history').appendChild(p);
   

  

});

document.getElementById('donate-money3').addEventListener('click',function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('donate-amount3').value; 
    const allDonate = document.getElementById('all-donate3').innerText; 
    const donate = parseFloat(donateMoney);
    const mainBalance = document.getElementById('main-balance').innerText;
    const main = parseFloat(mainBalance);
    if (donate > 0 && mainBalance > donateMoney) {
    const all = parseFloat(allDonate);
    const avilable= donate + all;

    document.getElementById('all-donate3').innerText = avilable;


    

    const lastAmount = main - donate;

    document.getElementById('main-balance').innerText = lastAmount;

} else {
    alert('Invalid Donation Money')

}


  // trsnsation history
  const p = document.createElement('p');
  let html = `<b>${donate}</b> <b>Taka is donated for famine-2024 at feni, Bangladeh</b>`;
  html += `<br/>`;
  html += new Date();
  p.innerHTML = html;

  document.getElementById('transaction-history').appendChild(p);

});

