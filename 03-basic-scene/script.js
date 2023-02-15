const scene = new THREE.Scene() //Gotta define a scene first

// Creating a Red Cube
//For every object we need its geometry (shape) and its material (colour, shine... all that stuff). We can use that to make a Mesh of the object. Mesh = geometry x material
const geometryBox = new THREE.BoxGeometry(1, 1, 1)  
const materialBox = new THREE.MeshBasicMaterial({color: 'red'})
const meshBox = new THREE.Mesh(geometryBox, materialBox)
scene.add(meshBox) // This here adds our box into the scene, duh

//Camera
const sizes = {  //These are used for our prespective camera 
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //Param1 = FOV, param2 = Aspect ratio(width/height)
scene.add(camera) //Remember to move the camera so its not inside our objects
camera.position.z = 7 //z is back or front, xy yk what it is
camera.position.x = 4


//Renderer
const canvas = document.querySelector(".webgl") //Fetches html tag with this class, needed for renderer
const renderer = new THREE.WebGLRenderer({              //Remember the renderer is () then {}
    canvas: canvas
})


//We need to resize the renderer to match the camera
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera) // renderer needs scene and camera to init