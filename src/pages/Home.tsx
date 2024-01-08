/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-07-24 12:14 (GMT+0900)
 */
import { Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export default function Home() {
  const [playTime, setPlayTime] = useState(false)
  setTimeout(() => setPlayTime(true), 5000)
  return (
    <Paper className="homeContainer">
      <div className="homeCenter">
        <Button disabled={!playTime} component={Link} to="/tictactoe">
          Play
        </Button>
        <div style={{ marginLeft: '20px' }}>
          <motion.svg fill="white" width="600" height="600" viewBox="0 0 600 600" initial="hidden" animate="visible">
            <motion.circle cx="100" cy="100" r="80" stroke="#ff0055" variants={draw} custom={1} />
            <motion.line x1="220" y1="30" x2="360" y2="170" stroke="#00cc88" variants={draw} custom={1} />
            <motion.line x1="220" y1="170" x2="360" y2="30" stroke="#00cc88" variants={draw} custom={1.5} />
            <motion.circle cx="500" cy="100" r="80" stroke="#ff0055" variants={draw} custom={2} />
            <motion.line x1="220" y1="200" x2="360" y2="340" stroke="#00cc88" variants={draw} custom={2.5} />
            <motion.line x1="220" y1="340" x2="360" y2="200" stroke="#00cc88" variants={draw} custom={3} />
            <motion.circle cx="100" cy="440" r="80" stroke="#ff0055" variants={draw} custom={3.5} />
            <motion.line x1="220" y1="370" x2="360" y2="510" stroke="#00cc88" variants={draw} custom={4} />
            <motion.line x1="220" y1="510" x2="360" y2="370" stroke="#00cc88" variants={draw} custom={4.5} />
            <motion.line x1="290" y1="540" x2="290" y2="0" stroke="#000000" variants={draw} custom={5} />
          </motion.svg>
        </div>
      </div>
    </Paper>
  )
}
