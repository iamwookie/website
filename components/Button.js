import { motion } from 'framer-motion';

export default function Button(props) {
    return (
        <motion.button
            className='rounded-lg px-2 border-2 hover:bg-white hover:text-black'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            {...props}
        />
    );
}
