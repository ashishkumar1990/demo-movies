/**
 * Created by Ashish on 30-09-2020.
 */

import React from 'react'
import faceBookIcon from './asserts/facebook-white.svg'
import instagramIcon from './asserts/instagram-white.svg'
import twitterIcon from './asserts/twitter-white.svg'
import appstore from './asserts/app-store.svg'
import playstore from './asserts/play-store.svg'
import windowsstore from './asserts/windows-store.svg'

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer-content">
              <span className="span"> Home |</span>
              <span  className="span"> Terms and Conditions |</span>
              <span  className="span"> Privacy Policy |</span>
              <span  className="span"> Collection Statement |</span>
              <span  className="span"> Help |</span>
              <span  className="span"> Manage Account</span>
          </div>
            <div className="copyRight">
             Copyright © 2020 DEMO Streaming.All Rights Reserved.
            </div>
            <div  style={{ display: 'inline-block',width:'100%'}}>
                <div style={{float:'left',marginLeft: 45}}>
               <img style={{marginRight:20}} src={faceBookIcon} height={25} width={25}/>
               <img  style={{marginRight:20}} src={twitterIcon} height={25} width={25}/>
                <img   style={{marginRight:20}} src={instagramIcon} height={25} width={25}/>
                </div>
                <div style={{float:'right',marginRight: 45}}>
                    <img style={{marginRight:20}} src={appstore}  width={100}/>
                    <img  style={{marginRight:20}} src={playstore}  width={100}/>
                    <img   style={{marginRight:20}} src={windowsstore}  width={100}/>
                </div>
            </div>

        </div>
    );
};

export default Footer

