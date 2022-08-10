let cargaPikachu=`<div class="pantallaDeCarga">
<div class="loader"></div>
<h4>Cargando servidores</h4>
<img src="./Multimedia/carga.gif" alt="pikachuCorriendo">
</div>`
let cargaArticuno=`<div class="pantallaDeCarga">
<div class="loader"></div>
<h4>Cargando servidores</h4>
<img src="./Multimedia/articuno.gif" alt="pikachuCorriendo">
</div>`
let cargaArceus=`<div class="pantallaDeCarga">
<div class="loader"></div>
<h4>Cargando servidores</h4>
<img src="./Multimedia/arceus.gif" alt="pikachuCorriendo">
</div>`
let temas=`<section class="temasAelegir">
<h4 class="tituloTemas">TEMAS:</h4>
<ul class="listaTemas">
    <li class="articuno">
        <div class="nombreYfondo">
            <h4>Articuno</h4>
            <img  src="./Multimedia/articuno.gif" alt="articuno" class="gifArticuno">
        </div>
        <img class="fondos imagenFondoArticuno" src="./Multimedia/ice.png" alt="articunoPaisaje" >
    </li>
    <li class="arceus">
        <div class="nombreYfondo">
            <img src="./Multimedia/arceus.gif" alt="articuno" class="gifArceus">
            <h4>Arceus</h4>
        </div>
        <img class="fondos imagenFondoArceus" src="./Multimedia/arceus.jpg" alt="arceusPaisaje" >
    </li>
    <li class="pikachu">
        <div class="nombreYfondo activarAnimacion">
            <h4>Pikachu</h4>
            <img src="./Multimedia/carga.gif" alt="articuno" class="gifPikachu">
        </div>
        <img class="fondos imagenFondoPikachu" src="./Multimedia/truenos.webp" alt="pikachuPaisaje">
    </li>
</ul>
</section>`
let captura=` <section class="pokedex">
<div class="carta">
    <div class="mostrarCarta">
        <img class="pokemonImagen" src="" alt="pokemon">
        <div class="nombreCarta">
            <h4>Palkia</h4>
        </div>
        <div class="estadisticasCarta">
            <div class="estadisticas">
                <h4 class="estadisticaDeAtaque">85</h4>
                <p>Ataque</p>
            </div>
            <div class="estadisticas">
                <h4 class="estadisticaDeEspecial">45</h4>
                <p>Especial</p>
            </div>
            <div class="estadisticas">
                <h4 class="estadisticaDeDefensa">20</h4>
                <p>Defensa</p>
            </div>
        </div>
    </div>
    <div class="avisoDeInicio activarSeccionCarta">
        <img class="bichoDeCarga" src="" alt="imagen-de-Carga">
        <h4>Pulsa buscar pokemón para comenzar</h4>
    </div>
    <div class="cargandoCarta">
        <img src="./Multimedia/cargaPokeball.gif" alt="pokeball">
    </div>
</div>
<div class="botonesPokedex">
    <div class="poderTotal"><h4>Poder Total=</h4><h5 class="cantidadDePoder"></h5></div>
    <div class="botonCaptura">
        <button>Capturar</button>
    </div>
    <div class="botonSiguiente">
        <button>Buscar <br>pokemón</button>
    </div>
</div>
</section>`
let filtroCaptura=``

class Carta {
    constructor(nombre,peso,imagen,altura,poder,tipo,id){
        this.nombre=nombre
        this.peso=peso
        this.imagen=imagen
        this.tipo=tipo
        this.altura=altura
        this.poder=poder
        this.id=id
    }
}
