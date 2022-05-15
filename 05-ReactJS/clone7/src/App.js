/**
 * @filename: App.js
 * @description: 프로그램 시작
 * @author: 한주애 (juae0806@gmail.com)
 */

/** 패키지 참조 */
import React from 'react';
// 컴포넌트 참조
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return(
    <>
      <Header />
      <Main />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
