import React, { useState, useEffect, useRef, CSSProperties } from 'react';
//simport { motion } from 'framer-motion';
import DefaultCicle2 from 'assets/images/skins/Cycle2Default.gif';
import DefaultCicle3 from 'assets/images/skins/Cycle3Default.gif';
import CheshirCycle2 from 'assets/images/skins/Cycle2Cheshir.gif';
import CheshirCycle3 from 'assets/images/skins/Cycle3Cheshir.gif';
import WhiteCycle2 from 'assets/images/skins/Cycle2White.gif';
import WhiteCycle3 from 'assets/images/skins/Cycle3White.gif';
import ChesterCycle2 from 'assets/images/skins/cycle5-1024.gif';
import ChesterCycle3 from 'assets/images/skins/cycle9-1024.gif';
import DefultCat from 'assets/images/skins/dftct.svg';
import WhiteCat from 'assets/images/skins/white.svg';

import CheshirCat from 'assets/images/skins/cheshir.svg';
import chesterActiveIcon from 'assets/images/skins/extralog.png';
//import RobotAnimation from 'assets/images/skins/Rob1.gif';
//import RobotAnimation1 from 'assets/images/skins/Rob2.gif';
//import RobotAnimation2 from 'assets/images/skins/Rob3.gif';
import catAppLogo from 'assets/images/logo.png';
import catAppLogoShadow from 'assets/images/logoShadow.png';


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
const skins = [
  { id: 'extra', name: 'Extra', gifTap: ChesterCycle2, imageSrc: chesterActiveIcon, gifIdle: ChesterCycle3 },
  { id: 'default', name: 'Default', gifTap: DefaultCicle2, imageSrc: DefultCat, gifIdle: DefaultCicle3 },
  { id: 'silver', name: 'Silver', gifTap: WhiteCycle2, imageSrc: WhiteCat, gifIdle: WhiteCycle3 },
  { id: 'cheshire', name: 'Cheshire', gifTap: CheshirCycle2, imageSrc: CheshirCat, gifIdle: CheshirCycle3 },

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
        digit.y -= 2;
        if (digit.opacity <= 0) digits.splice(index, 1);
      });
      animationFrameRefs.current = digits.length ? [requestAnimationFrame(render)] : [];
    };
    render();
    return () => animationFrameRefs.current.forEach((frameId) => cancelAnimationFrame(frameId));
  }, [digits]);

  useEffect(() => {
    const switchToIdle = setTimeout(() => setCurrentAnimation(selectedSkin.gifIdle), 5000);
    return () => clearTimeout(switchToIdle);
  }, [currentAnimation, selectedSkin]);

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

  // Анимация роботов по кругу вокруг кота
  {/*  const renderRobots = () => (
    <>
      <motion.div
        className="absolute"
        style={robotContainerStyle} 
        animate={{
          rotate: [0, 360], 
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        // Первый робот слева-внизу 
        <motion.img
          src={RobotAnimation}
          alt="Robot 1"
          style={robotStyle}
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

     // Второй робот справа-внизу 
        <motion.img
          src={RobotAnimation1}
          alt="Robot 2"
          style={{
            ...robotStyle,
            top: "50%", 
            left: "100%",
          }}
          animate={{
            rotate: [0, -360], 
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        // Третий робот сверху 
        <motion.img
          src={RobotAnimation2}
          alt="Robot 3"
          style={{
            ...robotStyle,
            top: "-50%", 
            left: "50%",
          }}
          animate={{
            rotate: [0, -360], 
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
  */}
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

  return (
    <div ref={containerRef} className="flex -ml-24">

      <div className=" items-center justify-center w-full h-full ">
        {/* Центральный кот */}
        <div className=" flex flex-col items-center justify-center w-full h-full">
          {renderCat()}
          <img src={catAppLogo} alt="Cat logo" style={logoStyle} />
          <img src={catAppLogoShadow} alt="Cat logo" style={logoShadowStyle} />
          {/*{renderRobots()} */}
          {renderSkinSelectors()}
        </div>

        {/* 
        <div className="flex justify-center items-center">

        </div>
        */}
      </div>


      Канвас для цифр
      <canvas
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
      />
    </div>
  );

};
const logoShadowStyle: CSSProperties = {
  width: '1200px',
  height: '1200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: "22rem",
  left: '52%',
  zIndex: '20',
  transform: 'translate(-50%, -50%)',

};
// Стили
const catStyle: CSSProperties = {
  width: '700px',
  height: '700px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginTop: '-4rem',
  zIndex: '21',
};

const logoStyle: CSSProperties = {
  width: '600px',
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-30rem',
  zIndex: '22',
  marginLeft: '2rem',
};

const imgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
};

const skinSelectorStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginTop: '-16rem',
  zIndex: '23',
  marginLeft: "3rem"
};

const circleButtonStyle: CSSProperties = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',

  backgroundColor: 'transparent',
  cursor: 'pointer',
};

const circleImgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
};

{/* 
const robotContainerStyle: CSSProperties = {
  width: '100px',
  height: '100px',
  position: 'absolute',
  top: '50%',
  left: '50%', 
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none', 
};


const robotStyle: CSSProperties = {
  position: 'absolute',
  width: '60px',
  height: '60px',
};
*/}

export default CatContainer;
