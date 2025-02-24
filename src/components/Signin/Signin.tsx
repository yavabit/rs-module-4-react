import { FormEvent, useRef, useState } from "react";
import { Input } from "../UI/Input";
import { checkAuth } from "../../shared/helpers/auth";

export const Signin = () => {

	const refForm = useRef({email: '', password: ''})
	const [error, setError] = useState<string | undefined>()

	const handleChangeForm = (e: FormEvent<HTMLFormElement>) => {
		const target = e.target as HTMLInputElement;

		refForm.current = {
			...refForm.current,
			[target.name]: target.value
		}
	}

	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
		
		const isAuth = checkAuth(refForm.current);

		if(isAuth) {
			setError(undefined)
		} else {
			setError('Неправильный логин или пароль')
			refForm.current = { email: '', password: '' };
        	(e.target as HTMLFormElement).reset();
		}
	}

	const handleFocusForm = () => {
		setError(undefined)
	}

	return (
		<div className="form-block">
			<form 
				className="user-form signin-form" 
				onChange={handleChangeForm}
				onSubmit={handleSubmitForm}
				onFocus={handleFocusForm}
			>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					label="Email"
					description="Введите почту"
					error={error}
				/>
				<Input
					type="password"
					name="password"
					label="Пароль"
					placeholder="*****"
				/>
				<button style={{ width: "100%", marginTop: "20px" }} type="submit">Войти</button>
			</form>
		</div>
	);
};
