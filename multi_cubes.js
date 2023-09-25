import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

if (!WebGL.isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}

//

let screen_width = window.innerWidth;
let screen_height = window.innerHeight;

const FOV = 100;
const ASPECT = screen_width / screen_height; // default is 1
const NEAR = 0.1; // default is 0.1
const FAR = 1000; // default is 2000

//

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
const renderer = new THREE.WebGLRenderer();

//

renderer.setSize(screen_width, screen_height);
document.body.appendChild(renderer.domElement);

//

// creating a cube class where I am able to set the size might be a better idea
// const xs_cube = {
//   geometry,
//   material,
//   x_rotation,
//   y_rotation,
//   z_rotation,
// };

// const sm_sube = {
//   geometry,
//   material,
//   x_rotation,
//   y_rotation,
//   z_rotation,
// };

// const md_cube = {
//   geometry,
//   material,
//   x_rotation,
//   y_rotation,
//   z_rotation,
// };

// const lg_cube = {
//   geometry,
//   material,
//   x_rotation,
//   y_rotation,
//   z_rotation,
// };

const tiny_geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const small_geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const medium_geometry = new THREE.BoxGeometry(1, 1, 1);
const large_geometry = new THREE.BoxGeometry(1.7, 1.7, 1.7);

const tiny_material = new THREE.MeshBasicMaterial({
  color: 0xfdfefe, // white
  // wireframe: true,
});

const small_material = new THREE.MeshBasicMaterial({
  color: 0xfdfefe, // white
  wireframe: true,
});

const medium_material = new THREE.MeshBasicMaterial({
  color: 0xaab7b8, // grey
  // color: 0xfdfefe, // white
  wireframe: true,
});

const large_material = new THREE.MeshBasicMaterial({
  color: 0x2e4053, // dark navy blue
  // color: 0xfdfefe, // white
  wireframe: true,
});

const tiny_cube = new THREE.Mesh(tiny_geometry, tiny_material);
const small_cube = new THREE.Mesh(small_geometry, small_material);
const medium_cube = new THREE.Mesh(medium_geometry, medium_material);
const large_cube = new THREE.Mesh(large_geometry, large_material);

//

scene.add(tiny_cube);
scene.add(small_cube);
scene.add(medium_cube);
scene.add(large_cube);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);

  tiny_cube.rotation.x += 0.011;
  tiny_cube.rotation.y += 0.011;
  tiny_cube.rotation.z += 0.011;

  small_cube.rotation.x += 0.007;
  small_cube.rotation.y += 0.007;
  small_cube.rotation.z += 0.007;

  medium_cube.rotation.x += 0.005;
  medium_cube.rotation.y += 0.005;
  medium_cube.rotation.z += 0.005;

  large_cube.rotation.x += 0.003;
  large_cube.rotation.y += 0.003;
  large_cube.rotation.z += 0.003;

  renderer.render(scene, camera);
}

animate();
