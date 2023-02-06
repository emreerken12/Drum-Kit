window.addEventListener('keydown', function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return; // hepsinin birlikte çalışmasını durdurmak için
audio.currentTime = 0; //aynı sesi tekrar çalmak için
audio.play();
key.classList.add('playing'); //basılan tuşları renklendirmek

});

function removeTransition(e){
    if (e.propertyName !== 'transform') return; // eğer bir dönüşüm değilse geçmek için
   
this.classList.remove('playing');

}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend' , removeTransition));