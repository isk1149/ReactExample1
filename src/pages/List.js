import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
};

const UserList = () => {
    const users = [
        {name: '유재석', email : 'ryu@gmail.com'},
        {name: '김종국', email : 'kim@gmail.com'},
        {name: '송지효', email : 'song@gmail.com'},
        {name: '하하', email : 'haha@gmail.com'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User userData={user} />
                ))}
            </tbody>
        </table>
    );
};

export default UserList;