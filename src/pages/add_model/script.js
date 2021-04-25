import "./style.scss";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Stats from 'three/examples/jsm/libs/stats.module';
import * as dat from 'dat.gui';

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

// debug
const gui = new dat.GUI();
const guiAnimations = {};
const animationsFolder = gui.addFolder("Animations");

const stats = Stats();
document.body.appendChild(stats.dom);

const debugObject = {
    backgroundColor: "#80c5c9",
}

scene.background = new THREE.Color(debugObject.backgroundColor);

const backgroundFolder = gui.addFolder("Background");
backgroundFolder.addColor(debugObject, 'backgroundColor').onChange(() => {scene.background.set(debugObject.backgroundColor)});

// Model
let duck;
let animationActions = {};
let mixer = null;
const gltfLoader = new GLTFLoader(manager);
gltfLoader.load(base_url + "/models/duck/duck.glb", model => {
    console.log(model.animations);
    duck = model.scene;
    duck.position.set(0, -3, 0);
    mixer = new THREE.AnimationMixer(duck);
    for(const animation of model.animations){
        let animationAction = mixer.clipAction(animation);
        animationActions[animation.name] = animationAction;
        animationActions[animation.name].clampWhenFinished = true;
        console.log(animation)
        guiAnimations[animation.name] = () => {
            mixer.stopAllAction();
            animationActions[animation.name].play();
        };
        animationsFolder.add(guiAnimations, animation.name);
    }

    scene.add(duck);
});

/************ Lights ************/
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffaa, 1);
directionalLight.position.set(2, 4, 2);
scene.add(directionalLight);

/************ Sizes ************/
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
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
camera.position.set(0, 3, 5);
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
    canvas: canvas,
    // change - add antialias only for screens with less than one devicePixelRatio
    antialias: true
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
    
    // Update animation
    if(mixer) {
        mixer.update(deltaTime);
    }

    // Update stats
    stats.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick();