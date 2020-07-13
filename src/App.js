import React, { useState } from 'react'

import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {

    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' }
    ]

    const initialFormState = {
        id: null,
        name: '',
        userName: ''
    }

    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    const editRow = user => {
        setEditing(true)
        
        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username
        })
    }

    return (
        <div className='container'>
            <h1>Crud with Hooks</h1>
            <div className='flex-row'>
                <div className='flex-large'>
                    <h2>Add User</h2>
                    <AddUserForm addUser={addUser} />
                </div>
                <div className='flex-large'>
                    <h2>View Users</h2>
                    <UserTable 
                        users={users} 
                        deleteUser={deleteUser}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
