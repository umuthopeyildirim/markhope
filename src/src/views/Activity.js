import { useEffect } from "react"
import DashboardBar from "../components/Dashboard/DashboardBar"
import ActivityDashboard from "../components/Dashboard/ActivityDashboard"
import DashboardFooter from "../components/Dashboard/DashboardFooter"

import { isUserAuthenticated } from "../utils/Auth"

function Activity(){
    useEffect(() => {
        if(!isUserAuthenticated()){
            window.location.href = "/login"
        }
    }, [])
    
    return (
        <>
            <DashboardBar />
            <ActivityDashboard />
            <DashboardFooter />
        </>
    );
}

export default Activity