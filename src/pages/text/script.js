import './style.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/* Base */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

let parameters = {
    sceneBackground: 0xF7BA00,
    matCap: 3
}
// Scene
const scene = new THREE.Scene()

scene.background = new THREE.Color(parameters.sceneBackground)

const sceneFolder = gui.addFolder("Scene")
sceneFolder.addColor(parameters, 'sceneBackground') 
    .onChange(() => { 
        scene.background = new THREE.Color(parameters.sceneBackground)
    })

/* Textures */
const textureLoader = new THREE.TextureLoader()
let matCaps = []
matCaps.push(textureLoader.load("/textures/matcaps/7.png"))
matCaps.push(textureLoader.load("/textures/matcaps/10.png"))
matCaps.push(textureLoader.load("/textures/matcaps/11.png"))
matCaps.push(textureLoader.load("/textures/matcaps/12.png"))
matCaps.push(textureLoader.load("/textures/matcaps/13.png"))

/* Object */
// Font
const torusArray = []
const fontLoader = new THREE.FontLoader();
fontLoader.load(
    'fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new THREE.TextGeometry('Hola', {
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegment: 12,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.03,
            bevelOffset: 0,
            bevelSegments: 5
        })
        const material = new THREE.MeshMatcapMaterial({matcap: matCaps[3]})
        const text = new THREE.Mesh(textGeometry, material)

        
        const textFolder = gui.addFolder("Text")
        textFolder.add(parameters, 'matCap', [0, 1, 2, 3, 4]) 
            .onChange(() => { 
                text.material = new THREE.MeshMatcapMaterial({matcap: matCaps[parameters.matCap]})
            })


        textGeometry.computeBoundingBox() // pedido calculo bounding Box
        console.log(textGeometry.boundingBox) // ver resultados bounding Box
    
        textGeometry.center()

        scene.add(text)
        
        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
        for(let i = 0; i < 150; i++){
            const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matCaps[Math.round(Math.random()*4)]})
            const donut = new THREE.Mesh(donutGeometry, donutMaterial)
            torusArray.push(donut)
            donut.position.x = (Math.random() - 0.5) * 10

            scene.add(donut)
            // randomness for the position
            donut.position.x = (Math.random() - 0.5) * 10
            if (donut.position.x > 0){
                donut.position.x += textGeometry.boundingBox.max.x
            } else {
                donut.position.x -= textGeometry.boundingBox.max.x
            }
            donut.position.y = (Math.random() - 0.5) * 10
            if (donut.position.y > 0){
                donut.position.y += textGeometry.boundingBox.max.y
            } else {
                donut.position.y -= textGeometry.boundingBox.max.y
            }
            donut.position.z = (Math.random() - 0.5) * 10
            if (donut.position.z > 0){
                donut.position.z += textGeometry.boundingBox.max.z
            } else {
                donut.position.z -= textGeometry.boundingBox.max.z
            }
            // randomness for the rotation
            donut.rotation.x = Math.random() * Math.PI
            donut.rotation.y = Math.random() * Math.PI

            // randomness for the scale 
            const scale = Math.random()
            donut.scale.set(scale, scale, scale)
        }

                
        const sphereGeometry = new THREE.SphereGeometry(0.2, 16, 16)
        for(let i = 0; i < 300; i++){
            const sphereMaterial = new THREE.MeshMatcapMaterial({ matcap: matCaps[Math.round(Math.random()*4)]})
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

            sphere.position.x = (Math.random() - 0.5) * 10

            scene.add(sphere)
            // randomness for the position
            sphere.position.x = (Math.random() - 0.5) * 10 + textGeometry.boundingBox.max.x
            if (sphere.position.x > 0){
                sphere.position.x += textGeometry.boundingBox.max.x
            } else {
                sphere.position.x -= textGeometry.boundingBox.max.x
            }
            sphere.position.y = (Math.random() - 0.5) * 10 + textGeometry.boundingBox.max.y
            if (sphere.position.y > 0){
                sphere.position.y += textGeometry.boundingBox.max.y
            } else {
                sphere.position.y -= textGeometry.boundingBox.max.y
            }
            sphere.position.z = (Math.random() - 0.5) * 10 + textGeometry.boundingBox.max.z 
            if (sphere.position.z > 0){
                sphere.position.z += textGeometry.boundingBox.max.z
            } else {
                sphere.position.z -= textGeometry.boundingBox.max.z
            }
            // randomness for the scale 
            const scale = Math.random()
            sphere.scale.set(scale, scale, scale)
        }
    }
)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = -8
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/* Renderer */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/* Animate */
const clock = new THREE.Clock()
let lastElapsedTime
let finished = false

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()
    
    torusArray.forEach( (torus) => {
        torus.rotation.x += 0.01
        torus.rotation.y += 0.01
    })

    if(camera.position.z < 2 & !finished){
        lastElapsedTime = elapsedTime
        camera.position.z += 0.01 * elapsedTime
    } else if (lastElapsedTime > 0 && !finished) {
        camera.position.z += 0.01 * lastElapsedTime 
        lastElapsedTime -= 0.2
        console.log(lastElapsedTime)
    } else {
        finished = true
    }


    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()