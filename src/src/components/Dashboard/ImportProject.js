import { useState } from 'react'
import { Divider, Input, Button } from 'react-daisyui'
import { AiOutlineArrowLeft, AiFillGithub, AiOutlineBranches, AiFillFolder } from 'react-icons/ai'
import { MySwal } from '../../utils/SweetAlert'

function Import({ githubURL }){
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [tagline, setTagline] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !title || !tagline || !email || !description){
            setError("Please fill all the fields")
        }
        else{
            setError("")
            fetch(process.env.REACT_APP_API_URL+'/sites/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
                },
                body: JSON.stringify({
                    name: name,
                    title: title,
                    tagline: tagline,
                    email: email,
                    description: description,
                    repo_url: "https://github.com/"+githubURL,
                    repo_name: githubURL.split('/')[1],
                    repo_branch: "main"
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                MySwal.fire({
                    title: 'Success!',
                    text: 'Your site has been created.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/dashboard"
                    }
                })
            })
        }
    }

    return (
        <>
            <div className="flex flex-row flex-nowrap max-w-full space-x-4 bg-black py-20">
                <div className="basis-8/12 my-6 mx-10 flex-col">
                    <a className="flex flex-row justify-start items-center hover:text-green-500" href="/new"><AiOutlineArrowLeft className="mx-1"/> Back</a>
                    <h1 className="text-4xl font-bold">Setup your new project</h1>
                    <p>
                        Please follow the steps to configure your Project and deploy it.
                    </p>
                </div>
            </div>
            <div className="flex flex-row my-6 mx-10">
                <div className="flex flex-col basis-3/12">
                    <div className="flex w-10/12 h-16 justify-start items-center rounded bg-stone-700">
                        <p className="flex flex-row justify-start items-center text-xl ml-7"><AiFillGithub className="mx-1"/> {githubURL.split('/')[1]}</p>
                    </div>

                    <Divider className="w-10/12" />
                    
                    <div>
                        <p className="text-lg font-bold flex flex-row">Git Repository</p>
                        <p className="justify-start items-center text-lg flex flex-row"><AiFillGithub /> {githubURL}</p>
                        <p className="justify-start items-center text-lg flex flex-row"><AiOutlineBranches /> main</p>
                        <p className="justify-start items-center text-lg flex flex-row"><AiFillFolder /> ./</p>
                    </div>
                </div>
                <div className="basis-9/12">
                    <div className="flex flex-col bg-black border border-white rounded">
                        <div className="my-6 mx-6">
                            <h1 className="text-3xl font-bold">Configure Project</h1>
                            <Divider className="w-full" />
                            <div className="flex flex-col">
                                <span className="ml-2">Project Name*</span>
                                <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Project Name" />
                                <span className="ml-2 mt-2">Project Title*</span>
                                <Input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Project Title" />
                                <span className="ml-2 mt-2">Project Tagline*</span>
                                <Input value={tagline} onChange={(e)=>setTagline(e.target.value)} type="text" placeholder="Project Tagline" />
                                <span className="ml-2 mt-2">Project Email*</span>
                                <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Project Email" />
                                <span className="ml-2 mt-2">Project Description*</span>
                                <Input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Project Description" />
                            </div>
                            <p className='my-2 text-red-600'>{error}</p>
                            <Button onClick={handleSubmit} color="primary" className="w-full rounded-md">Deploy Project</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Import