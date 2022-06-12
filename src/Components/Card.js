import React from "react";
import styles from './Card.module.css';

const Card = () => {
    return(
        <div>
            <div className={styles.avatar}>
                <img src="https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="Avatar" />
            </div>
            <h2>FirstName LastName</h2>
            <h4 className={styles.email}>EmailAddress@gmail.com</h4>
        </div>
    );
}

export default Card;