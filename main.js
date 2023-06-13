/* Bienvenida */

let div = document.createElement("div");
div.innerHTML = `<div id="primerEtapa" class="primerEtapa container-fluid text-center">
<h1>Te doy la bienvenida a mi súper maravilloso Proyecto final</h1>
<button id="continuar" class="button" style="vertical-align:middle"><span>Next </span></button><br>
</div>`;
document.body.append(div);
primerEtapa.classList.add("primerEtapa");
/* Bienvenida */

/* Pedir Nombre */
let continuar = document.getElementById("continuar");
continuar.addEventListener("click", () => {
    let inicio = document.createElement("div");
    div.innerHTML = `<div class="container-fluid text-center pedirNombre">
    <h1>Elijamos el nombre</h1>
    <p id="hola">Espero estés preparada/o para la historia que vas a vivir en este momento, lleno de juegos y diversión, te pido que elijas un nombre épico para el protagonista de esta historia</p>
    <form id="formularioUno">
    <input type="text" id="nombre">
    <button id="continuarSegundo" class="button" style="vertical-align:middle"><span>Next </span></button>
    </form>
    <img src="./Img/istockphoto-1308121289-612x612.jpg" class="rounded" alt="">
    </div>`
    /* Pedir Nombre */

    /* Pre-Comienzo de la historia */
    let formularioUno = document.getElementById("formularioUno");
    formularioUno.addEventListener("submit", (e) => {
        let nombre = document.getElementById("nombre").value
        e.preventDefault();
        let inputs = e.target.children;
        let bienvenida = document.createElement("div");
        div.innerHTML = `<div class="container-fluid text-center pedirNombre">
        <h1>
        Perfecto usaremos ${nombre} como protagonista de esta historia en cuanto clickees donde dice next comienza!
        </h1>
        <img src="./Img/istockphoto-120094247-612x612.jpg" class="rounded" alt=""><br>
        <button id="continuarTercero" class="button" style="vertical-align:middle"><span>Next </span></button>
        </div>`
        /* Pre-comienzo de la historia */

        /* Comienzo de la historia */
        let continuarTercero = document.getElementById("continuarTercero");
        continuarTercero.addEventListener("click", () => {
            let primerAcertijo = document.createElement("div");
            div.innerHTML = `<div class="container-fluid text-center pedirNombre">
            <h1>Entrada al Templo</h1>
            <img src="./Img/templo.avif" class="rounded" alt="templo">
    <h2>
    ${nombre}, un cazador de tesoros súper conocido, estaba en su búsqueda mas importante el "el Necronomichon", claro sabía que su recorrido no iba a ser fácil pues llevaba buscándolo hace ya 7 años.
    Investigo ciertos rumores donde saco la conclusión de que estaría en lo más profundo del bosque "Woo", con las esperanzas bajas después de 2 horas buscando, ${nombre} quedo en shock, frente a sus ojos estaba el Templo del gran Lych, creador del Necronomichon, sin más rodeos quiso entrar pero como era de esperarse en la puerta principal habían unas letras que podías ordenar: "emteru" ${nombre} rápidamente pensó -Es un anagrama, tengo que ordenar las letras para encontrar la palabra pero, ¿cuál será? ${nombre} sabía que si se equivocaba algo malo podría pasar...
    </h2>
    <form id="formularioDos" class="inputs">
    <input type="text" id="anagrama">
    <button id="continuar" class="button" style="vertical-align:middle"><span>Next </span></button>
    </form>
    </div>`
            /* comienzo de la historia */

            /* primer acertijo */
            let formularioDos = document.getElementById("formularioDos");
            formularioDos.addEventListener("submit", (e) => {
                e.preventDefault();
                let inputs = e.target.children;
                let anagrama = document.getElementById("anagrama").value

                if (anagrama === "muerte" || anagrama === "Muerte") {
                    let acertijo = document.createElement("div");
                    Swal.fire(
                        'Bien!',
                        'Resolviste la primera prueba!',
                        'success'
                    );
                    div.innerHTML = `<div class="container-fluid text-center pedirNombre">
                    <h1>El templo</h1>
                    <img src="./Img/temploabierto.avif" class="rounded" alt="temploabierto">
            <h2>Entonces la puerta se comenzó a abrir, BIEN! grito ${nombre} no lo podía creer el sueño de su vida estaba por cumplirse solo debía entrar y lo hizo, se encontró con el templo bastante vacío, no tenía joyas y oro a su alrededor como lo había imaginado, unas ruinas al borde del derrumbe con mucho polvo y telarañas, pero en el medio estaba el altar, ese increíble y hermoso altar que seguro tenia lo que más estaba buscando pero en el medio decía "Hay algo que aunque es completamente tuyo, las demás personas lo utilizan más que vos, ¿qué es?" ${nombre} se alteró un poco porque no era muy bueno en los acertijos pero iba a dar su mejor esfuerzo, sabía que debía tener cuidado porque un error podía ser fatal...</h2>
            <form id="formularioTres" class="inputs">
            <input type="text" id="miNombre">
            <button id="continuar" class="button" style="vertical-align:middle"><span>Next </span></button>
    </form>
    </div>`;
                } else {
                    let acertijoError = document.createElement("div");
                    Swal.fire({
                        icon: 'error',
                        title: 'Muerte',
                        text: 'Parece que no era correcto...',
                        footer: ' no uses para nada las mayusculas'
                    });

                    div.innerHTML = `<div class="pedirNombre container-fluid text-center">
                    <h1>Muerte</h1>
                    <img src="./Img/pinchos.png" alt="pinchos">
    <h2>${nombre} asustado, vio como la puerta no se movió pero el piso empezó a temblar y sin antes poder reaccionar cayó en un pozo lleno de pinchos, clavos y lanzas ${nombre} no pudo sobrevivir a la primera trampa del templo...</h2>
    <button id="reiniciar" class="button" style="vertical-align:middle"><span>Reiniciar </span></button>
    </div>`;
                    let reiniciar = document.getElementById("reiniciar");
                    reiniciar.addEventListener("click", () => {
                        location.reload();
                    });
                };
                /* primero acertijo */

                /* segundo acertijo */
                let formularioTres = document.getElementById("formularioTres");
                formularioTres.addEventListener("submit", (e) => {
                    e.preventDefault();
                    let inputs = e.target.children;
                    let miNombre = document.getElementById("miNombre").value;
                    Swal.fire(
                        'Bien!',
                        'Resolviste la segunda prueba!',
                        'success'
                    );
                    if (miNombre === "mi nombre" || miNombre === "tu nombre" || miNombre === "el nombre" || miNombre === "nombre") {
                        let acertijoDos = document.createElement("div");
                        div.innerHTML = `<div class="pedirNombre container-fluid text-center">
                        <h1>La caja</h1>
                        <img src="./Img/1000_F_553229685_EvgqygNyGQUe0wAPZm2PJe6ATIuMpeUq.jpg" class="rounded" alt="">
        <h2>La caja comienza abrirse, los ojos de ${nombre} se llenan de lágrimas por la emoción hasta que se empiezan a llenar de confusión al ver un anillo con un rubí en el centro y una nota que dice "más adeLante hAllaras dos baldosas, oPRime razonando bIen tus pensaMiEntos o la MueRte encontrAras" ${nombre} confundido decide agarrar la nota y seguir adelante pero lo que no sabe es que hacer con ese anillo...</h2>
        <button id="tomar" class="button" style="vertical-align:middle"><span>Tomarlo</span></button>
        <button id="noTomar" class="button" style="vertical-align:middle"><span>Dejarlo </span></button>
        </div>`;
                    } else {
                        let acertijoErrorDos = document.createElement("div");
                        Swal.fire({
                            icon: 'error',
                            title: 'Muerte',
                            text: 'Parece que no era correcto...',
                            footer: ' no uses para nada las mayusculas'
                        });
                        div.innerHTML = `<div class="pedirNombre container-fluid text-center">
                        <h1>Muerte</h1>
                        <img src="./Img/word-image-29.jpeg" class="rounded" alt="" style="width: 450px; height: 500px;">
        <h2>La caja no se abre y la puerta del templo se cierra dejándote adentro para siempre sin escapatoria esperando tu inminente muerte...</h2>
        <button id="reiniciarDos" class="button" style="vertical-align:middle"><span>Reiniciar </span></button>
    </div>`;
                        let reiniciarDos = document.getElementById("reiniciarDos");
                        reiniciarDos.addEventListener("click", () => {
                            location.reload();
                        });
                    };
                    /* segundo acertijo */


                    /* Tomar el anillo */
                    let tomar = document.getElementById("tomar");
                    tomar.addEventListener("click", () => {
                        let muerteDos = document.createElement("div");
                        Swal.fire({
                            icon: 'error',
                            title: 'Muerte',
                            text: 'flaco te podes dejar de morir?',
                        });
                        div.innerHTML = `<div class="pedirNombre container-fluid text-center">
                    <h1>Muerte</h1>
        <img src="./Img/word-image-30.jpeg" alt="agua">
<h2>La codicia de ${nombre} lo superó y tomó el anillo para avanzar, de pronto todo el templo se cerró y comenzó a llenarse de agua y monstruos marinos que nunca antes había visto e imaginado, sin tener lugar a donde escapar ${nombre} sufrió su destino siendo alimento para esas bestias...</h2>
<button id="reiniciarTres" class="button" style="vertical-align:middle"><span>Reiniciar </span></button>
</div>`;
                        let reiniciarTres = document.getElementById("reiniciarTres");
                        reiniciarTres.addEventListener("click", () => {
                            location.reload();
                        });
                    });
                    /* tomar el anillo */

                    /* sin el anillo */
                    let noTomar = document.getElementById("noTomar");
                    noTomar.addEventListener("click", () => {
                        let sinAnillo = document.createElement("div");
                        Swal.fire(
                            'Bien!',
                            'Resolviste la tercer prueba!',
                            'success'
                        );
                        div.innerHTML = `<div class="pedirNombre container-fluid text-center">
                                        <h1>Las placas</h1>
                                        <img src="./Img/337toh.jpg" class="rounded" alt="">
                                        <h2>${nombre} decide avanzar sin agarrar el anillo ya que no es su objetivo, misteriosamente después de haber abierto la caja una puerta se refleja en el camino, arriba de la puerta habia una cabeza con dos cuernos mirando, ${nombre} no se sentia muy comodo, cuando se acerca e intenta abrir la dicha puerta no se abre y la cabeza se gira mostrando dos placas. ¿cual debería presionar?</h2>
                                        <button id="final" class="button" style="vertical-align:middle"><span>Primera </span></button>
                                        <button id="muerteTres" class="button" style="vertical-align:middle"><span>Segunda </span></button>
                                    </div>`
                        /* sin el anillo */

                        /* Segunda placa */
                        let muerteTres = document.getElementById("muerteTres");
                        muerteTres.addEventListener("click", () => {
                            let segundaPlaca = document.createElement("div");
                            Swal.fire({
                                icon: 'error',
                                title: 'Muerte',
                                text: 'jajaj dios mio...',
                            });
                            div.innerHTML = `<div class="pedirNombre container-fluid text-center">
                    <h1>Muerte</h1>
                    <img src="./Img/dungeon_trap_falling_rocks.jpg" alt="">
                    <h2> ${nombre} su corazonada dice que debe  presionar la segunda placa, al hacerlo la puerta no se abre y el piso comienza a temblar, ${nombre} salta hacia atrás por si alguna trampa se activa en el suelo pero a su sorpresa lo que comienza a pasar es que el templo comienza a derrumbarse, una roca dos veces su tamaño cae encima de ${nombre} nunca más volvimos a saber de el...</h2>
                    <button id="reiniciarCuatro" class="button" style="vertical-align:middle"><span>Reiniciar </span></button>
                </div>`;
                            let reiniciarCuatro = document.getElementById("reiniciarCuatro");
                            reiniciarCuatro.addEventListener("click", () => {
                                location.reload();
                            });
                        });
                        /* segunda placa */

                        /* primer placa */
                        let final = document.getElementById("final");
                        final.addEventListener("click", () => {
                            let fin = document.createElement("div");
                            div.innerHTML = `<div class="pedirNombre container-fluid text-center">
                        <h1>Final</h1>
                        <img src="./Img/undead guardian.jpg" class="rounded" alt="" style="width: 450px; height: 700px;">
                        <h2>La puerta se abre y ${nombre} llorando desconsoladamente ve en el medio de la habitación el "Necronomichon" en un altar, sin pensarlo va corriendo y lo agarra pero antes que lo pueda abrir para leer su contenido de su derecha aparece un guardián con una espada en una mano y un escudo en otra, el guardián le dice "es admirable que hayas podido llegar hasta este lugar intacto pero para poder quedarte con el libro tendrás que salir con vida" ${nombre} asustado abre el libro y una estela negra lo envuelve, sus ojos comienzan a cambiar de color y todo su cuerpo se llena de una energía extraña... ¿podrá ${nombre} salir con vida del templo?</h2>
                        <button id="felicitaciones" class="button" style="vertical-align:middle"><span>Final </span></button>
                    </div>`
                            /* primer placa */

                            /* alerta de final */
                            let felicitaciones = document.getElementById("felicitaciones");
                            felicitaciones.addEventListener("click", () => {
                                Swal.fire(
                                    'Terminaste la historia!',
                                    'Espero lo hayas disfrutado tanto como yo!',
                                    'success'
                                );
                                /* alerta de final */

                            });
                        });
                    });
                });
            });
        });
    });
});