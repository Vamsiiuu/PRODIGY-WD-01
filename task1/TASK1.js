function changebg(){
    
    var scrollvalue = window.scrollY;
    if(scrollvalue<250){
        airplanes.classList.remove("bgcolor");
    } else{
        airplanes.classList.add('bgcolor');
    }
    
}
window.addEventListener('scroll',changebg);

