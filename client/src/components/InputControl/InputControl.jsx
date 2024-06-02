import './InputControl.css';

const InputControl = (props) => {
  return (
    <div className="input-auth">
      {props.label && <label>{props.label}</label>}
      <input type={props.inputType} {...props} />
    </div>
  );
};

export default InputControl;
