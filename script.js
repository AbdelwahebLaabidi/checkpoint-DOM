var btnP = document.querySelectorAll('.btnP')
var btnM = document.querySelectorAll('.btnM')
var trash = document.querySelectorAll('.fa-trash')
var heart = document.querySelectorAll('.fa-heart')

for ( let i=0; i < btnP.length; i++) {
    btnP[i].addEventListener('click', function() {
        btnP[i].previousElementSibling.innerText++
        Sommetot()
    })
}

for(let i=0; i< btnM.length; i++){
    btnM[i].addEventListener('click', function(){
        if(btnM[i].nextElementSibling.innerText >0 ){
            btnM[i].nextElementSibling.innerText--
            Sommetot()
    }

    })
}

for (let i=0; i<trash.length; i++) {
    trash[i].addEventListener('click', function(){
        trash[i].parentElement.parentElement.remove()
        Sommetot()

    })
}

for(let i=0; i<heart.length; i++) {
    heart[i].addEventListener('click',function(){
        heart[i].classList.toggle('couleur')
    })
}


function Sommetot() {
    var prix = document.querySelectorAll('.Prix')
    var qte = document.querySelectorAll('.qte')
    var total = document.querySelector('#total')
    var sum = 0

for (let i=0; i<prix.length; i++){

    sum = sum + (prix[i].innerText * qte[i].innerText)
}
    total.innerText = sum 
}
