import config from '../config/app';
import React from 'react';
import Head from 'next/head';

const Header = (props) => {
    
    const meta = {
        title: 'Ryoulive',
        description: 'Get closer to the hottest celebrities, sports stars, and recording artists on the planet– ALL IN REAL-TIME LIVE.',
        image:"https://cdn.ryou.live/wl-assets/images/logo-blk.jpg"
    };

    const {title,description,image} = props;
    const {host} = config;

    return (
    <Head>

        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/> 
        <title>{title || meta.title}</title>
        
        <link rel="shortcut icon" href="//cdn.ryou.live/wl-assets/images/favicon.ico"/>

        <meta name="apple-itunes-app" content="app-id=984492366"/>
        <meta property="fb:app_id" content="927066667424936"/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@ryoulive"/>
        <meta name="twitter:url" content={host}/>
        <meta name="twitter:title" content={title || meta.title}/>
        <meta name="twitter:description" content={description || meta.description}/>
        <meta name="twitter:image" content={image || meta.image}/>

        <meta property="og:site_name" content={title || meta.title}/>
        <meta property="og:url" content={host}/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={title || meta.title}/>
        <meta property="og:description" content={description || meta.description}/>
        <meta property="og:image" content={image || meta.image}/>
        <meta property="og:image:height" content="315"/>
        <meta property="og:image:width" content="828"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="/static/css/video-react.css" />

    </Head>
    );
}


export default Header;