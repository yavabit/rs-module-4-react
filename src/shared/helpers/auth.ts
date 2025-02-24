import { IUser, users } from "../mocks/data"

export const checkAuth = (user: Pick<IUser, 'email' | 'password'>) => {
	return users.find(item => item.email === user.email && item.password === user.password) !== undefined
}

export const checkEmail = (email: string) => {
	return users.find(item => item.email === email) !== undefined
}
export const checkNickname = (nick: string) => {
	return users.find(item => item.nickname === nick) !== undefined
}