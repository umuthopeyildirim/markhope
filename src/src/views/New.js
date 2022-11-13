import { useState, useEffect } from "react"
import DashboardBar from "../components/Dashboard/DashboardBar"
import NewProject from "../components/Dashboard/NewProject"
import Import from "../components/Dashboard/ImportProject"
import DashboardFooter from "../components/Dashboard/DashboardFooter"


import { isUserAuthenticated } from "../utils/Auth"

function Dashboard(){
    const [isImport, setIsImport] = useState(false)
    const [githubURL, setGithubURL] = useState("")

    useEffect(() => {
        if(!isUserAuthenticated()){
            window.location.href = "/login"
        }
    }, [])
    
    return (
        <>
            <DashboardBar />
            {
                isImport 
                ? 
                <Import githubURL={githubURL} /> 
                :
                <NewProject setIsImport={setIsImport} githubURL={githubURL} setGithubURL={setGithubURL}/> 
            }
            <DashboardFooter />
        </>
    );
}

export default Dashboard