export function createMesh(obj) {

  if (!obj) return null;

  switch (obj.type) {

    case 'box':
      return (
        <mesh key={obj.id} position={obj.position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      );

    case 'sphere':
      return (
        <mesh key={obj.id} position={obj.position}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      );

    case 'plane':
      return (
        <mesh key={obj.id} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      );

    default:
      console.warn("Unknown object type:", obj.type);
      return null;
  }
}