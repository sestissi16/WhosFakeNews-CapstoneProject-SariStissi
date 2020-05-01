import React from 'react'
import './indexNewsAlerts.css'

const NewsAlerts = () => (
    <div id="newsAlertsPageContainer">
        <div id="newsAlertsContent">
            <div id="newsAlertsHeader">
                <h3><strong><em>Get News Alerts with Fake News Results even when you're away!</em></strong></h3>
            </div>
            <div id="newsAlertsBody">
                <div id="newsAlertsInfo">
                    <h2 id="newsAlertsInfoTitle">How does this work?</h2>
                    <ol>
                        <li>
                            Sign in and navigate back to this page. (If you're already signed in, go to the next step)
                        </li>
                        <li>
                            Choose what topics, people, or events you want to find news about.
                            Those topics, events, or people are keywords.
                        </li>
                        <li>
                            Add those keywords you came up with in step 2 below and click on save.
                        </li>
                        <li>
                            We will email you when we find something that relates to the words you added and have checked it for fake news.
                        </li>
                    </ol>
                </div>
                <div id="newsAlertsSelection">
                    <h1>Pick the topics to search for and see the results</h1>
                </div>
            </div>
        </div>
    </div>
)

export default NewsAlerts