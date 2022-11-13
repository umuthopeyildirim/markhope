import { Navbar, Button, Menu, Link } from 'react-daisyui';
import { logoutUser } from "../../utils/Auth"

function DashboardBar(){
    return (
        <div className="flex w-full component-preview items-center justify-center font-sans bg-black">
            <Navbar className='text-neutral-content'>
                <Navbar.Start>
                    <Link href="/dashboard">
                        <Button className="text-xl normal-case text-green-600" color="ghost">
                            <img src="/img/logo-green.svg" alt="MarkHope" className="w-10 h-10 p-2"/>
                            MarkHope
                        </Button>
                    </Link>
                </Navbar.Start>
                <Navbar.End>
                    <Menu horizontal className="p-0">
                        <Menu.Item>
                            <Link href="/dashboard">Overview</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/activity">Activity</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="https://portfolio-umut-yildirim.web.app/docs/category/markhope---docs">Docs</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link onClick={logoutUser}>Logout</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default DashboardBar;