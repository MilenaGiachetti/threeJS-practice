import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import {
  skybox1,
  skybox2,
  skybox3,
  skybox4,
  skybox5,
  skybox6
} from "@assets/images/skybox";

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    skybox1,
    skybox2,
    skybox3,
    skybox4,
    skybox5,
    skybox6
  ]);

  scene.background = texture;
  return null;
}

export default SkyBox