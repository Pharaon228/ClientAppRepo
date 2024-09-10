import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CatContainer from './CatContainer';

function AppScreen() {
    const [showFirstMessage, setShowFirstMessage] = useState(true);
    const [showSecondMessage, setShowSecondMessage] = useState(false);
    const [showCatComponent, setShowCatComponent] = useState(false);
    useEffect(() => {
        // Показ второго сообщения через 2 секунды
        const secondMessageTimeout = setTimeout(() => {
            setShowSecondMessage(true);
        }, 2000);

        // Скрытие текстов и показ кота через 5 секунд
        const catComponentTimeout = setTimeout(() => {
            setShowFirstMessage(false);
            setShowSecondMessage(false);
            setShowCatComponent(true); // Показываем компонент с котом
        }, 5000);

        return () => {
            clearTimeout(secondMessageTimeout);
            clearTimeout(catComponentTimeout);
        };
    }, []);

    return (
        <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <AnimatePresence>
                    {showFirstMessage && (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                Welcome to CatAppGame
                            </h1>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {showSecondMessage && (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 1 }} // Задержка перед анимацией второго сообщения
                        >
                            <p className="text-lg md:text-2xl text-gray-400">
                                Let's get started!
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Показ компонента с котом после скрытия текстов */}
                <AnimatePresence>
                    {showCatComponent && (
                        <motion.div
                            className="flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <CatContainer /> {/* Компонент с котом */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default AppScreen;
