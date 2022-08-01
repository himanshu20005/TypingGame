import React from "react";
import { Button } from '@mui/material'
import styles from './GameScreen.module.scss'
export default function ControlButtons(props) {
const StartButton = (
    <button onClick={props.handleStart} className={styles.buttonStyles}>Start Game</button>
);
const ActiveButtons = (
	<div className={styles.controllerButtons}>
        <button onClick={props.handleReset} className={styles.buttonStyles}>Restart</button>
        <button onClick={props.handlePauseResume} className={styles.buttonStyles}>
            {props.isPaused ? "Resume" : "Pause"}
        </button>
	</div>
);

return (
	<div className={styles.buttonContainer}>
	<div>{props.active ? ActiveButtons : StartButton}</div>
	</div>
);
}
