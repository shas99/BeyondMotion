import React from 'react';
import { motion, MotionConfig } from 'framer-motion'; // Import MotionConfig

export default function TestAnimation() {
  return (
    // reducedMotion="never" forces animations to play even on Ubuntu/Mobile
    <MotionConfig reducedMotion="never"> 
      
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          style={{ 
            width: 100, 
            height: 100, 
            background: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}
        >
          Spinning
        </motion.div>
      </div>

    </MotionConfig>
  );
}