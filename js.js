let randomNumber1 = Math.floor(Math.random()*6)+1
let randomImgSours = './images/dice'+ randomNumber1+'.png'
let imag1= document.querySelectorAll('img')[0].setAttribute('src', randomImgSours)
let randomNumber2 = Math.floor(Math.random()*6)+1
let randomImgSours2 = './images/dice'+ randomNumber2 +'.png'
let imag2= document.querySelectorAll('img')[1].setAttribute('src', randomImgSours2)

if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML='Player 1 wins!'
}else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML='Player 2 wins!'
}else{
    document.querySelector('h1').innerHTML='Draw!'

}
