import React from 'react';
import { Link } from "react-router-dom";
import '../style/components/_Header.scss';
export class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            effective: false,
        }
    }

    render(){ 
        return(      
        <div className="header">
            <p className="logo">Tasha's Tech Log</p>

            <ul className="category">
                <li>
                    <Link to="/neuroscience">Neuroscience</Link>

                </li>
                <li>
                    <Link to="/blogs">My Thoughts</Link>

                </li>
                <li>
                    <Link to="/gallery">Industry Engineering</Link>

                </li>
                <li>
                <Link to="/paper">Interesting Papers</Link>

                </li>
                <li>
                    <Link to="/about">About Me</Link>

                </li>

            </ul>
            <button onClick={this.changeEffective}>button</button>

            {this.state.effective? <p>True</p>:<h>False</h>}
        </div>
        )
    }
}


