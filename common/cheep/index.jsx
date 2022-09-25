import React from 'react';
import s from './styles.module.css'
import Link from "next/link";

const Cheep = ({title}) => {
    return (
        <Link href={'/city'}>
            <div className={s.cheep}>
                {title}
            </div>
        </Link>
    );
};

export default Cheep;