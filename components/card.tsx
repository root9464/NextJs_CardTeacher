'use client'
import { motion } from "framer-motion"
import { useState } from "react";
import '../app/globals.css'
const Card = ({props}:any) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <motion.div layout className="parent" data-isOpen={isOpen} initial={{ borderRadius: 50 }} onClick={() => setIsOpen(!isOpen)}>
            <motion.div layout className="child" data-isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>


                <div data-isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className="block-content">
                    <h1 className="heading">{props.name}</h1>
                </div>
        </motion.div>
        
    )
}
export {Card}