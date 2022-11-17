import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Hero, Button } from 'react-daisyui'
import { BsFillCircleFill, BsGithub } from 'react-icons/bs'
import { format } from 'date-fns';
import { MySwal } from '../../utils/SweetAlert'

function DeploymentHero(){
    const { id } = useParams()
    const [site, setSite] = useState([]);
    const [deployed, setDeployed] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/sites/'+id,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            }
        })
        .then(response => response.json())
        .then(data => setSite(data))
        .then(
            fetch(site.domain+"/index.html")
            .then(response => {
                if(response.status === 200){
                    setDeployed(true)
                }
            })
        )
    }, [id, deployed, site.domain])

    // Create delete function
    function deleteSite() {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(process.env.REACT_APP_API_URL + '/sites/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
                    }
                })
                    .then(response => response.json());
                // Redirect to dashboard using sweetalert
                MySwal.fire({
                    title: 'Deleted!',
                    text: 'Your site has been deleted.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/dashboard";
                    }
                });
            }
        });
    }

    return (
        site.length !== 0 ? (
        <>
            <Hero>
                <Hero.Overlay className="bg-black" />
                <Hero.Content className='h-32 w-full'>
                    <div className="w-10/12 flex flex-row flex-nowrap items-stretch">
                        <h1 className="text-2xl font-bold basis-2/4">
                            {site.name}
                        </h1>

                        <div className='basis-2/4 ml-40 place-items-end place-content-end'>
                            <Button href={site.repo_url} target="_blank" variant="outline" size="sm" color="default">View Git Repository</Button>
                            <Button href={site.domain} target="_blank" className="ml-2" size="sm" color="primary">Visit</Button>
                            <Button onClick={deleteSite} target="_blank" className="ml-2 right-0" size="sm" color="error">Delete</Button>

                        </div>
                    </div>
                </Hero.Content>
            </Hero>
            <Hero>
                <Hero.Content className='h-32 w-full'>
                    <div className="w-10/12 flex flex-row flex-nowrap items-center">
                        <div className='flex-col basis-5/6'>
                            <h1 className="text-2xl font-bold">Production Deployment</h1>
                            <p>The deployment that is available to your visitors.</p>
                        </div>
                    </div>
                </Hero.Content>
            </Hero>
            <Hero >
                <Hero.Content className='w-10/12 bg-black border rounded my-4'>
                    <img
                        src={site.image_url !== null ? site.image_url : "https://storage.googleapis.com/screenshot-jobs-portfolio-umut-yildirim/placeholder.jpg"}
                        alt="Deployment Demo"
                        className="max-w-sm rounded-lg shadow-2xl border basis-4/12"
                    />
                    <div className='w-full flex flex-col'>
                        <span className='font-bold'>Deployment</span>
                        <a href={site.domain} rel="noreferrer" target="_blank" className="text-green-600 mb-2 font-light after:content-['_↗'] ...">{site.domain}</a>
                        <span className='font-bold'>Status</span>
                        <p className="flex flex-row items-center font-light mb-2"> 
                        {
                            deployed === true ?
                                <BsFillCircleFill className='text-green-600 mr-2'/>
                            : 
                                <BsFillCircleFill className='text-red-600 mr-2'/>

                        }
                        {
                            deployed === true ? 'Deployed' : 'Not Deployed'
                        }
                        </p>
                        <span className='font-bold'>Created At</span>
                        <p className="flex flex-row items-center font-light mb-2">{format(new Date(site.created_at), 'p, dd/mm/yyyy')} by umuthopeyildirim</p>
                        <span className='font-bold'>Branch</span>
                        <p className="flex flex-row items-center font-light mb-2"><BsGithub className='mr-2'/>{site.repo_branch}</p>
                        <span className='font-bold'>Github Secrets</span>
                        <p>FTP Server: ftp.umutyildirim.com</p>
                        <p>FTP User: markhope@umutyildirim.com</p>
                        <p>FTP Pass: qywWsCyEQMM1</p>
                        
                    </div>
                </Hero.Content>
            </Hero>
        </>
        ) : (
            <h1>Wait for info to load</h1>
        )
    )
}

export default DeploymentHero