import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
//Moving camera
// mesh.position.x = 2
// mesh.position.y = 1
// mesh.position.z = -1
mesh.position.set(1, 1, 0) //(x, y, z)  <- Fast than previous way

//Scaling
mesh.scale.set(1, 3, 1)

//Rotations
mesh.rotation.y = Math.PI * 0.5
mesh.rotation.x = Math.PI * 0.5



//Some useful vector3 (position) methods
//mesh.position.length()
//mesh.position.distanceTo(camera.position)
//mesh.position.normalize() makes length to 1 of object
//camera.lookAt(new THREE.Vector3(0, -1, 0)) 

//Axis Helper
const axisHelper = new THREE.AxesHelper(4)
scene.add(axisHelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(2, 3, 5)
scene.add(camera)

//Used To lock on objects
camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)