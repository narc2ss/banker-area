import React, { useState } from "react";
import IdeaTextArea from "../../components/write/IdeaTextArea";
import { TextArea, Input, Button, RouteLink } from "../../style/atoms";
import { RightAligned } from "../../style/positions";
import { useInput } from "../../util";

const IdeaTextAreaContainer = () => {
  const ideaName = useInput("");
  const shortDescription = useInput("");
  const inconvenient = useInput("");
  const purpose = useInput("");
  const competitiveEdge = useInput("");
  const differentiation = useInput("");
  const marketAnalysis = useInput("");
  return (
    <>
      <IdeaTextArea
        title="아이디어 이름"
        data={ideaName.value}
        type="ideaName"
        disable
      >
        <Input
          value={ideaName.value}
          onChange={ideaName.onChange}
          placeholder="아이디어의 이름을 정해주세요"
        />
      </IdeaTextArea>
      <IdeaTextArea
        title="간단요약"
        data={shortDescription.value}
        type="shortDescription"
        disable
      >
        <TextArea
          value={shortDescription.value}
          onChange={shortDescription.onChange}
          placeholder="구매욕구를 끌어올릴만한 짧은 요약을 적어주세요!"
        />
      </IdeaTextArea>
      <p>
        여기까지 구매자들이 무료로 볼 수 있는 내용입니다. 다음 작성하게 되는
        입력칸은 유료설정이 가능합니다.
      </p>
      <IdeaTextArea
        title="아이디어의 부재로 인하여 불편한점"
        data={inconvenient.value}
        type="motivation"
      >
        <TextArea
          value={inconvenient.value}
          onChange={inconvenient.onChange}
          placeholder="아이디어의 부재로 인하여 생기는 불편한 점은 무엇인가요?"
        />
      </IdeaTextArea>
      <IdeaTextArea
        title="아이디어가 구현하고자 하는 목적"
        data={purpose.value}
        type="need"
      >
        <TextArea
          value={purpose.value}
          onChange={purpose.onChange}
          placeholder="아이디어가 구현하고자 하는 목적은 무엇인가요?"
        />
      </IdeaTextArea>
      <IdeaTextArea
        title="경쟁사 대비 우위요소"
        data={competitiveEdge.value}
        type="strategy"
      >
        <TextArea
          value={competitiveEdge.value}
          onChange={competitiveEdge.onChange}
          placeholder="아이디어가 가지고 있는 경쟁사 대비 우위요소는 무엇인가요?"
        />
      </IdeaTextArea>
      <IdeaTextArea
        title="차별화 전략"
        data={differentiation.value}
        type="competitiveness"
      >
        <TextArea
          value={differentiation.value}
          onChange={differentiation.onChange}
          placeholder="아이디어를 실현 시키기 위해 가지고 있는 차별화 전략을 적어주세요."
        />
      </IdeaTextArea>
      <IdeaTextArea
        title="시장분석"
        data={marketAnalysis.value}
        type="market_analysis"
      >
        <TextArea
          value={marketAnalysis.value}
          onChange={marketAnalysis.onChange}
          placeholder="아이디어가 관련된 시장은 어떠한가요"
        />
      </IdeaTextArea>
      <RightAligned>
        <Button tertiary>취소</Button>
        <RouteLink to="/idea/preview">미리보기</RouteLink>
      </RightAligned>
    </>
  );
};

export default IdeaTextAreaContainer;
