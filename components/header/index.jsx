import React, {useEffect, useState} from 'react';
import s from './styles.module.css'
import Image from "next/image";
import logo from '../../public/logo.png'
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {
    const [mouseInside, setMouseInside] = useState(false)
    const {pathname} = useRouter()

    return (
        <div className={s.header_box} id={'header'} style={{
            background: pathname === '/' ? !mouseInside ? 'rgba(255, 255, 255, 0.7)' : '#fff' : '#fff'
        }} onMouseEnter={() => setMouseInside(true)} onMouseLeave={() => setMouseInside(false)}>
            <Link href={'/'}>
                <div className={s.left}>
                    <Image src={logo} height={40} width={40}/>
                    <h3 className={s.h3}>Goa tours</h3>
                </div>
            </Link>
            <div className={s.middle}>
                <input style={{
                    background: pathname === '/' ? mouseInside ? '#b4b4b4' : '#fff' : '#b4b4b4'
                }} type="text" placeholder={'Choose city...'}/>
            </div>

            <div className={s.last}/>
        </div>
    );
};

export default Header;