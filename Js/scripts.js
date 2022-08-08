let body=document.querySelector(`.seleccion`)
let seleccionarTema=localStorage.getItem(`tema`)|| `temaArticuno`
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


//*Sección carga --> animacion de carga de servidor

let carga=()=>{
    let tema=localStorage.getItem(`tema`)||document.body.classList.value
switch (tema) {
    case `seleccion temaPikachu`:
        main.innerHTML=cargaPikachu
        break;
    case `seleccion temaArticuno`:
        main.innerHTML=cargaArticuno
        break
    case `seleccion temaArceus`:
        main.innerHTML=cargaArceus
        break
    case `temaPikachu`:
            main.innerHTML=cargaPikachu
            break;
    case `temaArticuno`:
            main.innerHTML=cargaArticuno
            break
    case `temaArceus`:
            main.innerHTML=cargaArceus
            break    
    default:
        break;
}
}
//* Menú
let logo=document.querySelector(`.logo`)
let barrasMenu=document.querySelector(`.fa-bars`)
let menuFondo=document.querySelector(`.fondo`)
let menu=document.querySelector(`.menu`)
let textoMenu=document.querySelectorAll(`.textoMenu`)
let capturarMenu=document.querySelector(`.seleccionCapturarMenu`)

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


//Todo: funcion de capturar=

let capturar=()=>{
//* Llenar main
main.innerHTML=captura
//* llamar api para random pokemon
let numerosRandom=(min,max)=>{
    min= Math.ceil(min)
    max=Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)+min)
   }
let obtenerPokeRandom=async()=>{
   let llamarAapi= axios(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
   let pokemon=await llamarAapi.then(res=>res.data.results[numerosRandom(0,1153)].url)
   let buscarPokemon=axios(`${pokemon}`)
   let pokemonDado=await buscarPokemon.then(res=>res.data)
   return pokemonDado
}

//*Botones
let botonBuscar=document.querySelector(`.botonSiguiente button`)

//* Boton capturar y pokemones actuales
let botonCapturar=document.querySelector(`.botonCaptura button`)
let pokemonesActuales=JSON.parse(localStorage.getItem(`caja`))||[]
let recuperarNombre;
let permitirCaptura=false;


let capturable=(pokemon)=>{
   if(!(pokemonesActuales.includes(pokemon))){
       return true
   }else{
       return false
   }
}

let activarCaptura=(nombreDelPokemon)=>{
   
   let pokemonAcapturar=nombreDelPokemon
   if(capturable(pokemonAcapturar)){
       alert(`Se ha capturado con exito tu pokemón`)
       pokemonesActuales.push(pokemonAcapturar)
       localStorage.setItem(`caja`,JSON.stringify(pokemonesActuales))
   }else{
       alert(`Ya tienes este pokemón`)
   }
}
//* Secciones del html y buscar pokemon
let avisoDeInicio=document.querySelector(`.avisoDeInicio`)
let cargaDeCarta=document.querySelector(`.cargandoCarta`)
let mostrarCarta= document.querySelector(`.mostrarCarta`)
let pokemonImagen= document.querySelector(`.pokemonImagen`)
let nombreCarta= document.querySelector(`.nombreCarta h4`)
let ataque= document.querySelector(`.estadisticaDeAtaque`)
let defensa=document.querySelector(`.estadisticaDeDefensa`)
let especial=document.querySelector(`.estadisticaDeEspecial`)
let poderTotal=document.querySelector(`.cantidadDePoder`)
let poderTotalContenedor=document.querySelector(`.poderTotal`)
let fondoPokedex=document.querySelector(`.pokedex`)
let loadCartaInicio=document.querySelector(`.bichoDeCarga`)
console.log(loadCartaInicio)
switch (document.body.className) {
   case `seleccion temaPikachu`:
       loadCartaInicio.src="../Multimedia/carga.gif"
       break;
       case `temaPikachu`:
       loadCartaInicio.src="../Multimedia/carga.gif"
       break;
   case `seleccion temaArticuno`:
           loadCartaInicio.src="../Multimedia/articuno.gif"
       break;
    case `temaArticuno`:
           loadCartaInicio.src="../Multimedia/articuno.gif"
       break;
   case `seleccion temaArceus`:
           loadCartaInicio.src="../Multimedia/arceus.gif"
       break;
    case `temaArceus`:
           loadCartaInicio.src="../Multimedia/arceus.gif"
       break;
   default:
       break;
}

let cambiarCarta=async()=>{
  let pokemon=await obtenerPokeRandom()
  cargaDeCarta.classList.remove(`activarSeccionCarta`)
  mostrarCarta.classList.add(`activarSeccionCarta`)
  return pokemon
}
let llamarPokemon=async()=>{
   setTimeout(async () => {
       let pokemon = await cambiarCarta()
       recuperarNombre=pokemon.name
       permitirCaptura=true
       let recuperarImagen = pokemon.sprites.other[`official-artwork`].front_default || pokemon.sprites.other.home.front_default|| pokemon.sprites.back_default||`../Multimedia/noEncontrado.jpg`
       pokemonImagen.src = `${await recuperarImagen}`
       let nombrePokemon = pokemon.name
       nombreCarta.innerHTML = nombrePokemon[0].toUpperCase() + nombrePokemon.substring(1)
       ataque.innerHTML = pokemon.stats[1].base_stat
       defensa.innerHTML = pokemon.stats[2].base_stat
       especial.innerHTML = pokemon.stats[3].base_stat
       poderTotal.innerHTML=(pokemon.stats[0].base_stat)+(pokemon.stats[1].base_stat)+(pokemon.stats[2].base_stat)+(pokemon.stats[3].base_stat)+(pokemon.stats[4].base_stat)+(pokemon.stats[5].base_stat)
       if(poderTotal.innerHTML>=600&&poderTotal.innerHTML<708){
           pokemonImagen.style.background=`url("../Multimedia/fondoPokeon.gif") 100% 100% / cover, center center`
       }else if(poderTotal.innerHTML>=708){
           pokemonImagen.style.background=`url("../Multimedia/fondoPokeon.gif") 100% 100% / cover, center center`
           if(document.body.className==`seleccion temaArceus`){
               fondoPokedex.style.background=`url("../Multimedia/galaxia.gif") 100% 100% / cover, center center`
           }else if(document.body.className==`seleccion temaArticuno`){
               fondoPokedex.style.background=`url("../Multimedia/nieve.gif") 100% 100% / cover, center center`
           }else if(document.body.className==`seleccion temaPikachu`){
               fondoPokedex.style.background=`url("../Multimedia/truenos.gif") 100% 100% / cover, center center`
           }
       }else{
           pokemonImagen.style.background=`url("../Multimedia/fondoComunes.jpg") 100% 100% / cover, center center`
           fondoPokedex.background=`conic-gradient(rgb(192, 186, 186), var(--principal), #fff, var(--principal), rgb(192, 186, 186));`
       }
   }, 1800)
   setTimeout(()=>{
       poderTotalContenedor.style.display=`flex`
       mostrarCarta.style.opacity=1
   },2200)
}
let manipularSecciones=async()=>{
   mostrarCarta.style.opacity=0
   avisoDeInicio.classList.remove(`activarSeccionCarta`)
   mostrarCarta.classList.remove(`activarSeccionCarta`)
   cargaDeCarta.classList.add(`activarSeccionCarta`)
   await llamarPokemon()
}

let buscarPokemon=()=>{
   manipularSecciones()
}

botonBuscar.addEventListener(`click`,buscarPokemon)
botonCapturar.addEventListener(`click`,()=>{
   if(permitirCaptura){
       activarCaptura(recuperarNombre)
   }else{
       alert(`Busca un pokemón para capturar`)
   }
})

}
//* Capturados
let seccionSinPokemones=document.querySelector(`.noCapturoNinguno`)
let pokemonesCapturados=JSON.parse(localStorage.getItem(`caja`))
let cantidadDePokemones=pokemonesCapturados.length
if(cantidadDePokemones>=0){
    seccionSinPokemones.classList.toggle(`activarFondoCapturados`)
}
//* filtro Capturados cambiar
let botonFiltrosAvanzados=document.querySelector(`.busquedaAvanzadaCapturados h4`),
    contenedorDeFiltros=document.querySelector(`.contenedorFiltros`),
    busquedaNormal=document.querySelector(`.busquedaPorNombre`)
    busquedaAvanzada=document.querySelector(`.busquedaAvanzadaSeccion`)

botonFiltrosAvanzados.addEventListener(`click`,()=>{
    let activado=document.querySelector(`.activarDesactivar`)

    if(activado.innerHTML==`OFF`){
        activado.innerHTML=`ON`
        activado.style.color=`green`
        busquedaNormal.style.display=`none`
        busquedaAvanzada.style.display=`grid`
    }else{
        activado.innerHTML=`OFF`
        activado.style.color=`red`
        busquedaNormal.style.display=`flex`
        busquedaAvanzada.style.display=`none`
    }
})

//* Ejecuciones al inicio
// let iniciar=()=>{
//     carga()
//     setTimeout(capturar,1000)
// }
// iniciar()
// capturarMenu.addEventListener(`click`,()=>{
//     iniciar()
//     activarDesactivarMenu()
//     fondoDeshabilitar()
// })

