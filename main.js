import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
console.log("Включен GLTFLoader");

loader.load('https://www.dropbox.com/scl/fi/yhlzw2o5la58bshhw8sne/suzanne.glb?rlkey=jcrv2jma100e4pfrtsxm5opkf&dl=0', function(gltf) {
    const model = gltf.scene;
    model.scale.set(10, 10, 10);
    model.position.set(0, 0, 0);
    model.castShadow = true;
    model.receiveShadow = true;
    scene.add(model);
    console.log("Модель загружена");
}, undefined, function(error) {
    console.error(error);
});

camera.position.z = 5;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
