import React from "react";
import styles from './HomeContainer.module.css';
import { Container} from "reactstrap";
import Card from "./Card";
import ButtonContainer from "./ButtonContainer";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAll } from "../Actions/Actions";

const HomeContainer = () => {
    const state = useSelector((store) => store );
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchAll());
    }, [] );
    
    return(
        <Container>
            <div className={styles.Home}>
                <div className={styles.blueHome}>
                    <div className={`text-center ${styles.whiteHome}`}>
                        {Object.keys(state.singleUser).length !== 0 
                            ? <Card />
                            : <div>
                                <h2>Click any button to get details of user.</h2>
                            </div>
                        }
                    </div>
                    <div className={styles.whiteHome}>
                        <ButtonContainer />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default HomeContainer;