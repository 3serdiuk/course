import React from 'react';
import users from '../UserList';

function UserList() {
    return (
        <ol>
            {users.map((item) => <li key={users.id}>{`
                firstName: ${item.firstName},
                lastName: ${item.lastName},
                fullName: ${item.firstName} ${item.lastName},
                age: ${item.age + 5},
                job: ${item.job}
            `}</li>)}
        </ol>
    )
}

export default UserList;