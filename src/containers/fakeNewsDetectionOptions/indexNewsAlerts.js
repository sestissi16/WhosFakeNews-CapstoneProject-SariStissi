import React from 'react'
import './indexNewsAlerts.css'

const NewsAlerts = () => (
    <div id="newsAlertsPageContainer">
        <div id="newsAlertsLeftSideBar"></div>
        <div id="newsAlertsContent">
            <div id="newsAlertsHeader">
                <h1>News Alerts Page</h1>
            </div>
            <div id="newsAlertsBody">
                <p>
                    This is where you can set up news alerts and 
                    have it checked throught the automatic fake news detector
                </p>
            </div>
        </div>
        <div id="newsAlertsRightSideBar"></div>
    </div>
)

export default NewsAlerts