import React from 'react';
import s from './styles.module.css'
const Footer = () => {
    return (
        <div className={s.footer}>
          <div className={s.left}>
              <h2>LOCATION</h2>
              <p>Goa, India</p>
          </div>
          <div>
              <h2>SOCIAL NETWORK</h2>
              <p>Telegramm</p>
              <p>WatsUp</p>
              <p>Instagram</p>
          </div>

        </div>
    );
};

export default Footer;