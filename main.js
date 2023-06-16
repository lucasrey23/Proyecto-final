/* Bienvenida */
const div = document.createElement("div");
div.innerHTML = `<div id="primerEtapa" class="primerEtapa container-fluid text-center">
<h1>Te doy la bienvenida a mi súper maravilloso Proyecto final</h1>
<button id="continuar" class="button" style="vertical-align:middle"><span>Next </span></button><br>
</div>`;
document.body.append(div);
const primerEtapa = document.getElementById("primerEtapa");
primerEtapa.classList.add("primerEtapa");
/* Bienvenida */

/* Pedir Nombre */
const continuar = document.getElementById("continuar");
continuar.addEventListener("click", () => {
            const inicio = document.createElement("div");
            div.innerHTML = `<div class="container-fluid text-center pedirNombre">
    <h1>Elijamos el nombre</h1>
    <p id="hola">Espero estés preparada/o para la historia que vas a vivir en este momento, lleno de juegos y diversión, te pido que elijas un nombre épico para el protagonista de esta historia</p>
    <form id="formularioUno">
    <input type="text" id="nombre">
    <button id="continuarSegundo" class="button" style="vertical-align:middle"><span>Next </span></button>
    </form>
    <img src="./img/istockphoto-1308121289-612x612.jpg" class="rounded" alt="">
    </div>`;
            /* Pedir Nombre */

            /* Storage */
            let login;
            let storage = sessionStorage.getItem("usuario");

            if (storage) {
                login = storage;
                Swal.fire(`Otra vez por aca ${login}? que paso?`);
            } else {
                let nombreApellido = prompt("ingrese su nombre para recordarlo porfavor");
                sessionStorage.setItem("usuario", nombreApellido);
                Swal.fire(`Bienvenido seas compatriota ${nombreApellido}`);
            };
            /* Storage */

            /* Pre-Comienzo de la historia */
            const formularioUno = document.getElementById("formularioUno");
            formularioUno.addEventListener("submit", (e) => {
                const nombre = document.getElementById("nombre").value;
                e.preventDefault();
                const inputs = e.target.children;
                const bienvenida = document.createElement("div");
                div.innerHTML = `<div class="container-fluid text-center pedirNombre">
        <h1>
        Perfecto usaremos ${nombre} como protagonista de esta historia en cuanto clickees donde dice next comienza!
        </h1>
        <img src="./img/istockphoto-120094247-612x612.jpg" class="rounded" alt=""><br>
        <button id="continuarTercero" class="button" style="vertical-align:middle"><span>Next </span></button>
        </div>`;
                /* Pre-comienzo de la historia */

                /* Comienzo de la historia */
                const continuarTercero = document.getElementById("continuarTercero");
                continuarTercero.addEventListener("click", () => {
                    const primerAcertijo = document.createElement("div");
                    div.innerHTML = `<div class="container-fluid text-center pedirNombre">
            <h1>Entrada al Templo</h1>
            <img src="./img/templo.avif" class="rounded" alt="templo">
            <h2>
            ${nombre}, un cazador de tesoros súper conocido, estaba en su búsqueda mas importante "el Necronomichon", claro sabía que su recorrido no iba a ser fácil pues llevaba buscándolo hace ya 7 años.
            Investigo ciertos rumores donde saco la conclusión de que estaría en lo más profundo del bosque "Woo", con las esperanzas bajas después de 2 horas buscando, ${nombre} quedo en shock, frente a sus ojos estaba el Templo del gran Lych, creador del Necronomichon, sin más rodeos quiso entrar pero como era de esperarse en la puerta principal habían unas letras que podías ordenar: "emteru" ${nombre} rápidamente pensó -Es un anagrama, tengo que ordenar las letras para encontrar la palabra pero, ¿cuál será? ${nombre} sabía que si se equivocaba algo malo podría pasar...
            </h2>
            <form id="formularioDos" class="inputs">
            <input type="text" id="anagrama">
            <button id="continuar" class="button" style="vertical-align:middle"><span>Next </span></button>
            </form>
            </div>`;
                    fetch('./data.json')
                        .then(response => response.json())
                        .then(data => {
                            const primerItem = data.find(item => item.pista);
                            if (primerItem) {
                                setTimeout(() => {
                                    swal.fire(primerItem.pista);
                                }, 2000);
                            } else {
                                console.log('No se encontró ningún item con ID en el archivo JSON.');
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                    /* comienzo de la historia */

                    /* primer acertijo */
                    const formularioDos = document.getElementById("formularioDos");
                    formularioDos.addEventListener("submit", (e) => {
                        e.preventDefault();
                        const inputs = e.target.children;
                        const anagrama = document.getElementById("anagrama").value;

                        const acertijo = (anagrama === "muerte" || anagrama === "Muerte") ?
                            (() => {
                                const acertijo = document.createElement("div");
                                Swal.fire(
                                    '¡Bien!',
                                    '¡Resolviste la primera prueba!',
                                    'success'
                                );
                                div.innerHTML = `<div class="container-fluid text-center pedirNombre">
            <h1>El templo</h1>
            <img src="./img/temploabierto.avif" class="rounded" alt="temploabierto">
            <h2>Entonces la puerta se comenzó a abrir, ¡BIEN! gritó ${nombre}, no lo podía creer, el sueño de su vida estaba por cumplirse. Solo debía entrar, y lo hizo. Se encontró con el templo bastante vacío, no tenía joyas ni oro a su alrededor como lo había imaginado. Había ruinas al borde del derrumbe, con mucho polvo y telarañas, pero en el medio estaba el altar. Ese increíble y hermoso altar seguramente tenía lo que más estaba buscando. Sin embargo, en el medio decía: "Hay algo que, aunque es completamente tuyo, las demás personas lo utilizan más que tú. ¿Qué es?" ${nombre} se alteró un poco porque no era muy bueno en los acertijos, pero iba a dar su mejor esfuerzo. Sabía que debía tener cuidado, porque un error podía ser fatal...</h2>
            <form id="formularioTres" class="inputs">
                <input type="text" id="miNombre">
                <button id="continuar" class="button" style="vertical-align:middle"><span>Next </span></button>
            </form>
        </div>`;
                                fetch('./data.json')
                                    .then(response => response.json())
                                    .then(data => {
                                        if (data.length >= 2) { 
                                            const segundoItem = data[1]; 
                                            setTimeout(() => {
                                                swal.fire(segundoItem.pista); 
                                            }, 40000);
                                        } else {
                                            console.log('no deberia haber ningun error si sale esto estamos en problemas houston');
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    });

                                })() :
                                (() => {
                                    const acertijoError = document.createElement("div");
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Muerte',
                                        text: 'Parece que no era correcto...',
                                        footer: 'No uses mayúsculas'
                                    });

                                    div.innerHTML = `<div class="pedirNombre container-fluid text-center">
            <h1>Muerte</h1>
            <img src="./img/pinchos.png" alt="pinchos">
            <h2>${nombre} asustado, vio cómo la puerta no se movió, pero el piso empezó a temblar y, sin antes poder reaccionar, cayó en un pozo lleno de pinchos, clavos y lanzas. ${nombre} no pudo sobrevivir a la primera trampa del templo...</h2>
            <button id="reiniciar" class="button" style="vertical-align:middle"><span>Reiniciar </span></button>
        </div>`;

                                    const reiniciar = document.getElementById("reiniciar");
                                    reiniciar.addEventListener("click", () => {
                                        location.reload();
                                    });
                                })();
                                /* primero acertijo */
                                /* segundo acertijo */
                                const formularioTres = document.getElementById("formularioTres");
                                formularioTres.addEventListener("submit", (e) => {
                                    e.preventDefault();
                                    const inputs = e.target.children;
                                    const miNombre = document.getElementById("miNombre").value;

                                    Swal.fire(
                                        '¡Bien!',
                                        '¡Resolviste la segunda prueba!',
                                        'success'
                                    );

                                    if (miNombre === "mi nombre" || miNombre === "tu nombre" || miNombre === "el nombre" || miNombre === "nombre") {
                                        const acertijoDos = document.createElement("div");
                                        div.innerHTML = `<div class="pedirNombre container-fluid text-center">
            <h1>La caja</h1>
            <img src="./img/1000_F_553229685_EvgqygNyGQUe0wAPZm2PJe6ATIuMpeUq.jpg" class="rounded" alt="">
            <h2>La caja comienza a abrirse. Los ojos de ${nombre} se llenan de lágrimas por la emoción, hasta que se llenan de confusión al ver un anillo con un rubí en el centro y una nota que dice: "Más adeLAnte hallarás dos baldosas. oPRIME RAzonando bien tus pensamientos o la muerte encontrarás". ${nombre} confundido decide agarrar la nota y seguir adelante, pero lo que no sabe es qué hacer con ese anillo...</h2>
            <button id="tomar" class="button" style="vertical-align:middle"><span>Tomarlo</span></button>
            <button id="noTomar" class="button" style="vertical-align:middle"><span>Dejarlo</span></button>
        </div>`;
                                    } else {
                                        const acertijoErrorDos = document.createElement("div");
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Muerte',
                                            text: 'Parece que no era correcto...',
                                            footer: 'No uses mayúsculas'
                                        });
                                        div.innerHTML = `<div class="pedirNombre container-fluid text-center">
            <h1>Muerte</h1>
            <img src="./img/word-image-29.jpeg" class="rounded" alt="" style="width: 450px; height: 500px;">
            <h2>La caja no se abre y la puerta del templo se cierra dejándote adentro para siempre sin escapatoria, esperando tu inminente muerte...</h2>
            <button id="reiniciarDos" class="button" style="vertical-align:middle"><span>Reiniciar</span></button>
        </div>`;
                                        const reiniciarDos = document.getElementById("reiniciarDos");
                                        reiniciarDos.addEventListener("click", () => {
                                            location.reload();
                                        });
                                    }
                                    /* segundo acertijo */

                                    /* Tomar el anillo */
                                    const tomar = document.getElementById("tomar");
                                    tomar.addEventListener("click", () => {
                                        const muerteDos = document.createElement("div");
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Muerte',
                                            text: '¡Flaco, ¿te puedes dejar de morir?!',
                                        });
                                        div.innerHTML = `<div class="pedirNombre container-fluid text-center">
        <h1>Muerte</h1>
        <img src="./img/word-image-30.jpeg" alt="agua">
        <h2>La codicia de ${nombre} lo superó y tomó el anillo para avanzar. De pronto, todo el templo se cerró y comenzó a llenarse de agua y monstruos marinos que nunca antes había visto e imaginado. Sin tener lugar a donde escapar, ${nombre} sufrió su destino siendo alimento para esas bestias...</h2>
        <button id="reiniciarTres" class="button" style="vertical-align:middle"><span>Reiniciar</span></button>
    </div>`;
                                        const reiniciarTres = document.getElementById("reiniciarTres");
                                        reiniciarTres.addEventListener("click", () => {
                                            location.reload();
                                        });
                                    });
                                    /* tomar el anillo */

                                    /* sin el anillo */
                                    const noTomar = document.getElementById("noTomar");
                                    noTomar.addEventListener("click", () => {
                                        const sinAnillo = document.createElement("div");
                                        Swal.fire(
                                            '¡Bien!',
                                            '¡Resolviste la tercer prueba!',
                                            'success'
                                        );
                                        div.innerHTML = `<div class="pedirNombre container-fluid text-center">
        <h1>Las placas</h1>
        <img src="./img/337toh.jpg" class="rounded" alt="">
        <h2>${nombre} decide avanzar sin agarrar el anillo ya que no es su objetivo. Misteriosamente, después de haber abierto la caja, una puerta se refleja en el camino. Arriba de la puerta había una cabeza con dos cuernos mirando. ${nombre} no se sentía muy cómodo. Cuando se acerca e intenta abrir la dicha puerta, no se abre y la cabeza se gira mostrando dos placas. ¿Cuál debería presionar?</h2>
        <button id="final" class="button" style="vertical-align:middle"><span>Primera</span></button>
        <button id="muerteTres" class="button" style="vertical-align:middle"><span>Segunda</span></button>
        <button id="muerteCuatro" class="button" style="vertical-align:middle"><span>Tercera</span></button>
        <button id="muerteCinco" class="button" style="vertical-align:middle"><span>Cuarta</span></button>
    </div>`;
                                        /* sin el anillo */
                                        /* Segunda placa */
                                        const muerteTres = document.getElementById("muerteTres");
                                        muerteTres.addEventListener("click", () => {
                                            const segundaPlaca = document.createElement("div");
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Muerte',
                                                text: '¡Jajaj, Dios mío...!',
                                            });
                                            div.innerHTML = `<div class="pedirNombre container-fluid text-center">
        <h1>Muerte</h1>
        <img src="./img/dungeon_trap_falling_rocks.jpg" alt="">
        <h2>${nombre} su corazonada dice que debe presionar la segunda placa. Al hacerlo, la puerta no se abre y el piso comienza a temblar. ${nombre} salta hacia atrás por si alguna trampa se activa en el suelo, pero para su sorpresa, lo que comienza a pasar es que el templo comienza a derrumbarse. Una roca dos veces su tamaño cae encima de ${nombre} y nunca más volvimos a saber de él...</h2>
        <button id="reiniciarCuatro" class="button" style="vertical-align:middle"><span>Reiniciar</span></button>
    </div>`;
                                            const reiniciarCuatro = document.getElementById("reiniciarCuatro");
                                            reiniciarCuatro.addEventListener("click", () => {
                                                location.reload();
                                            });
                                        });
                                        /* segunda placa */

                                        /* tercera placa */
                                        const muerteCuatro = document.getElementById("muerteCuatro");
                                        muerteCuatro.addEventListener("click", () => {
                                            const segundaPlaca = document.createElement("div");
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Muerte',
                                                text: '¡Jajaj, Dios mío...!',
                                            });
                                            div.innerHTML = `<div class="pedirNombre container-fluid text-center">
        <h1>Muerte</h1>
        <img src="./img/dungeon_trap_falling_rocks.jpg" alt="">
        <h2>${nombre} su corazonada dice que debe presionar la segunda placa. Al hacerlo, la puerta no se abre y el piso comienza a temblar. ${nombre} salta hacia atrás por si alguna trampa se activa en el suelo, pero para su sorpresa, lo que comienza a pasar es que el templo comienza a derrumbarse. Una roca dos veces su tamaño cae encima de ${nombre} y nunca más volvimos a saber de él...</h2>
        <button id="reiniciarCuatro" class="button" style="vertical-align:middle"><span>Reiniciar</span></button>
    </div>`;
                                            const reiniciarCuatro = document.getElementById("reiniciarCuatro");
                                            reiniciarCuatro.addEventListener("click", () => {
                                                location.reload();
                                            });
                                        });
                                        /* tercera placa */
                                        
                                        /* cuarta placa */
                                        const muerteCinco = document.getElementById("muerteCinco");
                                        muerteCinco.addEventListener("click", () => {
                                            const segundaPlaca = document.createElement("div");
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Muerte',
                                                text: '¡Jajaj, Dios mío...!',
                                            });
                                            div.innerHTML = `<div class="pedirNombre container-fluid text-center">
        <h1>Muerte</h1>
        <img src="./img/dungeon_trap_falling_rocks.jpg" alt="">
        <h2>${nombre} su corazonada dice que debe presionar la segunda placa. Al hacerlo, la puerta no se abre y el piso comienza a temblar. ${nombre} salta hacia atrás por si alguna trampa se activa en el suelo, pero para su sorpresa, lo que comienza a pasar es que el templo comienza a derrumbarse. Una roca dos veces su tamaño cae encima de ${nombre} y nunca más volvimos a saber de él...</h2>
        <button id="reiniciarCuatro" class="button" style="vertical-align:middle"><span>Reiniciar</span></button>
    </div>`;
                                            const reiniciarCuatro = document.getElementById("reiniciarCuatro");
                                            reiniciarCuatro.addEventListener("click", () => {
                                                location.reload();
                                            });
                                        });
                                        /* cuarta placa */

                                        /* primer placa */
                                        const final = document.getElementById("final");
                                        final.addEventListener("click", () => {
                                            const fin = document.createElement("div");
                                            div.innerHTML = `<div class="pedirNombre container-fluid text-center">
        <h1>Final</h1>
        <img src="./img/undead guardian.jpg" class="rounded" alt="" style="width: 450px; height: 700px;">
        <h2>La puerta se abre y ${nombre} llorando desconsoladamente ve en el medio de la habitación el "Necronomichon" en un altar. Sin pensarlo, va corriendo y lo agarra, pero antes de que lo pueda abrir para leer su contenido, desde su derecha aparece un guardián con una espada en una mano y un escudo en otra. El guardián le dice: "Es admirable que hayas podido llegar hasta este lugar intacto, pero para poder quedarte con el libro tendrás que salir con vida". ${nombre}, asustado, abre el libro y una estela negra lo envuelve, sus ojos comienzan a cambiar de color y todo su cuerpo se llena de una energía extraña... ¿Podrá ${nombre} salir con vida del templo?</h2>
        <button id="felicitaciones" class="button" style="vertical-align:middle"><span>Final</span></button>
    </div>`;
                                            /* primer placa */
                                            /* alerta de final */
                                            const felicitaciones = document.getElementById("felicitaciones");
                                            felicitaciones.addEventListener("click", () => {
                                                Swal.fire(
                                                    '¡Terminaste la historia!',
                                                    '¡Espero que lo hayas disfrutado tanto como yo!',
                                                    'success'
                                                );
                                            });
                                            /* alerta de final */




                                        });
                                    });
                                });
                            });

                    });
                });
            });