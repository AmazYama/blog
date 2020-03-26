import React from 'react';
import { Link } from "react-router-dom";
import '../style/components/_Header.scss';
export function Header() {

    return (
        <div className="header">
            

            <p className="logo">Tasha's Tech Log</p>
            <ul className="category">
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/">Codes</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>

            </ul>
        </div>
    )
}


