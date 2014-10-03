//main.js
'use strict';

console.log('Peace, Love and Pixels.');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

var stage = document.getElementsByClassName('stage')[0];

//    renderer.setSize( 480, 200);
//    stage.appendChild( renderer.domElement );