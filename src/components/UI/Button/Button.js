import React from 'react';
import CourseInput from '../../CourseGoals/CourseInput/CourseInput';
import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
