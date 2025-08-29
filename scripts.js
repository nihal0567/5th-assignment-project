const count = 0;
const heartBtns = document.getElementsByClassName('heart')
for(const heartBtn of heartBtns){
    heartBtn.addEventListener('click', function(){
        const newCount = count + 1;
        document.getElementById('heart-count').innerText = newCount;
    })
}