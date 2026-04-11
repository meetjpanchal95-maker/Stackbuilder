"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mixColor(colorA: string, colorB: string, amount: number) {
  return new THREE.Color(colorA).lerp(new THREE.Color(colorB), amount).getStyle();
}

function readThemeColors() {
  const styles = getComputedStyle(document.documentElement);
  const brand = styles.getPropertyValue("--brand-color").trim() || "#1d6faa";
  const inner = styles.getPropertyValue("--secondary-brand").trim() || "#6d8db0";
  const background = styles.getPropertyValue("--background-main").trim() || "#e5e8ec";

  return {
    brand,
    inner,
    shell: mixColor(background, "#ffffff", 0.58),
  };
}

export function HeroEyeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const colors = readThemeColors();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 0, 10.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    rootGroup.scale.setScalar(0.588);
    scene.add(rootGroup);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.72, 128, 128),
      new THREE.MeshPhysicalMaterial({
        color: colors.shell,
        roughness: 0.08,
        metalness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.03,
        reflectivity: 1,
        envMapIntensity: 1.85,
        sheen: 0.28,
        sheenRoughness: 0.24,
        sheenColor: new THREE.Color("#ffffff"),
      }),
    );
    shell.castShadow = true;
    shell.receiveShadow = true;
    rootGroup.add(shell);

    const shellReflection = new THREE.Mesh(
      new THREE.SphereGeometry(0.92, 96, 96),
      new THREE.MeshPhysicalMaterial({
        color: mixColor(colors.shell, "#ffffff", 0.6),
        roughness: 0.03,
        metalness: 0.04,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
        transparent: true,
        opacity: 0.64,
        envMapIntensity: 1.4,
      }),
    );
    shellReflection.position.set(0, 0, 1.12);
    shellReflection.scale.set(0.96, 0.96, 0.22);
    rootGroup.add(shellReflection);

    const shellHighlightPrimary = new THREE.Mesh(
      new THREE.SphereGeometry(0.72, 72, 72),
      new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        roughness: 0.02,
        metalness: 0.02,
        clearcoat: 1,
        clearcoatRoughness: 0.01,
        transparent: true,
        opacity: 0.34,
        envMapIntensity: 1.6,
      }),
    );
    shellHighlightPrimary.position.set(-0.42, 0.52, 1.36);
    shellHighlightPrimary.scale.set(0.88, 0.54, 0.1);
    rootGroup.add(shellHighlightPrimary);

    const shellHighlightSecondary = new THREE.Mesh(
      new THREE.SphereGeometry(0.48, 72, 72),
      new THREE.MeshPhysicalMaterial({
        color: mixColor(colors.shell, "#ffffff", 0.8),
        roughness: 0.03,
        metalness: 0.03,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
        transparent: true,
        opacity: 0.18,
        envMapIntensity: 1.3,
      }),
    );
    shellHighlightSecondary.position.set(0.54, -0.18, 1.28);
    shellHighlightSecondary.scale.set(0.72, 0.36, 0.08);
    rootGroup.add(shellHighlightSecondary);

    const frontGroup = new THREE.Group();
    frontGroup.position.set(0, 0, 1.5);
    rootGroup.add(frontGroup);

    const irisGroup = new THREE.Group();
    irisGroup.scale.setScalar(1.3);
    frontGroup.add(irisGroup);

    // --- VIDEO TEXTURE FOR IRIS (BLUE CIRCLE) ---
    const video = document.createElement('video');
    video.src = '/stackvideo.mp4';
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.style.display = 'none';
    video.setAttribute('preload', 'auto');
    video.play();

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.94, 96, 96),
      new THREE.MeshPhysicalMaterial({
        map: videoTexture,
        roughness: 0.28,
        metalness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.14,
        envMapIntensity: 1.18,
        side: THREE.FrontSide, // Only show on front
      }),
    );
    iris.position.set(0, 0, 0.02);
    iris.scale.set(1, 1, 0.28);
    iris.castShadow = true;
    iris.receiveShadow = true;
    irisGroup.add(iris);

    const centerRing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.29, 0.29, 0.05, 64),
      new THREE.MeshStandardMaterial({
        color: "#050505",
        roughness: 0.4,
        metalness: 0.12,
      }),
    );
    centerRing.position.set(0, 0, 0.27);
    centerRing.rotation.x = Math.PI / 2;
    centerRing.castShadow = true;
    centerRing.receiveShadow = true;
    irisGroup.add(centerRing);

    const playShape = new THREE.Shape();
    playShape.moveTo(-0.14, -0.18);
    playShape.lineTo(0.18, 0);
    playShape.lineTo(-0.14, 0.18);
    playShape.closePath();

    const play = new THREE.Mesh(
      new THREE.ShapeGeometry(playShape),
      new THREE.MeshStandardMaterial({
        color: colors.brand,
        emissive: new THREE.Color(colors.brand),
        emissiveIntensity: 0.28,
        roughness: 0.35,
        metalness: 0.08,
      }),
    );
    play.position.set(0.03, 0, 0.32);
    play.scale.setScalar(0.6);
    irisGroup.add(play);

    scene.add(new THREE.AmbientLight(0xffffff, 0.92));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 6, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.radius = 6;
    keyLight.shadow.bias = -0.00015;
    scene.add(keyLight);

    const accentLight = new THREE.PointLight(colors.brand, 1.05, 18, 2);
    accentLight.position.set(-5, -3, 4);
    scene.add(accentLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.4, 20, 2);
    rimLight.position.set(5.8, 1.8, 5.2);
    scene.add(rimLight);

    const undersideLight = new THREE.PointLight(mixColor(colors.inner, "#000000", 0.25), 0.65, 16, 2);
    undersideLight.position.set(0, -4.2, 3.2);
    scene.add(undersideLight);

    const fillLight = new THREE.HemisphereLight(0xffffff, new THREE.Color(colors.inner), 0.88);
    scene.add(fillLight);

    const shadowPlane = new THREE.Mesh(
      new THREE.CircleGeometry(2.7, 64),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2 }),
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -2.6, 0);
    shadowPlane.scale.set(1.62, 0.62, 1);
    scene.add(shadowPlane);

    const target = { shellX: 0, shellY: 0, irisX: 0, irisY: 0, frontX: 0, frontY: 0 };
    const current = { shellX: 0, shellY: 0, irisX: 0, irisY: 0, frontX: 0, frontY: 0 };

    const updateSize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      const verticalFov = THREE.MathUtils.degToRad(camera.fov);
      const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
      const fitRadius = 3.15;
      const fitDistance = Math.max(
        fitRadius / Math.tan(verticalFov / 2),
        fitRadius / Math.tan(horizontalFov / 2),
      );

      camera.position.z = fitDistance + 1.25;
      camera.updateProjectionMatrix();
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    const handlePointerMove = (event: PointerEvent) => {
      const pointerX = clamp((event.clientX / window.innerWidth) * 2 - 1, -1, 1);
      const pointerY = clamp(-((event.clientY / window.innerHeight) * 2 - 1), -1, 1);

      target.shellX = pointerY * 0.32;
      target.shellY = pointerX * 0.32;
      target.irisX = pointerX * 0.18;
      target.irisY = pointerY * 0.18;
      target.frontX = pointerX * 0.07;
      target.frontY = pointerY * 0.07;
    };

    const resetPointer = () => {
      target.shellX = 0;
      target.shellY = 0;
      target.irisX = 0;
      target.irisY = 0;
      target.frontX = 0;
      target.frontY = 0;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", resetPointer);

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.033);

      current.shellX = THREE.MathUtils.damp(current.shellX, target.shellX, 4.8, delta);
      current.shellY = THREE.MathUtils.damp(current.shellY, target.shellY, 4.8, delta);
      current.irisX = THREE.MathUtils.damp(current.irisX, target.irisX, 5.6, delta);
      current.irisY = THREE.MathUtils.damp(current.irisY, target.irisY, 5.6, delta);
      current.frontX = THREE.MathUtils.damp(current.frontX, target.frontX, 4.8, delta);
      current.frontY = THREE.MathUtils.damp(current.frontY, target.frontY, 4.8, delta);
      shell.rotation.x = current.shellX;
      shell.rotation.y = current.shellY;
      shellReflection.rotation.x = current.shellX * 0.9;
      shellReflection.rotation.y = current.shellY * 0.9;
      shellHighlightPrimary.rotation.x = current.shellX * 1.1;
      shellHighlightPrimary.rotation.y = current.shellY * 1.1;
      shellHighlightPrimary.position.x = -0.42 + current.shellY * 0.18;
      shellHighlightPrimary.position.y = 0.52 + current.shellX * 0.12;
      shellHighlightSecondary.rotation.x = current.shellX * 0.8;
      shellHighlightSecondary.rotation.y = current.shellY * 0.8;
      shellHighlightSecondary.position.x = 0.54 + current.shellY * 0.12;
      shellHighlightSecondary.position.y = -0.18 + current.shellX * 0.08;
      frontGroup.position.x = current.frontX;
      frontGroup.position.y = current.frontY;
      irisGroup.position.x = current.irisX;
      irisGroup.position.y = current.irisY;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", resetPointer);
      renderer.dispose();
      shell.geometry.dispose();
      (shell.material as THREE.Material).dispose();
      shellReflection.geometry.dispose();
      (shellReflection.material as THREE.Material).dispose();
      shellHighlightPrimary.geometry.dispose();
      (shellHighlightPrimary.material as THREE.Material).dispose();
      shellHighlightSecondary.geometry.dispose();
      (shellHighlightSecondary.material as THREE.Material).dispose();
      iris.geometry.dispose();
      (iris.material as THREE.Material).dispose();
      centerRing.geometry.dispose();
      (centerRing.material as THREE.Material).dispose();
      play.geometry.dispose();
      (play.material as THREE.Material).dispose();
      shadowPlane.geometry.dispose();
      (shadowPlane.material as THREE.Material).dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none" />;
}