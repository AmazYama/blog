import React from 'react';
import { Header } from '../components';
import photo from '../image/identification2017.jpg'
import '../style/pages/AboutMePage.scss'; 

export class AboutMePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <img className='ProfileImage' src = {photo} alt="ID photo"></img>
                <span className='ProfileText'> About Me  <br/>
                Life Goal: Implement neuroscience into industry application</span>


        
            </React.Fragment>
        );
    }
}