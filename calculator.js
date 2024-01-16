//Calcula la propina correcta y el coste total de la factura por persona.

document.addEventListener('DOMContentLoaded', initProgram );




function initProgram( ){
    
    
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


}










