import * as TRHEE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

if (!WebGL.isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}

//

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const renderer = new THREE.WebGLRenderer();

//

// creating a cube class where I am able to set the size might be a better idea

const xs_cube = {
  geometry,
  material,
  x_rotation,
  y_rotation,
  z_rotation,
};

const sm_sube = {
  geometry,
  material,
  x_rotation,
  y_rotation,
  z_rotation,
};

const md_cube = {
  geometry,
  material,
  x_rotation,
  y_rotation,
  z_rotation,
};

const lg_cube = {
  geometry,
  material,
  x_rotation,
  y_rotation,
  z_rotation,
};
