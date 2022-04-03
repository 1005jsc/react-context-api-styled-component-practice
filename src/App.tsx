import React, { Component } from 'react';
import NonSmartAccordian from './components/reusable_component_practice/nonsmart_accordian/nonsmart_accordian';
import SmartAccordion, { SmartAccordionBody, SmartAccordionHeader } from './components/reusable_component_practice/smart_accordion/smart_accordion';
import About from './components/usecontext_practice/about';
import Profile from './components/usecontext_practice/profile';
import UserStore from './components/usecontext_practice/user_store';
import { Route, Routes } from 'react-router-dom';
import  styled  from 'styled-components';

// 재사용 컴포넌트 만들기
// useContext로 하위컴포넌트까지 전달될수 있는 




const App = () =>{

  return <section>
    

    <NonSmartAccordian />

    <SmartAccordion>
        <SmartAccordionHeader>I'm smart Accordion</SmartAccordionHeader>
        <SmartAccordionBody>Body</SmartAccordionBody>
      </SmartAccordion>
      <SmartAccordion>
        <StyledSmartHeader>I'm smart Accordion222</StyledSmartHeader>
        <StyledSmartBody>Body</StyledSmartBody>
      </SmartAccordion>
      <SmartAccordion>
        <StyledSmartHeader><div className="">hello</div></StyledSmartHeader>
        <StyledSmartBody>Body</StyledSmartBody>
      </SmartAccordion>
      <SmartAccordion>
        <StyledSmartHeaderYellow>yes</StyledSmartHeaderYellow>
        <StyledSmartBodyYellow>No</StyledSmartBodyYellow>

      </SmartAccordion>

  </section>

}



// const App = () =>{

// return <>
// <UserStore>
//   <Routes>
//     <Route path='/' element={<About/>}/>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/profile' element={<Profile/>}/>


//   </Routes>

//   </UserStore> 

//   </>
  

// }
export default App;


const StyledSmartHeader = styled(SmartAccordionHeader)`
  background-color: green;
`;

const StyledSmartBody = styled(SmartAccordionBody)`
  border: 1px solid green;
`;

const StyledSmartBodyYellow = styled(SmartAccordionBody)`
border: 1px solid yellow
`;

const StyledSmartHeaderYellow = styled(SmartAccordionHeader)`

background-color: yellow;`




















