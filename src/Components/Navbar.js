import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className={`navbar fixed-top  navbar-expand-lg navbar-${props.darkMode==='dark'?'dark':'light'} bg-${props.darkMode==='dark'?'dark':'light'}  me-5`} style={{ width: '100%' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" data-toggle="tooltip" data-placement="right" title={`${props.darkMode==='dark'?'Disable Dark Mode':'Enable Dark Mode'}`}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;