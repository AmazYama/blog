import React from 'react';
import { Header } from '../components';
import { Link } from "react-router-dom";
//import photo from '../image/identification2017.jpg'
import '../style/pages/Neuroscience.scss'; 

export class MarkdownDisplayer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div> 
            node.js, "classic" way:
            var MarkdownIt = require('markdown-it'),
            md = new MarkdownIt();
            var result = md.render('# markdown-it rulezz!');

            // node.js, the same, but with sugar:
            var md = require('markdown-it')();
            var result = md.render('# markdown-it rulezz!');

            // browser without AMD, added to "window" on script load
            // Note, there is no dash in "markdownit".
            var md = window.markdownit();
            var result = md.render('# markdown-it rulezz!');

                </div>

            </React.Fragment>
        );
    }
}