import React from 'react';

const SliderButton = ({onClickCallback, value}) => {
    return <button
        onClick={onClickCallback} value={value}>{value}</button>
};

export default SliderButton;