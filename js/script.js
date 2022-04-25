const som1 = document.getElementById('m1')
const som2 = document.getElementById('m2')
const som3 = document.getElementById('m3')
const som4= document.getElementById('m4')
const som5= document.getElementById('m5')

img1.addEventListener('click', ()=>{
    som1.src = "./audio/chuva.mp3"
    m1.play();
})

img2.addEventListener('click', ()=>{
    som2.src = "./audio/relogio.mp3"
    m2.play();
})

img3.addEventListener('click', ()=>{
    som3.src = "./audio/gato.mp3"
    m3.play();
})
img4.addEventListener('click', ()=>{
    som4.src = "./audio/luz.mp3"
    m4.play();
})
img5.addEventListener('click', ()=>{
    som5.src = "./audio/livro.mp3"
    m5.play();
})