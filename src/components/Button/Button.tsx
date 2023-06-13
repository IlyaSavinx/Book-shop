import './button.css';
import { IButton } from '../../types';

  const Button = (props: IButton) => {
  const {content, isActive, callback, buttonStyle} = props;
  return (
      <button
          className="button"
          disabled={!isActive}
          onClick={() => callback()}
          style={{opacity: isActive ? 1 : 0.5, ...buttonStyle}}
      >
          {props.children || content}
      </button>
  )
  }
  export default Button;
