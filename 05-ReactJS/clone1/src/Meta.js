/**
 * @filename : Meta.js
 * @description : <head> 태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author : 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from 'react';
// SEO 처리 기능 패키지
import {Helmet, HelmetProvider} from 'react-helmet-async';

/**
 * SEO 처리 컴포넌트
 * @params props
 * @return {JSX.Element}
 */

const Meta = (props) => {
    return(
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:url' content={props.url} />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string, url: string}}
 */
Meta.defaultProps = {
    title: 'W3.CSS Template',
    description: 'React.js로 구현한 레이아웃 데모 페이지 입니다.',
    keywords: 'React, layout, demo',
    author: '한주애',
    url: window.location.href
};

export default Meta;