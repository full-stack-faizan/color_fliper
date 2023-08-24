
let arrr= ["red", "green", "blue", "pink","yellow","purple","brown","aqua","brown","orange"]
console.log(arrr[2].toString())

const myfunc=()=>{
    let random = Math.floor(Math.random()*10)
    let g= document.getElementById('second')
    g.style.backgroundColor= arrr[random].toString()
 }

let btn= document.getElementById('btn')
btn.addEventListener("click", myfunc)


