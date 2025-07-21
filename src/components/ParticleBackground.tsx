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
            enable: true, // ✅ ACTIVAMOS la interacción en hover
            mode: "bubble", // ✅ Solo modo bubble, sin atracción
          },
          onClick: {
            enable: true, // ✅ ACTIVAMOS la interacción en click
            mode: "push", // ✅ Agrega nuevas partículas al hacer click
          },
        },
        modes: {
          bubble: {
            enable: true,
            distance: 120, // ✅ Área de efecto del bubble
            size: 2.5, // ✅ Tamaño máximo del efecto
            duration: 2,
            opacity: 0.9,
          },
          push: {
            enable: true,
            quantity: 4, // Cantidad de partículas que se agregan por click
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
          enable: false, // Mantenemos los links desactivados para un efecto más limpio
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.7,
          straight: false,
          // ✅ REMOVEMOS la atracción del movimiento general
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
        // ✅ CAMBIO CLAVE: Removemos pointerEvents="none" para permitir interacción
        // pero usamos un z-index negativo para que no interfiera con otros elementos
      >
        <Particles 
          id="tsparticles" 
          options={particleOptions}
          style={{
            // ✅ Aseguramos que las partículas estén detrás de todo
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