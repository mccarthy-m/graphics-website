
/*CAMERA, SCENE SETUP
=================================*/
// Set scene size
const WIDTH = 400;
const HEIGHT = 300;

// Set camera attributes
const LEFT = WIDTH / -2;
const RIGHT = WIDTH / 2;
const TOP = HEIGHT / 2;
const BOTTOM = HEIGHT / -2;
const NEAR = 0.1;
const FAR = 10000;

// Create renderer
const renderer =
  new THREE.WebGLRenderer();

// Create camera
const camera =
  new THREE.OrthographicCamera(
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
    NEAR,
    FAR
  );

// Create scene
const scene =
  new THREE.Scene();

// Add camera to scene
scene.add(camera);

// Start renderer
renderer.setSize(WIDTH, HEIGHT);

// Attach the renderer-supplied DOM element
document.querySelector('#graphics-window').appendChild(renderer.domElement);



createPoint(
  50,
  50,
  0xCC0000
);


createLine(
  -10,
  0,
  0,
  10,
  0xCC0000
);



// Draw!

function update() {
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);

