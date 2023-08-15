// EJERCICIOS REALIZADOS EN CLASE
// SANTIAGO GONZÁLEZ AGUDELO

// EJERCICIO 1

function edad(añoNacimiento,añoActual){
    edadForm = añoActual-añoNacimiento
    console.log(`Usted nació en ${añoNacimiento} y tiene ${edadForm}`);
}
edad(2003,2023)

// EJERCICIO 2

function celsius(g){
    fahrenheit = 32 + (9*(g/5))
    console.log(`${g}º Celsius son ${fahrenheit} fahrenheit`);
}

celsius(36)

// EJERCICIO 3 


let lista1 = [2, 4, 3, 6, 9, 8, 4];
array = []


function arrayPar(lista, target) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] + lista[j] == target) {                
                array.push([lista[i], lista[j]]);
            }
        }
    }
    console.log(array);
}

arrayPar(lista1,10)



