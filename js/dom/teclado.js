const d = document;
let x = 0,
 y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    //console.log(e.keyCode);
    //console.log(e.key);
    //console.log(limitsBall,limitsStage);

    //const move(direction) => {};

    switch (e.keyCode) {
        case 97:
            //move("left");
            if(limitsBall.left>limitsStage.left) {
                e.preventDefault();
                x--;
            } 
            break;
        case 119:
            //move("up");
            if(limitsBall.top>limitsStage.top) {
                e.preventDefault();
                y--;
            } 
                break; 
        case 100:
            //move("rigth");
            if(limitsBall.right<limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 115:
            //move("down");
            if(limitsBall.bottom<limitsStage.bottom) {
                e.preventDefault();
                y++;
            } 
            break;   
    
        default:
            break;

        }
        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;    
}

export function shortcuts (e) {
    /* console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(e); */

    if (e.key === "a" && e.altKey) {
        alert("Has lanzado una alerta con el Teclado");
    }

    if (e.key === "c" && e.altKey) {
        confirm("Has lanzado una confirmacion con el Teclado");
    }

    if (e.key === "p" && e.altKey) {
        prompt("Has lanzado un aviso con el Teclado");
    }
}