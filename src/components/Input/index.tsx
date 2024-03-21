import React from "react";
import "./Input.css";

interface InputProps {
	[key: string]: unknown;
}

const Input: React.FC<InputProps> = (props) => {
	return <input className="input" {...props} />;
};

export default Input;
