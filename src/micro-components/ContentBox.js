import React from 'react';
import '../styles/ConentSliderLayout.css';

const ContentBox = ({content, isAnimationRunning}) => {
  return (
      <div className="ContentBox">
        <img src={content.source} alt={content.description}
             style={{borderRadius: '7px'}}
             onMouseOver={() => isAnimationRunning.current = true}
             onMouseOut={() => isAnimationRunning.current = false}/>
        <div className="ContentBox_description"
             onMouseOver={() => isAnimationRunning.current = true}
             onMouseOut={() => isAnimationRunning.current = false}>
          <h2>{content.description[0]}</h2>
          <span>{content.description[1]}</span>
          <hr/>
          <br/>
          <a href={content.link}>바로가기</a>
        </div>
      </div>
  );
};

export default ContentBox;