import { useEffect } from "react"
import DashboardBar from "../components/Dashboard/DashboardBar"
import DeploymentHero from "../components/Dashboard/DeploymentHero"
import DashboardFooter from "../components/Dashboard/DashboardFooter"

import { isUserAuthenticated } from "../utils/Auth"

function Deployment(){
    useEffect(() => {
        if(!isUserAuthenticated()){
            window.location.href = "/login"
        }
    }, [])

    return (
        <>
            <DashboardBar />
            <DeploymentHero />
            <DashboardFooter />
        </>
    );
}

export default Deployment