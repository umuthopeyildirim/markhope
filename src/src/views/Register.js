import { useState, useEffect } from "react";
import CoreBar from "../components/CoreBar";
import RegisterForm from "../components/Auth/RegisterForm";
import CoreFooter from "../components/CoreFooter";

import { MySwal } from "../utils/SweetAlert";
import { isUserAuthenticated } from "../utils/Auth";

function Register(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    useEffect(() => {
        if(isUserAuthenticated()){
            window.location.href = "/dashboard";
        }
    }, []);
        
    function handleRegister(){
        if(name=== "" || username=== "" || email === "" || password === "" || confirmPassword === ""){
            MySwal.fire({
                title: <p>Empty Fields</p>,
                text: "Please fill in all the fields",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
        else{
            if(password !== confirmPassword){
                MySwal.fire({
                    title: <p>Passwords do not match</p>,
                    text: "Please make sure your passwords match",
                    icon: "error",
                    confirmButtonText: "Ok"
                })
            }
            else{
                fetch(process.env.REACT_APP_API_URL+"/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        username: username,
                        email: email,
                        password: password
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if(data.message !== undefined){
                        MySwal.fire({
                            title: "Success",
                            text: data.message,
                            icon: "success",
                            confirmButtonText: "Ok"
                        })
                        .then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "/login";
                            }
                        })
                    }
                    else{
                        MySwal.fire({
                            title: "Error",
                            text: data.error.user_authentication,
                            icon: "error",
                            confirmButtonText: "Ok"
                        })
                    }
                })
            }
        }
    }

    return (
        <>
            <CoreBar />
            <RegisterForm name={name} setName={setName} username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} register={handleRegister} />
            <CoreFooter />
        </>
    );
}

export default Register