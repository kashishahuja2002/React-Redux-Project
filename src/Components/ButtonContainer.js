import React from "react";
import styles from './ButtonContainer.module.css';
import { Button } from "reactstrap";
import { useEffect } from "react";

const ButtonContainer = () => {
    return (
        <div className={styles.buttonContainer}>
            <Button className={styles.blueButton}>1</Button>
        </div>
    );
}

export default ButtonContainer;