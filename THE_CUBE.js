import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

if (!WebGL.isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}

//

let screen = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const FOV = 100;
const ASPECT = screen?.width / screen?.height;
const NEAR = 0.1;
const FAR = 1000;

//

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
const renderer = new THREE.WebGLRenderer();

//

renderer.setSize(screen?.width, screen?.height);
document.body.appendChild(renderer.domElement);

//

// SPHERE
let sphere_details = {
  radius: 2.5,
  width: 5,
  height: 5,
  color: 0xfdfefe, // white
  wireframe: true,
};

const sphere_geometry = new THREE.SphereGeometry(
  sphere_details?.radius,
  sphere_details?.width,
  sphere_details?.height
);

const sphere_material = new THREE.MeshBasicMaterial(
  sphere_details?.color,
  sphere_details?.wireframe
);

const sphere = new THREE.Mesh(sphere_geometry, sphere_material);

// CUBE
let cube_details = {
  width: 7,
  height: 7,
  depth: 7,
  color: 0xaab7b8, // grey
  wireframe: true,
};

const cube_geometry = new THREE.BoxGeometry(
  cube_details?.width,
  cube_details?.height,
  cube_details?.depth
);

const cube_material = new THREE.MeshBasicMaterial(
  cube_details?.color,
  cube_details?.wireframe
);

const cube = new THREE.Mesh(cube_geometry, cube_material);

//

scene.add(sphere);
scene.add(cube);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.rotation.z += 0.01;

  cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;
  cube.rotation.z += 0.001;

  renderer.render(scene, camera);
}

animate();
