import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>DealR Updates:</h2>
                <InfoIcon />
            </div>

            {newsArticle("Andela is recruiting", "Requirements: Angular or Vue")}
            {newsArticle("Paystack is Hiring", "Position: FullStack Developer")}
            {newsArticle("Patricia is recruiting", "Requirements: NodeJs or Laravel")}
            {newsArticle("Microsoft is in need of a senior developer", "Position: BackEnd Developer")}
            {newsArticle("Google is in need of a UI/UX Dev", "Knowledge: Figma")}
            {newsArticle("InterSwitch is hiring", "Requirements: Python, php")}
        </div>
    )
}

export default Widgets
