import React, { useState } from "react";
import * as S from "./nonsmart_accordian.style"


const NonSmartAccordian = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)

  }



  return (<>
    <S.Wrapper>
      <S.HeaderWrapper onClick={handleSetIsOpen}>
        I'm non-smart Accordion 2222
      </S.HeaderWrapper>
      <S.BodyWrapper isOpen={isOpen}>Body</S.BodyWrapper>
    </S.Wrapper>
    </>
  );
};

export default NonSmartAccordian;
