import * as THREE from 'three'

const scene = new THREE.Scene()

const geometry = new THREE.CylinderGeometry(2, 5, 10, 16)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const cylinder = new THREE.Mesh(geometry, material)
scene.add(cylinder)

const geometry_capsule = new THREE.CapsuleGeometry(1, 1, 4, 8)
const material_capsule = new THREE.MeshBasicMaterial({color: 'green'})
const capsule = new THREE.Mesh(geometry_capsule, material_capsule)
scene.add(capsule)
capsule.position.x = 0
capsule.position.y = 10
capsule.position.z = 10



const sizes = {
    width: 1000,
    height: 800
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)
camera.position.z = 20
camera.position.x = 0
camera.position.y = 8

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)