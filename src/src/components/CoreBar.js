import { Navbar, Button, Menu, Link } from 'react-daisyui';

function LandingBar(){
    return (
        <div className="flex w-full component-preview items-center justify-center font-sans">
            <Navbar className='text-neutral-content'>
                <Navbar.Start>
                    <Link href="/">
                    <Button className="text-xl normal-case text-green-600" color="ghost">
                        <img src="/img/logo-green.svg" alt="MarkHope" className="w-10 h-10 p-2"/>
                        MarkHope
                    </Button>
                    </Link>
                </Navbar.Start>
                <Navbar.End>
                    <Menu horizontal className="p-0">
                        <Menu.Item>
                            <Link href="/#about">About</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/#features">Features</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="download">Download</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="login">Account</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default LandingBar;