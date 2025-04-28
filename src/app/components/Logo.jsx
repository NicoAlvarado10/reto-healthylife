"use client";

import { motion } from "framer-motion";

export default function Logo() {
   

    return (
        <motion.div
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            {/* Text Part */}
            <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-lime-600 text-transparent bg-clip-text">
                    HealthyLife
                </span>
                <span className="text-lg font-semibold text-yellow-500">
                    Fruits
                </span>
                <span className="text-xs text-gray-950 ">
                    Ecológico · Natural · Directo
                </span>
            </div>
        </motion.div>
    );
}
