import React from "react";
import styles from './Loader.module.css';
import { Oval } from "react-loader-spinner";
import { Container } from "reactstrap";

const Loader = () => {
    const data = [
        {
            Component: Oval,
            props: {
                color: "#0C4D71",
                height: 100,
                width: 110
            },
            name: "Oval"
        }
    ];

    return (
        <Container>
            <div className={styles.overlay} >
                <div className={styles.loader}>
                    {data.map((loader, index) => (
                        <div
                            data-tip={loader.name}
                            data-for="happyFace"
                            key={loader.name + index}
                            className="loaderBox"
                        >
                            <loader.Component {...loader.props} />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Loader;