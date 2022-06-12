import React from "react";
import styles from './HomeContainer.module.css';
import { Container} from "reactstrap";
import Card from "./Card";
import ButtonContainer from "./ButtonContainer";

const HomeContainer = () => {
    useEffect( () => { 
        console.log("one")
    }, [] );
    
    return(
        <Container>
            <div className={styles.Home}>
                <div className={styles.blueHome}>
                    <div className={`text-center ${styles.whiteHome}`}>
                        <Card />
                        {/* <div>
                            <h2>Click any button to get details of user.</h2>
                        </div> */}
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