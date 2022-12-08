const petitprix = document.getElementById("petitprix");
const moyenprix = document.getElementById("moyenprix");
const grandprix = document.getElementById("grandprix");
const dixpremier = document.getElementsByClassName('dix');
const quatorzeAutres = document.getElementsByClassName('reste');
const message = document.getElementById('prix')
let choix = 3;
let bob = true;
petitprix.addEventListener('click', changerChoix1);
moyenprix.addEventListener('click', changerChoix2);
grandprix.addEventListener('click', changerChoix3);

function changer(){
    console.log(choix)
   if (choix == 1){
    petitprix.classList.add('choisie');
    petitprix.classList.remove('article');
    for(let i = 0 ; i < dixpremier.length; i ++){
        dixpremier[i].classList.add('hidden');
        console.log(dixpremier[i].classList);
    }
    message.innerHTML="Payer au moins 1,35$CA pour ces 5 articles";
    }
    else{
        petitprix.classList.add('article');
        petitprix.classList.remove('choisie'); 
        for(let i = 0 ; i < dixpremier.length; i ++){
            dixpremier[i].classList.remove('hidden');
        }       
    }
    if(choix == 2){
        moyenprix.classList.add('choisie');
        moyenprix.classList.remove('article'); 
        message.innerHTML="Payer au moins 13,54$CA pour ces 10 articles";      
    }
    else{
        moyenprix.classList.add('article');
        moyenprix.classList.remove('choisie');        
    }
    if(choix == 3){
        grandprix.classList.add('choisie');
        grandprix.classList.remove('article');  
        for(let i = 0 ; i < quatorzeAutres.length; i ++){
            quatorzeAutres[i].classList.remove('hidden');
        }  
        message.innerHTML="Payer au moins 24,37$CA pour ces  articles";   
    }
    else{
        grandprix.classList.add('article');
        grandprix.classList.remove('choisie'); 
        for(let i = 0 ; i < quatorzeAutres.length; i ++){
            quatorzeAutres[i].classList.add('hidden');
        }       
    }
}
function changerChoix1(){
choix = 1;
}
setInterval(changer, 200);
function changerChoix2(){
    choix = 2;
}
function changerChoix3(){
    choix = 3;
}