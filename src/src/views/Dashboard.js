import { useEffect } from "react"
import { Input, Button } from "react-daisyui"
import DashboardBar from "../components/Dashboard/DashboardBar"
import Overview from "../components/Dashboard/Overview"
import DashboardFooter from "../components/Dashboard/DashboardFooter"

import { isUserAuthenticated } from "../utils/Auth"

function Dashboard(){
    useEffect(() => {
        if(!isUserAuthenticated()){
            window.location.href = "/login"
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
                <Overview />
            </div>
            <DashboardFooter />
        </>
    );
}

export default Dashboard