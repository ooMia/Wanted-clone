import ContentBox from './ContentBox';
import '../styles/ConentSliderLayout.css';

const ContentBoxList = ({
  contents,
  targetRef,
  isAnimationRunning
}) => {
  
  // 원본 데이터가 복사된 상태로 부모로부터 전달됨 (순수 함수)
  
  // 이벤트를 감지할 필요(핸들러)는 없지만,
  // 다른 핸들러에 의해 이벤트의 핵심 타겟이 되는 컴포넌트
  
  // const nContents = jsonContents.length
  // const originalContents = jsonContents.contents.map(content => ({
  //   cid:content.cid,
  //   source:content.source,
  //   description:content.description
  // }))
  
  
  
  return (
      <div
          className="ContentBoxList"
          ref={targetRef}
      >
        {contents.map((content, idx) =>
            <ContentBox content={content} key={idx} isAnimationRunning={isAnimationRunning}/>,
        )}
      </div>
  );
};

export default ContentBoxList;