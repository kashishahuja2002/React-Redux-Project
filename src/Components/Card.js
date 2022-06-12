import React from "react";
import styles from './Card.module.css';
import { useSelector } from 'react-redux';
    
const Card = () => {
    const state = useSelector((store) => store );

    return(
        <div>
            <div className={styles.avatar}>
                <img src={state.singleUser.avatar} alt="Avatar" />
            </div>
            <h2>{state.singleUser.first_name} {state.singleUser.last_name}</h2>
            <h4 className={styles.email}>{state.singleUser.email}</h4>
        </div>
    );
}

export default Card;