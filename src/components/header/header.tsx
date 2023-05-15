import * as React from 'react';
import './style.scss';
import { IHeader } from '../../utils/interfaces';


export function Header ({buttons,desc,desc_bottom,header,profile_photo}: IHeader) {
  return (
    <header>
      <div className="container">
        <div className="text">
            <h1>{header}</h1>
            <p className='desc'>{desc}</p>
            <p className='desc-bottom'>{desc_bottom}</p>
            <nav className='buttons'>
              <button className='contact'>{buttons.contact_text}</button>
              <a href={buttons.github_link} className="github"></a>
            </nav>
        </div>
        <div className="img"></div>

        <div className="elements">
          <div className="icon html"></div>
          <div className="icon css"></div>
          <div className="icon bt"></div>
          <div className="icon js"></div>
          <div className="icon react"></div>
          <div className="icon git"></div>
          <div className="icon next"></div>
          <div className="icon sass"></div>
        </div>s
      </div>

      
    </header>
  );
}
