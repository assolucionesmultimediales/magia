let deathStar;

function setup() {
  createCanvas(2275, 1205, WEBGL); // Crea un canvas en 3D con p5.js

  // Define una esfera base (el "cuerpo" del ojo o Death Star)
  deathStar = csg(() => sphere(100)) // Esfera principal con radio de 80
    .subtract(() => {
      translate(-50, 40); // Mueve un "vacío" 50 unidades en X y -40 en Y
      sphere(55); // Esfera más pequeña que se resta de la principal (hueco o muesca)
    })
    .union(() => sphere(30)) // Agrega otra esfera más pequeña al diseño.
    .done(); // Finaliza la combinación de operaciones CSG.
}

function draw() {
  clear(); // Limpia el canvas cada cuadro
  noStroke(); // Quita los bordes de las formas
  lights(); // Agrega luces para un efecto tridimensional

  // Calcula la rotación para seguir el movimiento del mouse 
  let mouseXNormalized = map(mouseX, 0, width/2, -PI / 4, PI / 4); // eje X (de izquierda a derecha)
  let mouseYNormalized = map(mouseY, 0, height/2, -PI / 10, PI / 8); //eje Y (de arriba a abajo)

  // Aplica las rotaciones
  rotateX(mouseYNormalized); // El ojo sigue el movimiento vertical 
  rotateY(mouseXNormalized); // El ojo sigue el movimiento horizontal 

  // Renderiza el modelo
  model(deathStar);
}
