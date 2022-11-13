import { useState, useEffect } from "react";
import CoreBar from "../components/CoreBar";
import LoginForm from "../components/Auth/LoginForm";
import CoreFooter from "../components/CoreFooter";

import { MySwal } from "../utils/SweetAlert";
import { isUserAuthenticated } from "../utils/Auth";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        if(isUserAuthenticated()){
            window.location.href = "/dashboard";
        }
    }, []);
        
    function handleSignin(){
        if(email === "" || password === ""){
            MySwal.fire({
                title: <p>Empty Fields</p>,
                text: "Please fill in all the fields",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
        else{
            fetch(process.env.REACT_APP_API_URL+"/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.auth_token !== undefined){
                    localStorage.setItem("auth_token", data.auth_token);
                    window.location.href = "/dashboard";
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

    return (
        <>
            <CoreBar />
            <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} signin={handleSignin} />
            <CoreFooter />
        </>
    );
}

export default Login