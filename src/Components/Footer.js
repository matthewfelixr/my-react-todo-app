import React from "react";

const Footer = (props) => {
  return (
    <div className="todo-footer">
      <span className="count-todos">
      { !props.count &&
                <p data-testid="todo-footer-no-item"> No task to do</p>
            }
            {props.count > 0 &&
                <p data-testid="todo-footer-with-items"> {props.count} {props.count > 1 ? 'tasks left' : 'task left' }</p>
            }
      </span>
    </div>
  );
};

export default Footer;