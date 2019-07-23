import React from 'react'

export default function OneDino({color, img, handleDinoPicking}) {
    return (
        <div className="dino" onClick={() => handleDinoPicking(color)}>
            <img src={img} alt={`a nice ${color} dino`}/>
        </div>
    )
}