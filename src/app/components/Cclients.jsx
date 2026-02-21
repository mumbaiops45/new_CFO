import React from 'react'
import ClientsCard from './ClientsCard';
import "../styles/cclients.modal.css"

const Cclients = () => {

    const stats = [
        { number: "100+", label: "Clients Served" },
        { number: "100000+", label: "Invoices Processed Per Month" },
        { number: "500+", label: "Completed Projects" },
        { number: "5000+", label: "Reconciliations Per Month" },
        { number: "150+", label: "Team Size" }, 
    ];

    return (
    <div className="stats-container-wrapper" >
        <div className="stats-container">
            <div className="stats-scroll">
                {stats.map((item, index) => (
                    <ClientsCard 
                        key={index} 
                        number={item.number} 
                        label={item.label} 
                    />
                ))}
            </div>
        </div>
    </div>
)

}

export default Cclients


