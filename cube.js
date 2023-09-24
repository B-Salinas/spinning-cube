import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

if (!WebGL.isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  100, // field of vision, number in degrees
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near, objects won't render if they are nearer than this
  1000 // far, objects won't render if they are farther than this
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

// // pinning everything to our html document so we can see it
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x3333ff,
  wireframe: true, // default: false
});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
scene.add(cube);
scene.add(cube);



camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
