import React from 'react';
import { Header } from '../components';
import { Link } from "react-router-dom";
//import photo from '../image/identification2017.jpg'
import '../style/pages/Neuroscience.scss'; 
import MarkdownIt from 'markdown-it';


export class MarkdownDisplayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            effective: false,
        }
    }


    componentDidMount(){
        console.log('markdown')
        // var md = window.markdownit();
        // var result = md.render('# markdown-it rulezz!');
        var MarkdownIt = require('markdown-it'),
        md = new MarkdownIt();
        var result = md.render('# markdown-it rulezz!');
    }

    componentDidUpdate(){
        console.log('HOLA, COMPONENT UPDATE')
    }

    render() {
        return (
            <React.Fragment>
                <div> 
                </div>

            </React.Fragment>
        );
    }
}