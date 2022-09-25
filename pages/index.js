import s from '../styles/Home.module.css'
import Cheep from "../common/cheep";
import Link from "next/link";

export default function Home() {

    return (
        <div className={s.main}>
            <div className={s.main_box}>
                <h1>Search tours in Goa</h1>
                <p>You can choose any Goa city and find a tour suitable for you</p>
            </div>
            <div className={s.cheep_box}>
                <Cheep title={'Arambol'}/>
                <Cheep title={'Morjim'}/>
                <Cheep title={'Delhi'}/>
                <Cheep title={'Pernem'}/>
                <Cheep title={'Mapusa'}/>
                <Cheep title={'Margao'}/>
            </div>
        </div>
    )
}
