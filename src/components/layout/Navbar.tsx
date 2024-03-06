import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="section-wrapper flex items-center justify-between py-3">
        {/* left side */}
        <h1 className="font-bold text-xl">Giver's Heaven</h1>

        {/* middle */}
        <Link to="/">All Donations</Link>

        {/* right side */}
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
