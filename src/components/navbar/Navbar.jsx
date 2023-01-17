import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <div className="logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="logoImg"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          />
        </div>
        <div className="catagories">
          <p>Home</p>
          <p>Series</p>
          <p>Films</p>
          <p>New & Popular</p>
          <p>My List</p>
          <p>Browse by Languages</p>
        </div>
      </div>
      <div className="profile">
        <img
          className="profileImg"
          src="https://occ-0-748-999.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABf08Ijfx6SngXNHXN2WNy8LCZUaxk0H0R29fvA93hMMAYBnVw-ZTNK7G7M4Zq-eEQWJlcsKVYRmatV7lSWtx_qbqm7YQqF7y6wGr.png?r=fea"
        />
      </div>
    </div>
  );
};

export default Navbar;
