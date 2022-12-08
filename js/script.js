const petitprix = document.getElementById("petitprix");
const moyenprix = document.getElementById("moyenprix");
const grandprix = document.getElementById("grandprix");
const dixpremier = document.getElementsByClassName('dix');
const quatorzeAutres = document.getElementsByClassName('reste');
const message = document.getElementById('prix')
const bouton1 = document.getElementById("bouton1");
const bouton2= document.getElementById("bouton2");
const bouton3 = document.getElementById("bouton3");
const bouton4 = document.getElementById("bouton4");
const bouton5 = document.getElementById("bouton5");
const bouton6 = document.getElementById("bouton6");
let choix = 24.37;
let disparaitre = 3;
let bob = true;
petitprix.addEventListener('click', changerChoix1);
moyenprix.addEventListener('click', changerChoix2);
grandprix.addEventListener('click', changerChoix3);
bouton1.addEventListener('click', changerChoix1);
bouton2.addEventListener('click', changerChoix2);
bouton3.addEventListener('click', changerChoix3);
bouton4.addEventListener('click', changerChoix4);
bouton5.addEventListener('click', changerChoix5);
bouton6.addEventListener('click', changerChoix6);
bouton3.addEventListener('click', changerbouton);
bouton4.addEventListener('click', changerbouton);
bouton5.addEventListener('click', changerbouton);
bouton6.addEventListener('click', changerbouton);

bouton3.classList.add('chosen');
bouton3.classList.remove('formulaire'); 
function changer(){
    console.log(choix)
   if (choix >= 1.35 && choix < 13.54){
    petitprix.classList.add('choisie');
    petitprix.classList.remove('article');
    bouton1.classList.add('chosen');
    bouton1.classList.remove('formulaire');
    for(let i = 0 ; i < dixpremier.length; i ++){
        dixpremier[i].classList.add('hidden');
        console.log(dixpremier[i].classList);
    }
    message.innerHTML="Payer au moins 1.35$CA pour ces 5 articles";
    }
    else{
        petitprix.classList.add('article');
        petitprix.classList.remove('choisie'); 
        bouton1.classList.remove('chosen');
    bouton1.classList.add('formulaire');
        for(let i = 0 ; i < dixpremier.length; i ++){
            dixpremier[i].classList.remove('hidden');
        }       
    }
    if(choix >= 13.54 && choix< 24.37){
        moyenprix.classList.add('choisie');
        moyenprix.classList.remove('article'); 
        message.innerHTML="Payer au moins 13.54$CA pour ces 10 articles"; 
        bouton2.classList.add('chosen');
        bouton2.classList.remove('formulaire');     
    }
    else{
        moyenprix.classList.add('article');
        moyenprix.classList.remove('choisie');  
        bouton2.classList.remove('chosen');
        bouton2.classList.add('formulaire');      
    }
    if(choix >= 24.37 ){
        
        grandprix.classList.add('choisie');
        grandprix.classList.remove('article');  

        for(let i = 0 ; i < quatorzeAutres.length; i ++){
            quatorzeAutres[i].classList.remove('hidden');
        }  
        message.innerHTML="Payer au moins 24.37$CA pour ces 14 articles";  
        if(disparaitre != 3){
        bouton3.classList.remove('chosen');
        bouton3.classList.add('formulaire');             
        } 
        if(disparaitre != 4){
        bouton4.classList.remove('chosen');
        bouton4.classList.add('formulaire');              
        }
        if (disparaitre != 5){
        bouton5.classList.remove('chosen');
        bouton5.classList.add('formulaire'); 
        }
        if (disparaitre != 6){
        bouton6.classList.remove('chosen');
        bouton6.classList.add('formulaire');             
        }
    }
    else{
        grandprix.classList.add('article');
        grandprix.classList.remove('choisie'); 
        bouton3.classList.remove('chosen');
        bouton3.classList.add('formulaire'); 
        bouton4.classList.remove('chosen');
        bouton4.classList.add('formulaire');         
        bouton5.classList.remove('chosen');
        bouton5.classList.add('formulaire'); 
        bouton6.classList.remove('chosen');
        bouton6.classList.add('formulaire'); 
 
        for(let i = 0 ; i < quatorzeAutres.length; i ++){
            quatorzeAutres[i].classList.add('hidden');
        }       
    }
}
function changerChoix1(){
choix = 1.35;
}
setInterval(changer, 200);
function changerChoix2(){
    choix = 13.54;
}
function changerChoix3(){
    choix = 24.37;
    disparaitre = 3;
}
function changerChoix4(){
    choix = 30;
    disparaitre = 4;
    
}
function changerChoix5(){
    choix = 35;
    disparaitre = 5 ;
}
function changerChoix6(){
    choix = 40;
    disparaitre = 6;
}
function changerbouton(e){
    console.log(e);
    console.log(disparaitre)
    e.target.classList.add('chosen');
    e.target.classList.remove('formulaire');  

}