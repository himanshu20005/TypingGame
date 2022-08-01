import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const GameStart = ({seconds, setSeconds, miliSeconds, setMiliSeconds}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/gamescreen")
        setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
    }
  return (
    <Button variant="contained" onClick={handleClick}>Start Game</Button>
  )
}

export default GameStart