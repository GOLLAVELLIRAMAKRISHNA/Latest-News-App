import '../Navbar/Navbar.css';
import Logo from '../../assets/breaking-news-red-3d-text-free-png.webp';

const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container nav-mg">
                <a className="navbar-brand" href="./index.html">
                    <img src={Logo} alt="Logo" style={{ width: "80px" }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars navbar-toggler-icon"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li onClick={() => { setCategory("general") }} className="nav-item">
                            <a className="nav-link">Latest</a>
                        </li>
                        <li onClick={() => { setCategory("Entertainment") }} className="nav-item">
                            <a className="nav-link">Entertainment</a>
                        </li>
                        <li onClick={() => { setCategory("Sports") }} className="nav-item">
                            <a className="nav-link">Sports</a>
                        </li>
                        <li onClick={() => { setCategory("Business") }} className="nav-item">
                            <a className="nav-link">Business</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar