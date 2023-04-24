function setup(){
    createCanvas(windowWidth, windowHeight);
    x = Math.round(windowWidth / 4);
    y = Math.round(windowHeight / 2);
    r = 150;
    circ1 = new circulo(x, y, r, "pp");
    circ2 = new circulo(2*x, y, r, "dda");
    circ3 = new circulo(3*x, y, r, "bres");
    puntospp = [];
    puntosdda = [];
    puntosbres = [];
}


function draw(){
    background(220);
    circ1.drawPuntos();
    circ2.drawPuntos();
    circ3.drawPuntos();

    stroke(0);
    textSize(20);
    text("Punto pendiente", x - 60, y + 200);
    text("DDA", 2*x - 20, y + 200);
    text("Bresenham", 3*x - 50, y + 200);

    drawPuntos();
}

function cortar(){
    slices = parseInt(document.getElementById("number").value);
    document.getElementById("m").innerHTML = Math.cos(2 * Math.PI / slices);
    puntospp = circ1.sacarLineas(slices);
    puntosdda = circ2.sacarLineas(slices);
    puntosbres = circ3.sacarLineas(slices);
}

function drawPuntos(){
    for(let punto of puntospp){
        stroke(255, 0, 0);
        punto.draw();
    }
    for(let punto of puntosdda){
        stroke(0, 150, 0);
        punto.draw();
    }
    for(let punto of puntosbres){
        stroke(0, 0, 255);
        punto.draw();
    }
}

