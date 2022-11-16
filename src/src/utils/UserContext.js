import { createContext } from 'react';

const UserContext = createContext()

fetch(process.env.REACT_APP_API_URL+'/user', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    }
})
.then(response => response.json())
.then(data => setUser(data))