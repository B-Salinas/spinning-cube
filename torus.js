import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if (!WebGL.isWebGLAvailable() ) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('contianer').appendChild(warning);
}


// const aspect = 

const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera()

const renderer = new THREE.WebGLRenderer();