import React from 'react';
import {Helmet} from 'react-helmet';

const Meta = (props) => {
    return(
        <Helmet>
            <meta charset='utf-8' />
            <title>{props.title}</title>
            {/* SEO 태그 */}
            <meta name='description' content={props.description} />
            <meta name='keywords' content={props.keywords} />
            <meta name='author' content={props.author} />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.description} />
            <meta property='og:image' content={props.image} />
            <meta property='og:url' content={props.url} />
            <meta charset='utf-8' />

            {/** 웹폰트 */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet"/>
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'React Example',
    description: 'React.js 예제 입니다.',
    keywords: 'React',
    author: '호쌤',
    url: window.location.href
};
export default Meta;