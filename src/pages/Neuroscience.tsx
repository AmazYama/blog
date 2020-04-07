import React from 'react';
import { Header } from '../components';
import { Link } from "react-router-dom";
//import photo from '../image/identification2017.jpg'
import '../style/pages/Neuroscience.scss'; 

export class Neuroscience extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='NeuroTopics'> Topics <br/>
                    <div className='NeuroCatagory'>
                        <Link to="/snn">Spiking Neuronetwork</Link><br/>

                        <Link to="/hippo">Hippocampus</Link><br/>

                        <Link to="/cogn">Cognitive System</Link><br/>
                        
                    </div>

                </div>

            </React.Fragment>
        );
    }
}