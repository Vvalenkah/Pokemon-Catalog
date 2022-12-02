import { useState } from 'react';
import './style.scss';

export const MenuCard = ({ name, img }) => {
    const [loadStatus, setLoadStatus] = useState(true);
    return (
        <>
            <div className="card">
                <img src={img} alt="name"/>
                <p>{name}</p>
            </div>
        </>
    )
}