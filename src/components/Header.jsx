
import Title from "./Title";


const Header = () => {

    return (
      <div className="header">
        <Title />

       
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;