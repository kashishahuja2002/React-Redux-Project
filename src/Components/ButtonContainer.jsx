import React from "react";
import styles from './ButtonContainer.module.css';
import { Button } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingle } from "../Actions/Actions";

const ButtonContainer = () => {
    const state = useSelector((store) => store );
    const dispatch = useDispatch();

    // Single event listener for all buttons
    const handleClick = (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        var id = event.target.value;
        dispatch(fetchSingle(id));
    }

    return (
        <div onClick={handleClick} className={styles.buttonContainer}>
            {[...Array(state.allUsers.total)].map((e,i) =>
                <Button className={styles.blueButton} key={i} value={i+1}>{i+1}</Button>
            )}
        </div>
    );
}

export default ButtonContainer;