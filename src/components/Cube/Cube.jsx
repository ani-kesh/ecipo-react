import { Logo } from "../Logo/Logo";
import {
  container,
  cubeContainer,
  scene,
  floor,
  cube,
  front,
  back,
  left,
  right,
  top,
  bottom,
} from "./Cube.module.css";

export default function CubeLogo() {
  return (
    <>
      <div className={container}>
        <div className={cubeContainer}>
          <div className={scene}>
            <div className={floor}></div>
            <div className={cube}>
              <div className={front}>
                <Logo />
              </div>
              <div className={back}>
                <Logo />
              </div>
              <div className={left}>
                <Logo />
              </div>
              <div className={right}>
                <Logo />
              </div>
              <div className={top}></div>
              <div className={bottom}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
