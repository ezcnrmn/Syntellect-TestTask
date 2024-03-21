import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import values from "../../store/test";
import Input from "../Input";
import WithButtons from "../WithButtons";
import { isNumber } from "../../helpers";
import InputWithAutocomplete from "../InputWithAutocomplete";
import { CountryInfo, getCountryByName } from "../../api/apiService";
import "./Test.css";

const Test: React.FC = observer(() => {
	const { input1, input2, input3, input4 } = values;

	const [options3, setOptions3] = useState<CountryInfo[]>([]);
	const [options4, setOptions4] = useState<CountryInfo[]>([]);

	useEffect(() => {
		getCountryByName(input3).then((options) => setOptions3(options));
	}, [input3]);
	useEffect(() => {
		getCountryByName(input4).then((options) => setOptions4(options));
	}, [input4]);

	const onChangeInput1 = (event: React.ChangeEvent<HTMLInputElement>) => values.setInput1(event.target.value);
	const onClearButton = () => values.setInput1("");
	const onHelloWorld = () => values.setInput1("Hello world");

	const onChangeInput2 = (event: React.ChangeEvent<HTMLInputElement>) => values.setInput2(event.target.value);
	const onAlertNumber = () => isNumber(input2) && alert(input2);
	const onAlert = () => alert(input2);

	const onChangeInput3 = (event: React.ChangeEvent<HTMLInputElement>) => values.setInput3(event.target.value);

	const onChangeInput4 = (event: React.ChangeEvent<HTMLInputElement>) => values.setInput4(event.target.value);

	return (
		<div className="test">
			<div className="form-item">
				WithButtons
				<WithButtons
					suffixes={[
						{ key: "clear", text: "clear", onClick: onClearButton },
						{ key: "hello", text: "Hello world", onClick: onHelloWorld },
					]}
				>
					<Input value={input1} onChange={onChangeInput1} />
				</WithButtons>
			</div>
			<br />

			<div className="form-item">
				WithButtons
				<WithButtons
					prefixes={[{ key: "number", text: "alert number", onClick: onAlertNumber }]}
					suffixes={[{ key: "alert", text: "alert", onClick: onAlert }]}
				>
					<Input value={input2} onChange={onChangeInput2} />
				</WithButtons>
			</div>
			<br />

			<label className="form-item">
				InputWithAutocomplete
				<InputWithAutocomplete
					size={3}
					options={options3}
					renderOption={(props) => (
						<div onClick={() => values.setInput3(props.fullName)}>
							<OptionItem {...props} />
						</div>
					)}
					value={input3}
					onChange={onChangeInput3}
				/>
			</label>
			<br />

			<label className="form-item">
				InputWithAutocomplete
				<InputWithAutocomplete
					size={10}
					options={options4}
					renderOption={(props) => (
						<div onClick={() => values.setInput4(props.fullName)}>
							<OptionItem {...props} />
						</div>
					)}
					value={input4}
					onChange={onChangeInput4}
				/>
			</label>
		</div>
	);
});

const OptionItem: React.FC<CountryInfo> = ({ name, fullName, flag }) => (
	<div className="option">
		<h3 className="option__header">
			<img className="option__flag" src={flag} alt="flag" />
			{name}
		</h3>
		<div className="option__body">{fullName}</div>
	</div>
);

export default Test;
