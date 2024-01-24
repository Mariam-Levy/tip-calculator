
//Calcula la propina correcta y el coste total de la factura por persona.

/* document.addEventListener('DOMContentLoaded', initProgram ); */




/* function initProgram( ){
    
    
    const billInput = document.getElementById('bill');
    const buttons = document.querySelectorAll('.btn');
    const customTip = document.getElementById('tip');
    
    
        const Tip5 = document.getElementById('btn5');
        const Tip10 = document.getElementById('btn10');
        const Tip15 = document.getElementById('btn15');
        const Tip25 = document.getElementById('btn25');
        const Tip50 = document.getElementById('btn50');

        const listTips = [
            Tip5, Tip10, Tip15, Tip25, Tip50,
        ]


    billInput.addEventListener('input', function() {
        const billValue = parseFloat(billInput.value);

        if (!isNaN(billValue)) {
            // Verifica si el valor es un número válido
            console.log(billValue);
        } else {
            // Podrías manejar el caso en el que el valor no sea un número válido
            console.log('Ingresa un valor numérico válido');
        }
    });


    let tipsValue;

    listTips.forEach(function(button) {
        button.addEventListener('click', function() {
            const percentage = parseFloat(button.innerHTML.replace('%', ''));
            console.log('porcentaje predefinido:', percentage);
            tipsValue = percentage;

        })
        

    })



    customTip.addEventListener('input', function() {
        const customValue = parseFloat(customTip.value);

        if (!isNaN(customValue)) {
            // Verifica si el valor es un número válido
            console.log(customValue);
        } else {
            // Podrías manejar el caso en el que el valor no sea un número válido
            console.log('Ingresa un valor numérico válido');
        }
    })


} */



//input-bill
let bill = document.getElementById('bill');

//input-people
let people = document.getElementById('people');

//input-custom
let custom = document.querySelector('.input__element--custom');

//todos los botones
let buttons = document.querySelectorAll('button');

// resultado de tip amount
let resultAmount = document.querySelector('.display__number-amount');

//resultado total x persona
let resultTotal = document.querySelector('.display__number-total');

let reset = document.getElementById('reset');

const inputError = document.querySelector('.input--error');
const labelZero = document.querySelector('.label--zero');

const inputBill = document.querySelector('.input--bill');


//Select Tip %
let selectTip = 5;


//--------- capturar los datos de los input ---------
//1.- el valor de la cuenta (bill)
bill.addEventListener('input', () => {
    billNumber = parseFloat(bill.value);
    console.log(billNumber);

    if(billNumber === 0) {
        inputBill.style.borderColor = '#E17457';
    } else {
        inputBill.style.borderColor = '#26C2AE';

    }
});


//2.a- Valor de los botones
//Itera sobre cada boton
buttons.forEach( button => {
    //añade un evento click sobre cada boton
    button.addEventListener('click', function(e) {

        //Itera nuevamente sobre cada boton para eliminar la clase "button--active"
        buttons.forEach(button => button.classList.remove('button--active'));

        //Añade la clase "button--active" al boton que recibio el evento click
        button.classList.add('button--active');

        //Obtiene el contenido del boton clickeado
        selectTip = parseInt(e.target.innerText.slice(0, -1));


    })
})


//2.b- Custom
custom.addEventListener('click', () => {
    removeClass(); //funcion que remueve la clase de los botones al darle click al input "Custom"
})
custom.addEventListener('input', function() {
    selectTip = parseFloat(custom.value);
    console.log(selectTip);

    //isNaN determina si un valor es NaN(Not-a-Number)
    if(!isNaN(selectTip)) {
        /* calculate(); //si es numero, ejecuta la funcion */
    }
})


//3.- numero de personas
people.addEventListener('input', () => {
    peopleNumber = parseFloat(people.value);
    console.log(peopleNumber);


    if(peopleNumber == 0 || isNaN(peopleNumber)) {
        inputError.style.borderColor = '#E17457';
        labelZero.style.display = 'block';
    } else {
        labelZero.style.display = 'none';
        inputError.style.borderColor = '#26C2AE';
    }

});




// ---- Boton para reiniciar los valores de todos los input ----
reset.addEventListener('click', () => {
    bill.value = '';
    people.value = '';
    custom.value = '';
})








// ------- FUNCIONES ---------------

//Funcion para remover la clase "active" de los botones
function removeClass() {
    buttons.forEach(button => button.classList.remove('button--active'));
}




/* function calculate() {
    //Calculo de "tip amount"
    resultAmount.innerText = ((billNumber * selectTip / 100) / peopleNumber).toFixed(2);
    
    //Calculo de "total"
    resultTotal.innerText = (((billNumber * selectTip / 100) + billNumber) / peopleNumber).toFixed(2);
} */





