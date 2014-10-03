//main.js
'use strict';

window.onload = function(){

    console.log('Peace, Love and Pixels.');

    var stage = document.getElementById('stage');
    var sW = $('#stage').css('width').substring(0,3) - 2;
    var sH = $('#stage').css('height').substring(0,3) - 2;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, sW/sH, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();

   renderer.setSize(sW, sH);

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render(scene, camera);
    };

    render();

    stage.appendChild(renderer.domElement);

};
