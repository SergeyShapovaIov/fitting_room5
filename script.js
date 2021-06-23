

const prev = document.getElementById('prev'),
   next = document.getElementById('next'),
   slides = document.querySelectorAll('.slide');

let index = 0;

const acctiveSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        acctiveSlide(index)
    }else{
        index++;
        acctiveSlide(index)
    }
}

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1
        acctiveSlide(index);
    }else{
        index--;
        acctiveSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

document.getElementById('measurement_more').addEventListener('click', function(event) {
    document.querySelector('.buyer').scrollIntoView({
        block: 'start',
        behavior: 'smooth'   
    })
})

document.getElementById('sale_etails').addEventListener('click', function(event) {
    document.querySelector('.seller').scrollIntoView({
        block: 'start',
        behavior: 'smooth'   
    })
})