import React, { useState, useEffect } from  'react'

const EditUserForm = props => {

    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = e => {
        const {name, value} = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault()

                props.updateUser(user.id, user)
            }}
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
            <button>Update user</button>
            <button
                className="button muted-button"
                onClick={() => props.setEditing(false)}
            >
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm
