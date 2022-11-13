import { useEffect, useState } from "react"
import { Card } from "react-daisyui"
import { AiFillGithub, AiOutlineBranches } from "react-icons/ai";
import {format} from 'date-fns';

function Overview(){
    // Get the projects from the API
    const [site, setSites] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/sites',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            }
        })
        .then(response => response.json())
        .then(data => setSites(data))
    }, [])

    console.log(site)

    return (
        // If site is empty, show loading
        site.length !== 0 ? (
        <>
            <div className="mt-6 grid grid-cols-3 gap-4">
                {site.map((site) => (
                    <Card className="border rounded-md bg-black border-zinc-700 hover:bg-green-700 hover:text-white">
                        <a href={'/deployment/'+site.id}>
                            <Card.Body className="my-2 mx-2">
                                <Card.Title tag="h2" className="flex flex-col">
                                    <img src="/img/logo.svg" alt={site.name} className="w-10 h-10 p-2"/>
                                    {site.name}
                                    <span className="text-sm text-gray-400">by MarkHope</span>
                                </Card.Title>
                                <p className="flex flex-row items-center"><AiOutlineBranches />From {site.repo_branch} </p>
                                <p className="flex flex-row items-center">{format(new Date(site.created_at), 'p, dd/mm/yyyy')} via <AiFillGithub className="mx-2" /></p>
                            </Card.Body>
                        </a>
                    </Card>
                ))}
            </div>
        </>
        ) : (
            <h1>Wow, very lonely</h1>
        )
    )
}
export default Overview;