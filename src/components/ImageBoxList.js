import ImageBox from "./ImageBox";
import '../styles/ImageBoxList.css'

const ImageBoxList = ({contents, pos, handlerAnimation}) => {


    // 2n+1은 무조건 홀수. 초기 상태가 가운데로 오게 됨.
    const newContents = [contents[contents.length - 1], ...contents, ...contents, contents[0], contents[1]]
    // {
    //     // 100은 ImageBox의 width 값
    //     // const totalLength = newContents.length * 100
    //
    // }

    const contentList = newContents.map((c, i) => <ImageBox content={c} key={i}/>)
    return (
        <div onClick={handlerAnimation} className="ImageBoxList" style={{position: "relative", left: pos + "px"}}>
            {contentList}
        </div>);

};

export default ImageBoxList;