import * as THREE from "three";

// // where everything lives! Literally setting the scene
const scene = new THREE.Scene();

// // PerspectiveCamera takes 4 attributes: field of vision (fov), aspect ratio, near, far
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// // field of vision (fov): extent of the scene that is scene on the display at any given moment, the number is in degrees
// // aspect ratio: ALWAYS want to use the width of the element divided by the height
// // near: clipping plane, objects won't be rendered if they are closer than the value of near
// // far: clipping plane, objects won't be rendered if they are further than the value of far

// // the size at which we want to render our app. Always fill your browser window. For performance intensive apps, divide each by 2
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// // theres a 3rd value if you'd live to render your app at a lower resolution (the default for updateStyle is true)

// // pinning everything to our html document so we can see it
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x3333ff });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
