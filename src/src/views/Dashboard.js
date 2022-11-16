import { useEffect, useState, createContext } from "react"
import { Input, Button } from "react-daisyui"
import DashboardBar from "../components/Dashboard/DashboardBar"
import Overview from "../components/Dashboard/Overview"
import DashboardFooter from "../components/Dashboard/DashboardFooter"

import { isUserAuthenticated } from "../utils/Auth"

const UserContext = createContext()

function Dashboard(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        if(!isUserAuthenticated()){
            window.location.href = "/login"
        }
        else{
            fetch(process.env.REACT_APP_API_URL+'/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
                }
            })
            .then(response => response.json())
            .then(data => setUser(data))
        }
    }, [])
    
    return (
        <>
            <DashboardBar />
            <div className="min-h-screen my-6 mx-10">
                {/* Search and New Project */}
                <div className="flex flex-row flex-nowrap max-w-full justify-evenly space-x-4">
                    <Input className="basis-10/12 rounded-md bg-black" placeholder="Search..."/>
                    <Button color="primary" href="/new" className="basis-2/12 rounded-md">New Project</Button>
                </div>
                <UserContext.Provider value={user}>
                    <Overview />
                </UserContext.Provider>
            </div>
            <DashboardFooter />
        </>
    );
}

export default Dashboard;
export { UserContext };