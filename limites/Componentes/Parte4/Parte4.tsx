import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, Center } from '@react-three/drei';
import styled from 'styled-components';
import "./styles.css";
import NavBar from '../NavBAr/Bar';
import Parte2 from '../Parte2/Parte2';
import Parte3 from '../Parte3/Parte3';
import ReactPlayer from 'react-player';

const Container = styled.div({
  width: "1400px",
  height: "1000px",

  backgroundImage: `url('2.png')`,
  backgroundSize: "cover", 
  backgroundPosition: "center", 
  backgroundRepeat: "no-repeat", 
  '@media (max-width: 758px)': {
    width: "95%",
    height: "600px",  
  },
  
})


const ImageContainer = styled.div`

`;

const StyledImage = styled.img`
 
`;

interface ModelProps {
}

function Model(props: ModelProps) {
  const group :any = useRef<THREE.Group>();

  const { nodes, materials } = useGLTF('/mac-draco.glb') as { nodes: any; materials: any };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  return (
<group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <Html className="content" rotation-x={-Math.PI / 2} position={[-0.5, 0.05, -0.09]} transform occlude>          
         <div className='Center'>
         <ReactPlayer
            url="https://www.youtube.com/shorts/gU5FwDfNyLo"
            width="100%"
            height="400px"
            style={{
              boxShadow: "0 8px 16px rgba(213, 229, 40, 0.8)",
            }}/>   
         </div>     
              <div className="wrapper" >
              <StyledImage src="c1.png"  />
               <StyledImage src="c2.png"  />
              <StyledImage src="c3.png"  />
              <StyledImage src="c4.png"  />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}



export default function Parte4() {
  return (
<> 

<Container>
      <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Model />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
      
    </Canvas>
 </Container>
 
</>
  );
}
