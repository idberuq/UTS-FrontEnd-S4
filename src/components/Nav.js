const Nav = () => {
    return ( 
        <div>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <span className="fs-4">Beruq Blog</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-primary">Home</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">New Blog</a></li>
                    </ul>
                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div>
                </header>
            </div>
        </div>
     );
}
 
export default Nav;