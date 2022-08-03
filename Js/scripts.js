let body=document.querySelector(`.seleccion`)
let seleccionarTema=localStorage.getItem(`tema`)|| `temaArceus`
body.className=`seleccion ${seleccionarTema}`
//*Main inyectar
let main=document.querySelector(`.inyectar`)

//* Eleccion tema
let botonTemas=document.querySelector(`.eleccionTemas`)
botonTemas.addEventListener(`click`,()=>{
    main.innerHTML=temas
    activarDesactivarMenu()
    fondoDeshabilitar()
    //* animacion tema
    let objetoAnimado=document.querySelectorAll(`.nombreYfondo`)
    let articuno=document.querySelector(`.articuno`)
    let pikachu= document.querySelector(`.pikachu`)
    let arceus= document.querySelector(`.arceus`)
    let crearEvento=(objeto,i)=> {
    objeto.addEventListener(`mouseover`,()=> {
        objetoAnimado[i].classList.add(`aparecerAnimaciones`)
    })
    objetoAnimado[i].addEventListener(`mouseout`,()=> {
        objetoAnimado[i].classList.remove(`aparecerAnimaciones`)
    })
    objetoAnimado[i].addEventListener(`click`,()=>{
        if(i==0){
            document.body.className="temaArticuno"
            localStorage.setItem(`tema`,`temaArticuno`)
        }else if(i==1){
            document.body.className="temaArceus"
            localStorage.setItem(`tema`,`temaArceus`)
        }else if(i==2){
            document.body.className="temaPikachu"
            localStorage.setItem(`tema`,`temaPikachu`)
        }
    })
}
crearEvento(articuno,0)
crearEvento(arceus,1)
crearEvento(pikachu,2)
})


//*Sección tema
// let tema=localStorage.getItem(`tema`)||document.body.classList.value
// switch (tema) {
//     case `seleccion temaPikachu`:
//         main.innerHTML=cargaPikachu
//         break;
//     case `seleccion temaArticuno`:
//         main.innerHTML=cargaArticuno
//         break
//     case `seleccion temaArceus`:
//         main.innerHTML=cargaArceus
//         break
//     case `temaPikachu`:
//             main.innerHTML=cargaPikachu
//             break;
//     case `temaArticuno`:
//             main.innerHTML=cargaArticuno
//             break
//     case `temaArceus`:
//             main.innerHTML=cargaArceus
//             break    
//     default:
//         break;
// }
//* Menú
let logo=document.querySelector(`.logo`)
let barrasMenu=document.querySelector(`.fa-bars`)
let menuFondo=document.querySelector(`.fondo`)
let menu=document.querySelector(`.menu`)
let textoMenu=document.querySelectorAll(`.textoMenu`)

barrasMenu.addEventListener(`click`,()=> {
    activarDesactivarMenu()
    fondoDeshabilitar()
    
})

let activarDesactivarMenu=()=>{
    menuFondo.classList.toggle(`aparecerMenu`)
    menu.classList.toggle(`transladarMenu`)
    setTimeout(()=>{
        animar(textoMenu[0],1)
        animar(textoMenu[1],2)
        animar(textoMenu[2],3)
        animar(textoMenu[3],4)
        animar(textoMenu[4],5)
       },800)
}

let fondoDeshabilitar=()=>{
    desanimar(textoMenu[0])
    desanimar(textoMenu[1])
    desanimar(textoMenu[2])
    desanimar(textoMenu[3])
    desanimar(textoMenu[4])
    menuFondo.addEventListener(`click`,(e)=>{
        menuFondo.classList.remove(`aparecerMenu`)
        menu.classList.remove(`transladarMenu`)
        e.stopPropagation()
    })
    
}
let cancelarEventosMenu=()=> {
    menu.removeEventListener(`click`)
}
let animar=(objeto,segundos)=> {
    objeto.style.transition=`all ${segundos}s`
    objeto.style.opacity=1
}
let desanimar=(objeto)=> {
    objeto.style.transition=`all .1s`
    objeto.style.opacity=0
}

//* llamar api para random pokemon
let llamarApi=axios(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)

//*Función que pone numeros random entre 0 y 1153 --> cantidad de pokemons 
let numerosRandom=(min,max)=>{
     min= Math.ceil(min)
     max=Math.floor(max)
     return Math.floor(Math.random()*(max-min+1)+min)
    }


console.log(`Se ha completado`)