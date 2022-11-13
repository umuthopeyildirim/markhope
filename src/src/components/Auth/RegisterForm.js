import { Input, Button } from "react-daisyui";

function RegisterForm({ name, setName, username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, register }) {
    return (
        <div className="relative sm:mt-0 min-h-fit h-full sm:flex sm:flex-row justify-center bg-transparent sm:pb-0 rounded-3xl shadow-xl">
            <div className="flex justify-center self-center">
                <div className="p-12 mx-auto rounded-3xl w-96 ">
                    <div className="mb-7">
                        <h3 className="font-semibold text-2xl text-gray-300">Register </h3>
                        <p className="text-gray-500">
                            Do you have an account?
                            <a href="login" className="text-sm text-green-700 hover:text-green-600 ml-2">
                                Login
                            </a>
                        </p>
                    </div>
                    <div className="space-y-6">
                        <Input value={name} onChange={(e) => setName(e.target.value)} className=" w-full text-sm text-white px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Name"></Input>
                        <Input value={username} onChange={(e) => setUsername(e.target.value)} className=" w-full text-sm text-white px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Username"></Input>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full text-sm text-white px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="Email"></Input>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} className=" w-full text-sm text-white px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Password"></Input>
                        <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className=" w-full text-sm text-white px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Confirm Password"></Input>
                    </div>
                    <div className="flex items-center justify-between py-2">
                    </div>
                    <Button onClick={register} type="submit" className="w-full flex justify-center bg-green-800 hover:bg-green-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;