import React from "react";
import IdeaTextArea from "../../components/write/IdeaTextArea";
import { TextArea, Input, Button } from "../../style/atoms";
import { RightAligned } from "../../style/positions";

const IdeaTextAreaContainer = () => {
  return (
    <>
      <IdeaTextArea title="아이디어 이름" disable>
        <Input placeholder="아이디어의 이름을 정해주세요" />
      </IdeaTextArea>
      <IdeaTextArea title="간단요약" disable>
        <TextArea placeholder="구매욕구를 끌어올릴만한 짧은 요약을 적어주세요!" />
      </IdeaTextArea>
      <p>
        여기까지 구매자들이 볼 수 있는 내용입니다. 다음 작성하게 되는 입력칸은
        설정이 가능합니다.
      </p>
      <IdeaTextArea title="아이디어가 구현하고자 하는 목적">
        <TextArea placeholder="아이디어가 구현하고자 하는 목적은 무엇인가요?" />
      </IdeaTextArea>
      <IdeaTextArea title="경쟁사 대비 우위요소">
        <TextArea placeholder="아이디어가 가지고 있는 경쟁사 대비 우위요소는 무엇인가요?" />
      </IdeaTextArea>
      <IdeaTextArea title="차별화 전략">
        <TextArea placeholder="아이디어를 실현 시키기 위해 가지고 있는 차별화 전략을 적어주세요." />
      </IdeaTextArea>
      <IdeaTextArea title="시장분석">
        <TextArea placeholder="아이디어가 관련된 시장은 어떠한가요" />
      </IdeaTextArea>
      <RightAligned>
        <Button tertiary>취소</Button>
        <Button>미리보기</Button>
      </RightAligned>
    </>
  );
};

export default IdeaTextAreaContainer;
