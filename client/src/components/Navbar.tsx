import { NavLink } from "react-router-dom";

export function Navbar() {
    const isAuth = false;
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <div>
                    <NavLink to='/'>
                        <span className='navbar-brand'>Home</span>
                    </NavLink>
                </div>
                {isAuth ? (
                    <div>
                        <NavLink to='/dashboard' className={'text-decoration-none'}>
                            <span className='mx-3'>Dashboard</span>
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <NavLink to='/login' className={'text-decoration-none'}>
                            <span className="mx-3">Login</span>
                        </NavLink>

                        <NavLink to='/signup' className={'text-decoration-none'}>
                            <span className="mx-3">Signup</span>
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    )
}