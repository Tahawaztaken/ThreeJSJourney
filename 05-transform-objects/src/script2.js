import * as THREE from 'three'

//Canvas
const canvas = document.querySelector('canvas.webgl')

//Scene
const scene = new THREE.Scene()

//Objects
const group = new THREE.Group()
scene.add(group)

const shaftGeometry = new THREE.CylinderGeometry(3, 3, 15, 32);
const shaftMaterial = new THREE.MeshBasicMaterial( {color: 'blue'} );
const shaft = new THREE.Mesh( shaftGeometry, shaftMaterial );
scene.add(shaft);

const leftBallGeometry = new THREE.SphereGeometry( 3, 16, 16 );
const leftBallMaterial = new THREE.MeshBasicMaterial( { color: 'blue' } );
const leftBall = new THREE.Mesh( leftBallGeometry, leftBallMaterial );
scene.add( leftBall );
leftBall.position.x = 4
leftBall.position.y = -5.5

const rightBallGeometry = new THREE.SphereGeometry( 3, 16, 16 );
const rightBallMaterial = new THREE.MeshBasicMaterial( { color: 'blue' } );
const rightBall = new THREE.Mesh( rightBallGeometry , rightBallMaterial );
scene.add( rightBall );
rightBall.position.x = -4
rightBall.position.y = -5.5

const tipGeometry = new THREE.SphereGeometry( 3, 16, 16 );
const tipMaterial = new THREE.MeshBasicMaterial( { color: 'blue' } );
const tip = new THREE.Mesh( tipGeometry , tipMaterial );
scene.add( tip );
tip.position.y = 8

group.add(shaft)
group.add(leftBall)
group.add(rightBall)
group.add(tip)

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
camera.position.z = -20
camera.lookAt(shaft.position)
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)