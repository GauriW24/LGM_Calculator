let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C'://cut entered number
                display.innerText = '';
                break;
            case '='://giv the result of calculation
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error:please give valid input" //if enter any invalid i/p 
                }
                break;
            case '←'://to delete element from right
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


