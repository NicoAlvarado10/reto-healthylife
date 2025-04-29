"use client";

import { motion } from "framer-motion";

export default function Logo() {
   

    return (
        <motion.div
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-lg font-semibold italic  text-green-500 flex flex-col justify-center">HEALTHYLIFE <br /><span className="text-amber-500">FRUITS</span></span>
        </motion.div>
    );
}
