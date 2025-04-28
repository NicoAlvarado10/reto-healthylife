"use client";

import { motion } from "framer-motion";

export default function Logo() {
   

    return (
        <motion.div
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <img src="/Healthylife.webp" className="h-20 w-20 object-contain" alt="logo" />
        </motion.div>
    );
}
