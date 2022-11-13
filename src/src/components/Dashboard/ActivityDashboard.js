import { useState, useEffect } from 'react';
import {format} from 'date-fns';

function ActivityDashboard(){
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/activities',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            }
        })
        .then(response => response.json())
        .then(data => setActivity(data))
    }, [])

    return (
        // Is activity empty?
        activity.length > 0 ? (
            <div className="min-h-screen my-6 mx-10">
                {/* Search and New Project */}
                <div className="flex flex-row flex-nowrap max-w-full space-x-4 my-10">
                    <h1 className="text-6xl">Activity</h1>
                </div>
                <div className="flex flex-col flex-nowrap max-w-full mt-6">
                    { activity.map((activity) => (
                        <>
                            <div className="flex flex-row my-2 border-b space-x-4" key={activity.id}>
                                <p className="my-2 basis-10/12">{activity.description}</p>
                                <p className="text-right my-2 basis-2/12">{format(new Date(activity.created_at), 'p, dd/mm/yyyy')}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ) : (
            <div className="min-h-screen my-6 mx-10">
                {/* Search and New Project */}
                <div className="flex flex-row flex-nowrap max-w-full space-x-4 my-10">
                    <h1 className="text-6xl">Activity</h1>
                </div>
                <div className="flex flex-col flex-nowrap max-w-full mt-6">
                    <h1 className="text-2xl">No recent activities.</h1>
                </div>
            </div>
        )

    )
}
export default ActivityDashboard;