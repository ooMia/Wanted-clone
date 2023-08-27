import ContentBoxList from './ContentBoxList';
import {useEffect, useRef} from 'react';
import '../styles/ConentSliderLayout.css';
import '../styles/ContentSliderAnimation.css';
import jsonContents from '../data/top_banner';
import SliderButton from './SliderButton';

const ContentBoxListSlider = () => {
  
  // 이벤트로 움직일 ContentBoxList 컴포넌트 타게팅
  const targetRef = useRef();
  const pos = useRef(0);
  const isAnimationRunning = useRef(false);
  const intervalID = useRef(0);
  
  const getImageSize = (imgWidth, imgPadding) => imgWidth + imgPadding * 2;
  const imgSize = getImageSize(96, 1);
  
  // 핵심 단위 이벤트
  const moveListAnimation = () => {
    console.log(intervalID.current);
    
    // Type-check using JS Flow
    const targetList: HTMLElement = targetRef.current;
    
    const ani = targetList.animate(
        [
          {transform: `translate(${pos.current}vw)`},
        ],
        {duration: 500, fill: 'forwards'});
    ani.onfinish = () => {
      isAnimationRunning.current = false;
      pos.current %= (jsonContents.length * imgSize);
      if (pos.current === 0) targetList.animate([{transform: `translate(0vw)`}],
          {duration: 0, fill: 'forwards'});
    };
    ani.play();
  };
  
  const moveLeft = () => {
    if (isAnimationRunning.current) return;
    else isAnimationRunning.current = true;
    
    pos.current += imgSize;
    
    moveListAnimation();
    
  };
  const moveRight = () => {
    if (isAnimationRunning.current) return;
    else isAnimationRunning.current = true;
    
    pos.current -= imgSize;
    
    moveListAnimation();
    
  };
  
  useEffect(() => {
    intervalID.current = setInterval(moveRight, 5000);
    // return () => {clearInterval(intervalID.current);};
  }, []);
  
  // 2n + 3 (홀수)
  const copiedContents = (ocs) => [
    ocs[ocs.length - 1], ...ocs, ...ocs, ocs[0], ocs[1]];
  
  return (
      <div className="ContentBoxListSlider">
        <ContentBoxList
            contents={copiedContents(jsonContents.contents)}
            targetRef={targetRef}
            isAnimationRunning={isAnimationRunning}
        
        />
        <SliderButton onClickCallback={moveLeft} value={'<'}/>
        <SliderButton onClickCallback={moveRight} value={'>'}/>
      </div>);
};

export default ContentBoxListSlider;