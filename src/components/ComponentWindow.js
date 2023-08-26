import ImageBoxListSlider from "./ImageBoxListSlider";
import "../styles/ComponentWindow.css"

const ComponentWindow = ({contents, view}) => {

    const windowWidth = 100 + 40
    const blockWidth = (view.width - windowWidth) / 2


    return (
        <>
            <div className="blur" style={{width: blockWidth, left: 0 + "px"}}></div>
            <ImageBoxListSlider contents={contents}/>
            <div className="blur" style={{width: blockWidth, right: 0 + "px"}}></div>
        </>
    );
};

export default ComponentWindow;