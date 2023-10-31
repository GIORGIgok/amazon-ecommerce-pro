// See Personalized Recommendations - Above Footer;
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';


const PERSONAL_RECS_ARTICLE = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 11.625rem;
    /* 186px */
    .pers-recs-wrapper {
    border: 1px solid #dddddd;
    border-radius: 0.313rem /* 5px */;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    } span {
        font-size: 0.813rem;
        /* 13px */
        font-weight: 600;
    }
    #sign-in {
    width: 14.375rem;
    line-height: 1.625rem /* 26px */;
    margin-block: 0.313rem /* 5px */;
    text-align: center;
    font-size: 0.75rem; /* 12px */
    font-weight: 700;
    text-decoration: none;
    color: black;
    text-shadow: 0 1px 0 #ffe093;
    border: 1px solid #e6a400;
    border-radius: 0.313rem /* 5px */;
    background: rgb(255,195,40);
    background: -moz-linear-gradient(0deg, rgba(255,195,40,1) 25%, rgba(255,217,120,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(255,195,40,1) 25%, rgba(255,217,120,1) 100%);
    background: linear-gradient(0deg, rgba(255,195,40,1) 25%, rgba(255,217,120,1) 100%);
    }
    .new-customer-div {
    font-size: 0.688rem;
    /* 11px */
    & > a {
    text-decoration: none;
    color: #007185;
    } 
    & > a:hover {
    color: #c7511f;
    }
}`

function PersonalizedRecommendations() {
    return (
        <PERSONAL_RECS_ARTICLE>
            <div className='pers-recs-wrapper'>
                <span>See personalized recommendations</span>
                <Link to="/sign-in" id='sign-in'>Sign In</Link>
                <div className='new-customer-div'>
                    New customer?
                    <Link to="/register" id="pers-recs-start-here"> Start here.</Link>
                </div>
            </div>
        </PERSONAL_RECS_ARTICLE>
    )
}

export default PersonalizedRecommendations;