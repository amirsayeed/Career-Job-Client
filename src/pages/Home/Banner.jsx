import React from 'react';
import { motion } from "motion/react";
import team1 from '../../assets/corporate-workers-brainstorming-together.jpg'
import team2 from '../../assets/that-s-how-success-looks-like-photo-young-team-classical-clothes-celebrating-success-while-holding-drinks-modern-good-lighted-office.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex-1'>
                <motion.img
                        src={team1}
                        animate={{y: [50, 100, 50]}}
                        transition={{duration: 5, repeat: Infinity}}
                        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{x: [100, 150, 100]}}
                        transition={{duration: 10, delay:3, repeat: Infinity}}
                        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
            </div>
            <div className='flex-1'>
            <motion.h1 initial={{scale: 0}} 
            animate={{
                scale: 1,
                transition:{duration: 4} 
                }}
                className="text-5xl font-bold">Remote <motion.span
                animate={{
                 color: ['#ff5733', '#33ff33', '#8a33ff'],
                transition: { duration: 2, repeat: Infinity }
                }}
                >Jobs </motion.span>for you!</motion.h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;