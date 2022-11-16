import { useState } from "react"
import { Input, Button, Alert } from "react-daisyui"
import { AiFillGithub } from "react-icons/ai"
import { GoAlert } from "react-icons/go";

function NewProject({ setIsImport, githubURL, setGithubURL }){
    const [errors, setErrors] = useState([])

    // TODO: Add a function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://api.github.com/repos/" + githubURL)
        .then(
            response => {
                if(response.status === 200){
                    setIsImport(true)
                }
                else{
                    setErrors(["Repo does not exist"])
                }
            }
        )
    }

    return (
        <>
            <div className="flex flex-row flex-nowrap max-w-full space-x-4 bg-black py-20">
                <div className="basis-8/12 my-6 mx-10 flex-col">
                    <h1 className="text-4xl font-bold">New Project</h1>
                    <p>
                        To deploy a new Project, import an existing Git Repository or get started with one of our Templates.
                    </p>
                </div>
                <Button color="primary" href="https://github.com/umuthopeyildirim/markhope_template" className="basis-2/12 my-6 rounded-md">Clone Template <AiFillGithub/></Button>
            </div>
            <div className="my-6 mx-10">
                {/* Search and New Project */}
                <p className="text-red-700">{errors}</p>
                <div className="flex flex-row ">
                    <Input value={githubURL} onChange={(e) => setGithubURL(e.target.value)} className="w-full rounded bg-black basis-10/12" size="lg" placeholder="Type your Github Username and Repo. Example: markhope/client"/>
                    <Button color="primary" onClick={handleSubmit} className="basis-2/12 mt-1.5 ml-1.5 rounded-md">Import Existing Project</Button>
                </div>
                <p className="mt-4 mb-4">You can also include your exsisting project. We will make sure your repo is compatible with our codebase. We suggest you use our template.</p>
                <Alert status="warning" icon={<GoAlert />} >If your codebase is not using our prebuild template. We can't offer support for your site. We are using BridgeTown for our project.</Alert>
            </div>
        </>
    )
}

export default NewProject;