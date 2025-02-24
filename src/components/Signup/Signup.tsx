import { FormEvent, useRef, useState } from "react";
import { checkEmail, checkNickname } from "../../shared/helpers/auth";
import { Input } from "../UI/Input";
import "./Signup.scss";

const fields = {
	name: '',
	nickname: '',
	sex: '',
	email: '',
	password: ''
}

export const Signup = () => {
	const refForm = useRef(fields);
	const [error, setError] = useState(fields);

	const handleChangeForm = (e: FormEvent<HTMLFormElement>) => {
		const target = e.target as HTMLInputElement;

		refForm.current = {
			...refForm.current,
			[target.name]: target.value,
		};
	};

	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		

		const isExistsEmail = checkEmail(refForm.current.email);
		const isExistsNick = checkNickname(refForm.current.nickname);
		
		if (isExistsEmail) {
			setError((prevState) => ({...prevState, email: 'Пользователь с такой почтой уже существует в системе'}));
		} else {
			setError((prevState) => ({...prevState, email: ''}));
		}
		if (isExistsNick) {
			setError((prevState) => ({...prevState, nick: 'Пользователь с таким ником уже существует в системе'}));
		} else {
			setError((prevState) => ({...prevState, nick: ''}));
		}
		
		refForm.current = fields;
		(e.target as HTMLFormElement).reset();
	};

	const handleFocusForm = () => {
		setError(fields);
	};

	return (
		<div className="form-block">
			<form 
				className="user-form signup-form"
				onChange={handleChangeForm}
				onSubmit={handleSubmitForm}
				onFocus={handleFocusForm}
			>
				<Input
					type="text"
					name="name"
					placeholder="Введите ваше имя"
					label="Имя"
				/>
				<Input
					type="text"
					name="nickname"
					placeholder="Введите ник"
					label="Ник"
					error={error['nickname'] === '' ? undefined : error['nickname']}
				/>
				<Input
					type="email"
					name="email"
					placeholder="Введите вашу почту"
					label="Почта"
					error={error['email'] === '' ? undefined : error['email']}
				/>
				<div className="radio-field-block">
					<div className="radio-field__label">Пол</div>
					<div className="radio-field__fields">
						<Input type="radio" name="sex" label="Мужской" />
						<Input type="radio" name="sex" label="Женский" />
					</div>
				</div>
				<Input
					type="password"
					name="pass"
					placeholder="Введите пароль"
					label="Пароль"
				/>
				<Input
					type="password"
					name="repass"
					placeholder="Введите ваш пароль еще раз"
					label="Повторить пароль"
				/>
				<button style={{ width: "100%", marginTop: "20px" }}>Войти</button>
			</form>
		</div>
	);
};
