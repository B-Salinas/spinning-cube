eimport * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

if (!WebGL.isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("contianer").appendChild(warning);
}

//

let screen = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const FOV = 100;
const ASPECT = screen?.width / screen?.height;
const NEAR = 0.1; // default is 0.1
const FAR = 1000; // default is 2000

//

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
const renderer = new THREE.WebGLRenderer();

//

renderer.setSize(screen?.width, screen?.height);
document.body.appendChild(renderer.domElement);

//

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0x00bfff,
  wireframe: true,
});

const torus = new THREE.Mesh(geometry, material);

//

scene.add(torus);

camera.position.z = 25;

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
