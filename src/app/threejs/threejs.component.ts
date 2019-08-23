import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs',
  templateUrl: './threejs.component.html',
  styleUrls: ['./threejs.component.css']
})
export class ThreejsComponent implements AfterViewInit {

  public scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  constructor() { }
  ngAfterViewInit() {
    this.createScene();

  }
  @HostListener('document:keypress', ['$event'])
    public onKeyPress(event: KeyboardEvent) {
        console.log("onKeyPress: " + event.key);
    }

    @HostListener('click') onClick() {
      alert('Xin thong bao');
      console.log('Da click');
        // console.log("onKeyPress: " + event.key);
    }

  createScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    const geometry = new THREE.BoxGeometry( 2, 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame( animate );
      //cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }

}
