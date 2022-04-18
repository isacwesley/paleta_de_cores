let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
let paleta = document.querySelector('input');


pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);
let input = false;

tela.onmousemove = (evento) => {
    if (input) {
        let x = evento.pageX - tela.offsetLeft;
        let y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = paleta.value;
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
}

tela.onmouseup = () => {
    input = false;
}

tela.onmousedown = (evento) => {
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;
    pincel.fillStyle = paleta.value;
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
    input = true;
}