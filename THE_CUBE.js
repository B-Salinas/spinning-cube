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

// As I start to build more and more shapes, I think it would be better to have all the dimensions / shape creations on another file and to call that file over (importing/exporting) -- tomorrow though!

// SPHERE
let sphere_details = {
  radius: 1,
  width: 16, // default is 32
  height: 8, // default is 16
  color: 0xfdfefe, // white
  wireframe: true,
};

const sphere_geometry = new THREE.SphereGeometry(
  sphere_details?.radius,
  sphere_details?.width,
  sphere_details?.height,
); 

const sphere_material = new THREE.MeshBasicMaterial({
  color: 0xfdfefe, // white
  wireframe: true,
});

const sphere = new THREE.Mesh(sphere_geometry, sphere_material);

//

// CUBE
let house_cube_details = {
  width: 2,
  height: 2,
  depth: 2,
  // color: 0xaab7b8, // grey
  // wireframe: true,
};

const house_cube_geometry = new THREE.BoxGeometry(
  house_cube_details?.width,
  house_cube_details?.height,
  house_cube_details?.depth
);

const house_cube_material = new THREE.MeshBasicMaterial({
  color: 0xe5e7e9, // grey
  wireframe: true,
});

const house_cube = new THREE.Mesh(house_cube_geometry, house_cube_material);

//

scene.add(sphere);
scene.add(house_cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.rotation.z += 0.01;

  house_cube.rotation.x += 0.001;
  house_cube.rotation.y += 0.001;
  house_cube.rotation.z += 0.001;

  renderer.render(scene, camera);
}

animate();
