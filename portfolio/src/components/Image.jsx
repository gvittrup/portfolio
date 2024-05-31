import React from 'react';
import { motion } from 'framer-motion'

export const ImageCard = ({ image }) => {
    return (
        <motion.div
            className='flex justify-center'
            initial={{
                opacity: 0,
                y: 75
            }}
            whileInView={{
                opacity: 1,
                y: 0             
            }}
            whileHover={{
                scale: 1.5,
                rotate: 2,
                transition: { duration: 0.25, type: 'spring' }
            }}
            transition={{ duration: 0.25 }}
            >
            <img src={image} className='border-2 border-stone-100 rounded-lg transition ease-in-out over:drop-shadow-2xl hover:z-20' />
        </motion.div>
    )
}

export default ImageCard;