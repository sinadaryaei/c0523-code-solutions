function CustomButton(props) {
  return (
    <button style={{ backgroundColor: props.color, color: 'white' }}>
      {props.text}
    </button>
  );
}

export default CustomButton;
