const listImgs = document.querySelector('.list-imgs');
const imgs = document.getElementsByClassName('img-slide');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const length = imgs.length;
let current = 0;
const changeSlide = () =>{
    if(current==length-1){
        current =0;
        let width = imgs[0].offsetWidth; 
        listImgs.style.transform = `translateX(${width  * -1*current}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.item-'+current).classList.add('active');
    }else {
        current++;
        let width = imgs[0].offsetWidth; 
        listImgs.style.transform = `translateX(${width  * -1*current}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.item-'+current).classList.add('active');
    }
};
let eventChangeSlide = setInterval(changeSlide, 4000);

btnRight.addEventListener('click' , () => {
    clearInterval(eventChangeSlide);
    changeSlide();
    eventChangeSlide = setInterval(changeSlide, 4000);
});
btnLeft.addEventListener('click' , () => {
    clearInterval(eventChangeSlide);
    if(current==0){
        current = length-1;
        let width = imgs[0].offsetWidth; 
        listImgs.style.transform = `translateX(${width  * -1*current}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.item-'+current).classList.add('active');
    }else {
        current--;
        let width = imgs[0].offsetWidth; 
        listImgs.style.transform = `translateX(${width  * -1*current}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.item-'+current).classList.add('active');
    }
    eventChangeSlide = setInterval(changeSlide, 4000);;
});