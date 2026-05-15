import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// Alembic is advanced — placeholder for now

export function loadModel(file, onLoad) {
  const url = URL.createObjectURL(file);
  const ext = file.name.split('.').pop().toLowerCase();

  let loader;

  switch (ext) {
    case 'obj':
      loader = new OBJLoader();
      break;

    case 'fbx':
      loader = new FBXLoader();
      break;

    default:
      console.warn("Unsupported format:", ext);
      return;
  }

  loader.load(url, (object) => {
    object.position.set(0, 0, 0);
    onLoad(object);
  });
}