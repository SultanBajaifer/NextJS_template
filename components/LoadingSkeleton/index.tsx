import React from 'react';
import styles from './LoadingSkeleton.module.css';

const Spinner: React.FC = () => {
    return (
        <div className={styles.spinner}></div>
    );
};

export default Spinner;
