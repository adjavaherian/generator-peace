//main.js
'use strict';

window.onload = function(){

    //remove everything in here to start your own prototyping
    console.log('Peace, Love and Pixels.');

    //stage
    var stage = document.getElementById('stage');
    var sW = $('#stage').css('width').substring(0,3) - 2;
    var sH = $('#stage').css('height').substring(0,3) - 2;

    //scene, cam, renderer
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, sW/sH, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();


    //create a cube
    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshNormalMaterial({
        wireframe: true
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    //load a parabolic plane
    var plane = new THREE.SphereGeometry(75, 16, 8, 0, 7, 1, 1.2);
    var planeMaterial = new THREE.MeshNormalMaterial();
    var planeMesh = new THREE.Mesh(plane, planeMaterial);
    planeMesh.rotation.y += 160.78;
    planeMesh.scale.x = -1;
    scene.add(planeMesh);

    //render
    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render(scene, camera);
    };

    renderer.setSize(sW, sH);
    render();

    //set camera
    camera.position.z = 5;

    stage.appendChild(renderer.domElement);

};
