import React, { useState } from "react";
import Input from "../Input";
import "./InputWithAutocomplete.css";

interface InputWithAutocompleteProps<T> {
	options: T[];
	renderOption: (props: T) => any;
	size: number;
	[key: string]: unknown;
}

const OPTIONS_VISIBILITY_DURATION = 300;

const InputWithAutocomplete = <T,>({ options, size, renderOption, ...props }: InputWithAutocompleteProps<T>) => {
	const [isShown, setIsShown] = useState(true);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsShown(true);

		if (typeof props.onChange === "function") props.onChange(event);
	};
	const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		setIsShown(true);

		if (typeof props.onFocus === "function") props.onFocus(event);
	};
	const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		setTimeout(() => setIsShown(false), OPTIONS_VISIBILITY_DURATION);

		if (typeof props.onBlur === "function") props.onBlur(event);
	};

	return (
		<div className="input-with-autocomplete">
			<Input {...props} onChange={onChange} onBlur={onBlur} onFocus={onFocus} />
			{isShown && (
				<ul className="input-with-autocomplete__options">
					{options.slice(0, size).map((option, index) => (
						<li key={index}>{renderOption(option)}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default InputWithAutocomplete;
