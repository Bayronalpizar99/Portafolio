// src/components/ParticleBackground.tsx
import { Box } from "@chakra-ui/react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#00141f",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          bubble: {
            enable: true,
            distance: 120,
            size: 2.5,
            duration: 2,
            opacity: 0.9,
          },
          push: {
            enable: true,
            quantity: 4,
          },
          repulse: {
            enable: true,
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#04a56b",
        },
        links: {
          enable: false,
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
  
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1.5 },
          animation: {
            enable: true,
            speed: 2,
            size_min: 0.3,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="-1"
      >
        <Particles
          id="tsparticles"
          options={particleOptions}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
      </Box>
    );
  }

  return null;
};