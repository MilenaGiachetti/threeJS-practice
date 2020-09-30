import * as THREE from 'https://unpkg.com/three@<VERSION>/build/three.module.js';

var loader = new GLTFLoader();

loader.load( 'path/to/donut.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );