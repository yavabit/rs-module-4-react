export const users = [
    {
        id: 1001,
        name: 'user1',
        nickname: 'usernick1',
        sex: 'w',
        email: 'user1@a.ru',
        password: '123'
    },
    {
        id: 1002,
        name: 'user2',
        nickname: 'usernick2',
        sex: 'w',
        email: 'user2@a.ru',
        password: '1234'
    },
    {
        id: 1003,
        name: 'user3',
        nickname: 'usernick3',
        sex: 'm',
        email: 'user3@a.ru',
        password: '12345'
    },
    {
        id: 1004,
        name: 'user4',
        nickname: 'usernick4',
        sex: 'm',
        email: 'user4@a.ru',
        password: '123456'
    },
]

export interface IUser {
    id: number;
    name: string;
    nickname: string;
    sex: 'm' | 'w';
    email: string;
    password: string;
}