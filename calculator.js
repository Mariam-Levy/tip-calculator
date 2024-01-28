
//Calcula la propina correcta y el coste total de la factura por persona.

document.addEventListener('DOMContentLoaded', initProgram );

function initProgram() {

//input-bill
let bill = document.getElementById('bill');
let billNumber = parseInt(bill.value);

//input-people
let people = document.getElementById('people');
let peopleNumber;

//input-custom
let customTip = document.getElementById('custom-tip');

//todos los botones
let buttons = document.querySelectorAll('button');

// resultado de tip amount
let resultAmount = document.querySelector('.display__number-amount');

//resultado total x persona
let resultTotal = document.querySelector('.display__number-total');

const reset = document.getElementById('reset');

const labelZero = document.getElementById('label-zero');

const inputBill = document.getElementById('input-bill');
const inputCustom = document.getElementById('input-custom');

const inputPeople = document.getElementById('input-people');

//Select Tip %
let selectTip = 5;




//--------- capturar los datos de los input ---------
//1.- el valor de la cuenta (bill)
bill.addEventListener('input', () => {
    billNumber = parseFloat(bill.value);
    console.log(billNumber);

    if(billNumber === 0 || Math.sign(billNumber) === -1 ) {
        inputBill.style.borderColor = '#E17457';
    } else {
        inputBill.style.borderColor = '#26C2AE';
        calculate();
    }
});


//2.a- Valor de los botones
//Itera sobre cada boton
buttons.forEach(button => {
    //añade un evento click sobre cada boton
    button.addEventListener('click', function(e) {

        //Itera nuevamente sobre cada boton para eliminar la clase "select-tip--active"
        buttons.forEach(element => element.classList.remove('button--active'));

        //Añade la clase "button--active" al boton que recibio el evento click
        button.classList.add('button--active');

        //Obtiene el contenido del boton clickeado
        selectTip = parseInt(e.target.innerText.slice(0, -1));
        console.log(selectTip);

        removeCustom();

        calculate();
    })
})


//2.b- Custom
customTip.addEventListener('click', () => {
    removeClass(); //funcion que remueve la clase de los botones al darle click al input "Custom"
})
customTip.addEventListener('input', function() {
    selectTip = parseFloat(customTip.value);
    console.log(selectTip);

    //isNaN determina si un valor es NaN(Not-a-Number)
    if(isNaN(selectTip) || Math.sign(selectTip) === -1 || selectTip > 100) {
        inputCustom.style.borderColor = '#E17457';
    } else {
        inputCustom.style.borderColor = '#26C2AE';
        calculate();
    }
})


//3.- numero de personas
people.addEventListener('input', () => {
    peopleNumber = parseFloat(people.value);
    console.log(peopleNumber);


    if(peopleNumber == 0 || isNaN(peopleNumber) || Math.sign(peopleNumber) === -1) {
        inputPeople.style.borderColor = '#E17457';
        labelZero.style.display = 'block';
    } else {
        labelZero.style.display = 'none';
        inputPeople.style.borderColor = '#26C2AE';
        calculate();
    }

});



// ---- Boton para reiniciar los valores de todos los input ----
reset.addEventListener('click', () => {
    bill.value = null;
    billNumber = 0;
    people.value = null;
    peopleNumber = 0;
    customTip.value = null;

    bill.style.borderColor = 'transparent';
    inputCustom.style.borderColor = 'transparent';
    inputPeople.style.borderColor = 'transparent';
    labelZero.style.display = 'none';

    resultAmount.innerText = '$0.00';
    resultTotal.innerText = '$0.00';
})



// ------- FUNCIONES ---------------

//Funcion para remover la clase "active" de los botones
function removeClass() {
    buttons.forEach(element => element.classList.remove('button--active'));
    customTip.value = '';
}

function removeCustom() {
    customTip.value = '';
}


function calculate() {
    if (billNumber > 0 && selectTip > 0 && peopleNumber > 0) {
        // Calculo de "tip amount"
        resultAmount.innerText = ((billNumber * selectTip / 100) / peopleNumber).toFixed(2);

        // Calculo de "total"
        resultTotal.innerText = (((billNumber * selectTip / 100) + billNumber) / peopleNumber).toFixed(2);
    } else {
        // Si alguno de los campos necesarios está vacío, establecer los resultados a 0.00
        resultAmount.innerText = '0.00';
        resultTotal.innerText = '0.00';
    }
}


}
