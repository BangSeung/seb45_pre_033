import React from "react";
import styled from "styled-components";
import Qusetion from "./Question";

const Main = styled.div`
  max-width: 1096px;
  display: flex;
  flex-direction: column;
`;

const AnswerContainer = styled.div`
  width: 1096px;
  min-height: 700px;
  size: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  
`;

const MyPageAnswer = ({ questions }) => {
  return (
    <>
    {questions?<Main>
      {questions.length===0?<AnswerContainer>아직 작성한 질문이 없습니다.</AnswerContainer>:questions.map((el,idx)=><Qusetion key={idx} question={el}/>)}
    </Main>:<></>}
    </>
  );
};

export default MyPageAnswer;
