import React, { useEffect, useState } from 'react'
import ControlButtons from './ControlButtons';
import Timer from './Timer';
import { Typography } from '@mui/material';
import styles from './GameScreen.module.scss'
const GameScreen = ({ prevTime, setPrevTime }) => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const [randomCharacter, setRandomCharacter] = useState(alphabet[Math.floor(Math.random() * alphabet.length)]);
    const [value, setValue] = useState("");
    const [currentTime , setCurrentTime] = useState(0)
    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setValue("")
        setTime(0);
    };

    useEffect(() => {
        if (prevTime === 0 || time < prevTime) setPrevTime(time)
    }, [])

    const handleChange = (e) => {

        if (e.target.value?.length < 20) {
            setIsActive(true);

            if (e) setValue(e.target.value)
            if (e.target.value && randomCharacter === e.target.value.charAt(e.target.value.length - 1)) {
                setRandomCharacter(alphabet[Math.floor(Math.random() * alphabet.length)])
            }
        }
        else {
            setCurrentTime(time);
            handleReset();
        }
        e.target.value?.length === 20 && (prevTime === 0 ? setPrevTime(time) :
            setPrevTime(prevTime > time ? time : prevTime))
    }
    return (
        <div className={styles.root}>
            <Typography align='center' variant='h2' className={styles.heading}>TYPE THE ALPHABET</Typography>
            <Typography align='center' variant='h5' className={styles.subheading}>Typing game to see how fast you type. Timer starts when you do :)</Typography>
            <div>
                

            </div>
            <div className={styles.gameContainer}>
                <Typography align='center' variant='h4' className={styles.randomCharater}>{isActive ? !isPaused ? randomCharacter.toUpperCase() : 'Paused' : currentTime > prevTime ? 'Fail :(' : prevTime !== 0 ? 'Success!' : "Ready!"}</Typography>
                    <div className={styles.inputContainer}>
                {isActive && <input 
                    className={styles.inputField}
                    placeholder="Press the key shown"
                    disabled={isPaused}
                    onChange={(e) => {
                        handleChange(e)
                    }} 
                    value={value} 
                />}
                </div>
            </div>


            {isActive && <Timer time={time} active={isActive}/>}
                <ControlButtons
                    active={isActive}
                    isPaused={isPaused}
                    handleStart={handleStart}
                    handlePauseResume={handlePauseResume}
                    handleReset={handleReset}
                />
            {!isActive && currentTime !==0 && <div className={styles.currentTime}>
                Time:&nbsp; <Timer time={currentTime} active={isActive}/>
                </div>}
            {!isActive && <div className={styles.previousBest}>
                My Best Time:&nbsp;  <Timer time={prevTime} active={isActive}/>
                </div>}
        </div>
    )
}

export default GameScreen