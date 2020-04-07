import React from 'react';
import { Header } from '../components';
import photo from '../image/identification2017.jpg'
import '../style/pages/AboutMePage.scss'; 

export class AboutMePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <img className='ProfileImage' src = {photo} alt="ID photo"></img>
                <div className='ProfileHead'> About Me </div>
                <div className='ProfileText'>   <br/>
                     <br/>
                    
                    Neuroscience; Cognitive System; Robotics; Automobile Industry <br/> 
                    <br/>   

                    Self introduction: I am a pragmatic idealist. 
                    <br/> 

                    Why pragmatic? Because I believe human’s every decision, or behaviour is based on Bayes rule. Our past (prior), and the environment (random number) shape us, Basically, no freewill.  <br/> 
                    <br/> 
                    Why idealist? Because I believe I can achieve my goal even if I have no freewill. How? By using the power of random number. If we increase the amount of letting ourself face decisions in life, we increase the chance to gather more information, which can help us optimise our life process. I am passionate about optimising process from industry engineering to cooking.<br/>  
                     
                    </div>

            </React.Fragment>
        );
    }
}