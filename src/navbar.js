const Navbar=()=>{
    return <div className="navbar">
<div className="nav-items">
    <img className="logo" src="https://www.shutterstock.com/image-vector/chattogram-bangladesh-april-24-2023-260nw-2292992631.jpg"></img>
    <i class="bi bi-geo-alt"></i> <p className="other">Delivering to Puttur 517583</p>
    <p className="location">Update location</p>
</div>
<div>
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