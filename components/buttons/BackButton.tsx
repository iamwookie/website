import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function BackButton(props: any) {
    return (
        <motion.button
            className="absolute top-4 left-4 text-md"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
            {...props}
        >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </motion.button>
    );
}
