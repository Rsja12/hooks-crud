import React, { useState } from 'react'

const AddUserForm = (props) => {

    const initialFormState = {
        id: null,
        name: '',
        username: ''
    }

    const [user, setUser] = useState(initialFormState)

    const handleInputChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.addUser(user)
        setUser(initialFormState)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <label>Name</label>
            <input 
                type='text' 
                name='name' 
                value={user.name} 
                onChange={handleInputChange}
                required
            />
            <label>Username</label>
            <input 
                type='text' 
                name='username' 
                value={user.username} 
                onChange={handleInputChange}
                required
            />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm
