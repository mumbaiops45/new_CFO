'use client';
import React, { useEffect, useState } from 'react';

const ClientsCard = ({ number, label }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let target = parseInt(number.replace(/\D/g, '')); 
        let duration = 2000; 
        let intervalTime = 50; 
        let increment = Math.ceil(target / (duration / intervalTime));
        let current = 0;
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            setCount(current);
        }, intervalTime);

        return () => clearInterval(counter);
    }, [number]);

   
    const displayNumber = number.includes('+') ? `${count}+` : count;

    return (
        <div className="stat-card">
            <h2>{displayNumber}</h2>
            <p>{label}</p>
        </div>
    );
};

export default ClientsCard;
