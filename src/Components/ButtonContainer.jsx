import React from "react";
import styles from './ButtonContainer.module.css';
import { Button } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingle } from "../Actions/Actions";

const ButtonContainer = () => {
    const state = useSelector((store) => store );
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(fetchSingle(id));
    }

    return (
        <div className={styles.buttonContainer}>
            {[...Array(state.allUsers.total)].map((e,i) =>
                <Button className={styles.blueButton} key={i} onClick={() => handleClick(i+1)}>{i+1}</Button>
            )}
        </div>
    );
}

export default ButtonContainer;