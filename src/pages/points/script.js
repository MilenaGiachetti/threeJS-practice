import "./style.scss";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

/************ Handle URL ************/
const ORIGIN_URL = window.location.origin;
let base_url;

if (ORIGIN_URL == "https://milenagiachetti.github.io") {
    base_url = ORIGIN_URL + "/threeJS-practice/";
} else {
    base_url = ORIGIN_URL;
}

/************ Scene base ************/
// Canvas
const canvas = document.querySelector('canvas#canvas');

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f2f2f2");

// Loading Manager
const manager = new THREE.LoadingManager();
manager.onLoad = function() {
    console.log("loaded");
    // hide loading screen
    // document.getElementById("loadingScreen").classList.add("fadeOut");
};

manager.onError = function(url) {
	console.log('Error loading ' + url);
};

// Model
let chair;
const objLoader = new OBJLoader(manager);
objLoader.load(base_url + "/models/chair/chair.obj", model => {
    console.log(model);
    chair = model;
    scene.add(chair);
});

/************ Points ************/
const points = [
    {
        position: new THREE.Vector3(-12, 3.1, 40), 
        element: document.querySelector("#point-0")
    },
    {
        position: new THREE.Vector3(22, 3, 26.5), 
        element: document.querySelector("#point-1")
    },
    {
        position: new THREE.Vector3( 2, 3, -20), 
        element: document.querySelector("#point-2")
    }
]

/************ Lights ************/
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffaa, 1);
directionalLight.position.set(2, 4, 2);
scene.add(directionalLight);

/************ Sizes ************/
const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight / 2
};

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth / 2;
    sizes.height = window.innerHeight / 2;
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/************ Camera ************/
// Base camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 150);
camera.position.set(20, 110, -50);
camera.lookAt(0,0,0);
scene.add(camera);

const orbitControls = new OrbitControls(camera, canvas);
orbitControls.target = new THREE.Vector3(0, 0, 0);
orbitControls.maxPolarAngle = Math.PI * 0.5;
orbitControls.maxDistance = 300;
orbitControls.minDistance = 0;
orbitControls.enableDamping = true;

/************ Renderer ************/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/************ Animate ************/
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    // Move points
    // for(const point of points) {
    //     const screenPosition = point.position.clone();
        
    //     frustum.setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));  
    //     if (frustum.containsPoint(screenPosition)) {
    //         point.element.classList.add('visible');
    //     } else {
    //         point.element.classList.remove('visible');
    //     }

    //     screenPosition.project(camera);

    //     const translateX = screenPosition.x * sizes.width * 0.5;
    //     const translateY = - screenPosition.y * sizes.height * 0.5;
    //     point.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    // }

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick();