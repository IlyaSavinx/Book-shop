import './button.css';
import { IButton } from '../../types';

  const Button = (props: IButton) => {
  const {content, isActive, callback} = props;
  return (
      <button
          className="button"
          disabled={!isActive}
          onClick={() => callback()}
          style={{opacity: isActive ? 1 : 0.5}}
      >
          {props.children || content}
      </button>
  )
  }
  export default Button;
