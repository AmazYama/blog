import React from 'react';
import { Header } from '../components';
import { Link } from "react-router-dom";
//import photo from '../image/identification2017.jpg'
import '../style/pages/Neuroscience.scss'; 
import MarkdownIt from 'markdown-it';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export class MarkdownDisplayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            effective: false,
        }
    }

    componentDidUpdate(){
        console.log('HOLA, COMPONENT UPDATE')
    }

    render() {
        var md = new MarkdownIt();
        var result = md.render('# markdown-it rulezz!');

        return (
            <div>{ ReactHtmlParser(result) }</div>
        );
    }
}

