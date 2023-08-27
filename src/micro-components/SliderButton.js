const SliderButton = ({onClickCallback, value}) => {
  return <button className="SliderButton"
      onClick={onClickCallback}>{value}</button>
};

export default SliderButton;