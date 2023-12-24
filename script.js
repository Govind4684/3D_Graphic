const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cube;

const loader = new THREE.TextureLoader();

loader.load("roblox.png", (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.87, 0.87);

    const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const material = new THREE.MeshLambertMaterial({ map : texture }); // Creating material texture by mapping constructor to texture
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube); // Adding our primary object to scene after creating it with Mesh

    draw();
});

const light = new THREE.AmbientLight("rgb(255,255,255)"); // Light surrounding scene
scene.add(light);

const spotLight = new THREE.SpotLight("rgb(255,255,255)"); // Light focused on the object
spotLight.position.set(100, 1000, 1000); 
spotLight.castShadow = true;
scene.add(spotLight);

function draw() {
    // adjust rotation speed
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);

    requestAnimationFrame(draw); // looping through animation infinitel, as no paramter to stop, so it will keep calling itself
}


