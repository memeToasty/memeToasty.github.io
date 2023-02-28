import * as THREE from 'three';

function render(time: number) {
  time *= 0.001;
  cube.rotation.x = time;
  cube.rotation.z = time;
  
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

const canvas = document.querySelector('#canvas') as HTMLCanvasElement;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshNormalMaterial();

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

requestAnimationFrame(render);