import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

function render() {
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

const objLoader = new OBJLoader()
const mtlLoader = new MTLLoader()

const canvas = document.querySelector('#canvas') as HTMLCanvasElement

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
  alpha: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)

// Lights
scene.add(new THREE.AmbientLight(0x505050))
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.angle = Math.PI / 5
spotLight.penumbra = 0.2
spotLight.position.set(2, 3, 3)
spotLight.castShadow = true
spotLight.shadow.camera.near = 3
spotLight.shadow.camera.far = 10
spotLight.shadow.mapSize.width = 1024
spotLight.shadow.mapSize.height = 1024
scene.add(spotLight)

const dirLight = new THREE.DirectionalLight(0x55505a, 1)
dirLight.position.set(0, 3, 0)
dirLight.castShadow = true
dirLight.shadow.camera.near = 1
dirLight.shadow.camera.far = 10

dirLight.shadow.camera.right = 1
dirLight.shadow.camera.left = -1
dirLight.shadow.camera.top = 1
dirLight.shadow.camera.bottom = -1

dirLight.shadow.mapSize.width = 1024
dirLight.shadow.mapSize.height = 1024
scene.add(dirLight)

// Objects

let plane = new THREE.Plane(new THREE.Vector3(0, 0, 0))
scene.add(new THREE.PlaneHelper(plane, 2, 0xffffff))

mtlLoader.load('assets/toasty.mtl', (mtl) => {
  mtl.preload()
  for (const material of Object.values(mtl.materials)) {
    material.side = THREE.DoubleSide
    material.clippingPlanes = [plane]
    material.clipShadows = true
    material.clipIntersection = true
  }
  objLoader.setMaterials(mtl)
  objLoader.load('assets/toasty.obj', (root) => {
    scene.add(root)
    root.position.y = -1
  })
})

renderer.localClippingEnabled = true

const controls = new OrbitControls(camera, renderer.domElement)
camera.position.z = 5
controls.update()

requestAnimationFrame(render)
