import React from 'react';
import {Helmet} from 'react-helmet';

const Meta = (props) => {
    return(
        <Helmet>
            <meta charset='utf-8' />
            <title>{props.title}</title>

            <meta name='description' content={props.description} />
            <meta name='keywords' content={props.keywords} />
            <meta name='author' content={props.author} />

            <meta property='og:type' content='website' />
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.description} />
            <meta property='og:image' content={props.image} />
            <meta property='og:url' content={props.url} />

            <link rel="shortcut icon" href={props.image} type="image/>png" />
            <link rel="icon" href={props.image} type="image/>png" />
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'React 연습문제',
    description: 'React.js 예제 입니다.',
    keywords: 'React',
    author: '한주애',
    url: window.location.href,
};
export default Meta;