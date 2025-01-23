import logo from "./images/logo.png";

const Navbar=()=>{
    return <div className="navbar">
    <div className="nav-items">
    <img className="logo" src={logo} alt="amazon-logo"></img>
    <i class="bi bi-geo-alt"></i> <p className="other">Delivering to Puttur 517583</p>
    <p className="location">Update location</p>
    </div>
    <div className="btn-item">
    <input type="text" placeholder="Search Amazon.in" className="search"></input>
    <button className="btn"><i class="bi bi-search"></i></button>
    </div>
    <div className="cart">
    <button className="sing-in"><h3>Sing In</h3></button>
    <i class="bi bi-cart"></i>
    </div>
</div>
   
}
export default Navbar;