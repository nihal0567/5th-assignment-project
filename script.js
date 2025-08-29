
let heartBtn = document.getElementById('heart-count');

let count = 0;
let hearts = document.querySelectorAll('.heart');

hearts.forEach(function(heart){
    heart.addEventListener('click', function(){
        count++
        heartBtn.innerText = count;
    })
})



let coins = 100;
let coinCount = document.getElementById('coin-count');

let callBtns = document.querySelectorAll('.call-btn');

let historyList = document.getElementById('call-history');


callBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
        let card = btn.closest(".card-body");
        console.log(card)
        let serviceName = card.querySelector('.service-name').innerText;
        
        let serviceNumber = card.querySelector('.service-number').innerText
        
        if (coins < 20) {
            alert('Not enough coins to make a call');
            return;
        }

        alert(`Calling ${serviceName} ${serviceNumber}...`);
        coins -= 20;
        coinCount.innerText = coins;

        let now = new Date()
        const time = now.toLocaleTimeString();
        let li = document.createElement('li');
        li.innerText = `${serviceName} - ${serviceNumber} - ${time}`;

        historyList.appendChild(li,  now);
    })
})

document.getElementById('clear-history').addEventListener('click', function(){
    historyList.innerHTML = '';
    historyList.style.listStyle = 'none';
})



const copyBtns = document.querySelectorAll('.copy-btn');
copyBtns.forEach(copyBtn => {
    copyBtn.addEventListener ('click', function(){
        const copyCount = document.getElementById('copy-count').innerText;
        const newCount = Number(copyCount) + 1;
        document.getElementById('copy-count').innerText = newCount;
        const text = copyBtn.parentNode.parentNode.children[2].children[0].innerText
        
        navigator.clipboard.writeText(text).then(() => {
            alert('লেখা কপি হয়েছে: '+ text)
        })
        .catch(err => {
            console.error('কপি করা যায়নি: ', err)
        })
    })
})