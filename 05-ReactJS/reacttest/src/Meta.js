import React, { memo } from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

import sample from './assets/img/sample.png';

const Meta = memo((props) => {
    return (
        <HelmetProvider>
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
                <link rel="shortcut icon" href={props.image} type="image/png" />
                <link rel="icon" href={props.image} type="image/png" />
            </Helmet>
        </HelmetProvider>
    );
});
Meta.defaultProps = {
    title: 'Covid19 연동',
    description: 'React.js로 만든 Redux활용 Covid19 연동 예제 입니다.',
    keywords: 'React, Redux, Covid19',
    author: '한주애',
    image: sample,
    url: window.location.href
}

export default Meta;