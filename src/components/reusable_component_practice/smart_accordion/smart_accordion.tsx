import React, { useState, createContext, useContext } from "react";
import * as S from "./smart_accordion.style";




type SmartAccordionProps ={
  children: React.ReactNode;
}

type SmartAccordionHeaderProps ={
  children: React.ReactNode;
  className?:string;
}
type SmartAccordionBodyProps ={
  children: React.ReactNode;
  className?:string;


}

export const SmartAccordion = ({children}:SmartAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen
  };

  return (
    <AccordionContext.Provider value={value}>
      <S.Wrapper >{children}</S.Wrapper>
    </AccordionContext.Provider>
  );
};

type AccordionContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>|undefined;
}



export const yes:AccordionContextType = {isOpen: false, setIsOpen: undefined} 


const AccordionContext = createContext<AccordionContextType>(yes);
const useAccordionContext = () => useContext(AccordionContext);



export const SmartAccordionHeader = ({children, className}:SmartAccordionHeaderProps) => {
  const { isOpen, setIsOpen } = useAccordionContext();


  const handleClick:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()

    if(setIsOpen){
      setIsOpen(!isOpen)
    }else{
      console.log('no setIsOpen')
    }
  }


  return (
    <S.HeaderWrapper
      onClick={handleClick}
      className={className}
    >
      {children}
    </S.HeaderWrapper>
  );
};








export const SmartAccordionBody = ({children, className}:SmartAccordionBodyProps) => {
  const { isOpen } = useAccordionContext();

  return (
    <S.BodyWrapper isOpen={isOpen} className={className}>
      {children}
    </S.BodyWrapper>
  );
};

export default SmartAccordion;
