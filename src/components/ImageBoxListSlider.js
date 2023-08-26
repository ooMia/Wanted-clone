import React, {useEffect, useRef, useState} from 'react';
import ImageBoxList from "./ImageBoxList";
import SliderButton from "./SliderButton";
import "../styles/ImageBoxListSlider.css"

const ImageBoxListSlider = ({contents}) => {

    const pos = useRef()
    const [posState, setPosState] = useState(0)

    const handlerAnimation = (e) => {
        const val = -100

        const aliceTumbling = [
            {
                transform: `translateX(${val}px)`,
            },
        ];
        const aliceTiming = {
            duration: 300,
        };

        e.target.closest(".ImageBoxList").animate(aliceTumbling, aliceTiming);
        pos.current += val

    };

    const SlideButtonDidClick = (e) => {
        const val = e.target.value === "<" ? +100 : -100;

        const nextPos = (posState + val) % (contents.length * 100);
        setPosState(nextPos)
    };

    useEffect(() => {
        pos.current = posState
        console.log(pos.current)
    }, [posState]);


    return (
        <div className="ImageBoxListSlider">
            <ImageBoxList contents={contents} ref={r => this.pos = r} pos={posState}
                          handlerAnimation={handlerAnimation}/>
            <SliderButton onClickCallback={SlideButtonDidClick} value={"<"}/>
            <SliderButton onClickCallback={SlideButtonDidClick} value={">"}/>

            {/*    버튼이 하위 컴포넌트로 내려가서 closest 패턴을 사용할 수 있어야 할듯 */}
        </div>


    );

};

export default ImageBoxListSlider;