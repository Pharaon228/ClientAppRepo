import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import DefaultCicle2 from 'assets/images/skins/Cycle2Default.gif';
import DefaultCicle3 from 'assets/images/skins/Cycle3Default.gif';
import CheshirCycle2 from 'assets/images/skins/Cycle2Cheshir.gif';
import CheshirCycle3 from 'assets/images/skins/Cycle3Cheshir.gif';
import WhiteCycle2 from 'assets/images/skins/Cycle2White.gif';
import WhiteCycle3 from 'assets/images/skins/Cycle3White.gif';
import RedCycle2 from 'assets/images/skins/Cycle2Red.gif';
import RedCycle3 from 'assets/images/skins/Cycle3Red.gif';
import ChesterCycle2 from 'assets/images/skins/Cycle2Chester.gif';
import ChesterCycle3 from 'assets/images/skins/Cycle3Chester.gif';
import DefultCat from 'assets/images/skins/dftct.svg';
import WhiteCat from 'assets/images/skins/white.svg';
import RedCat from 'assets/images/skins/bengal.svg';
import CheshirCat from 'assets/images/skins/cheshir.svg';
import chesterActiveIcon from 'assets/images/skins/chesterActive.png';
import RobotAnimation from 'assets/images/skins/Rob1.gif';
import RobotAnimation1 from 'assets/images/skins/Rob2.gif';
import RobotAnimation2 from 'assets/images/skins/Rob3.gif';

interface Skin {
  id: string;
  name: string;
  imageSrc?: string;
  gifWait?: string;
  gifTap?: string;
  gifIdle?: string;
  bonus?: {
    energy: number | 'double' | 'triple';
    clickValue: number | 'double' | 'triple';
  };
}
// Список скинов (как и было)
const skins = [
  { id: 'default', name: 'Default', gifTap: DefaultCicle2, imageSrc: DefultCat, gifIdle: DefaultCicle3 },
  { id: 'silver', name: 'Silver', gifTap: WhiteCycle2, imageSrc: WhiteCat, gifIdle: WhiteCycle3 },
  { id: 'bengal', name: 'Bengal', gifTap: RedCycle2, imageSrc: RedCat, gifIdle: RedCycle3 },
  { id: 'cheshire', name: 'Cheshire', gifTap: CheshirCycle2, imageSrc: CheshirCat, gifIdle: CheshirCycle3 },
  { id: 'chester', name: 'Chester', gifTap: ChesterCycle2, imageSrc: chesterActiveIcon, gifIdle: ChesterCycle3 },
];

interface Digit {
  value: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  opacity: number;
}

const CatContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSkin, setSelectedSkin] = useState(skins[0]); // Скин по умолчанию
  const [currentAnimation, setCurrentAnimation] = useState(selectedSkin.gifTap);
  const [digits] = useState<Digit[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRefs = useRef<number[]>([]);
  const [canvasSize, setCanvasSize] = useState<{
    width: number
    height: number
  }>({ width: 0, height: 0 })
  useEffect(() => {
    if (containerRef.current) {
      setCanvasSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      })
    }
  }, [])

  // Анимация летящих цифр
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      digits.forEach((digit, index) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${digit.opacity})`;
        ctx.font = 'bold 48px "Potato Sans"';
        ctx.fillText(digit.value, digit.x, digit.y);
        digit.opacity -= 0.01;
        digit.y -= 2; // Летят вверх
        if (digit.opacity <= 0) digits.splice(index, 1);
      });
      animationFrameRefs.current = digits.length ? [requestAnimationFrame(render)] : [];
    };
    render();
    return () => animationFrameRefs.current.forEach((frameId) => cancelAnimationFrame(frameId));
  }, [digits]);

  // Таймер для смены анимации
  useEffect(() => {
    const switchToIdle = setTimeout(() => setCurrentAnimation(selectedSkin.gifIdle), 5000);
    return () => clearTimeout(switchToIdle);
  }, [currentAnimation, selectedSkin]);

  // Функция для выбора нового скина
  const handleSkinSelect = (skin: Skin) => {
    setSelectedSkin({
      id: skin.id,
      name: skin.name,
      gifTap: skin.gifTap || '',
      imageSrc: skin.imageSrc || '',
      gifIdle: skin.gifIdle || '',
    });
    setCurrentAnimation(skin.gifTap || '');
  };

  const renderCat = () => (
    <div style={catStyle}>
      <img src={currentAnimation} alt="Cat animation" style={imgStyle} />
    </div>
  );

  const renderSkinSelectors = () => (
    <div style={skinSelectorStyle}>
      {skins.map((skin) => (
        <button key={skin.id} onClick={() => handleSkinSelect(skin)} style={circleButtonStyle}>
          <img src={skin.imageSrc} alt={skin.name} style={circleImgStyle} />
        </button>
      ))}
    </div>
  );

  // Анимация роботов по кругу вокруг кота
  const renderRobots = () => (
    <>
      {/* Контейнер для роботов */}
      <motion.div
        className="absolute"
        style={robotContainerStyle} // Контейнер для управления движением роботов
        animate={{
          rotate: [0, 360], // Движение по кругу
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Первый робот слева-внизу */}
        <motion.img
          src={RobotAnimation}
          alt="Robot 1"
          style={robotStyle}
          animate={{
            rotate: [0, -360], // Независимый поворот робота (против часовой)
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Второй робот справа-внизу */}
        <motion.img
          src={RobotAnimation1}
          alt="Robot 2"
          style={{
            ...robotStyle,
            top: "50%", // Сместить ниже по окружности
            left: "100%",
          }}
          animate={{
            rotate: [0, -360], // Независимый поворот робота
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Третий робот сверху */}
        <motion.img
          src={RobotAnimation2}
          alt="Robot 3"
          style={{
            ...robotStyle,
            top: "-50%", // Сместить выше по окружности
            left: "50%",
          }}
          animate={{
            rotate: [0, -360], // Независимый поворот робота
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </>
  );

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center relative w-full h-full">
      {/* Канвас для цифр */}
      <canvas
        className="absolute top-0 left-0 z-50 pointer-events-none"
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
      />

      {/* Центральный кот */}
      <div className="relative flex justify-center items-center">
        {renderCat()}
        {renderRobots()} {/* Добавляем анимацию роботов */}
      </div>

      {/* Селекторы скинов */}
      <div className="flex justify-center items-center mt-6">
        {renderSkinSelectors()}
      </div>
    </div>
  );

};

// Стили
const catStyle: CSSProperties = {
  width: '400px',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const imgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
};

const skinSelectorStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
};

const circleButtonStyle: CSSProperties = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '2px solid white',
  backgroundColor: 'transparent',
  cursor: 'pointer',
};

const circleImgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
};

// Контейнер для роботов
const robotContainerStyle: CSSProperties = {
  width: '300px', // Радиус движения
  height: '300px',
  position: 'absolute',
  top: '20%',
  left: '20%',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none', // Чтобы не мешали взаимодействию
};

// Стили для каждого робота
const robotStyle: CSSProperties = {
  position: 'absolute',
  width: '120px',
  height: '120px',
};

export default CatContainer;
