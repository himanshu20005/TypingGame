import React from "react";
import styles from './GameScreen.module.scss'

export default function Timer(props) {
return (
	<div className={props.active && styles.timer}>
	<span >
		{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
	</span>
	<span >
		{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
	</span>
	<span >
		{("0" + ((props.time / 10) % 100)).slice(-2)}
	</span>
	</div>
);
}
