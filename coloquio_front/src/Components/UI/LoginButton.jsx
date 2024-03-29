import "./Loginbutton.css";
const LoginButton = (props) => {
  return (
    <button class="button-33" role="button">
      {props.name}
    </button>
  );
};

export default LoginButton;
