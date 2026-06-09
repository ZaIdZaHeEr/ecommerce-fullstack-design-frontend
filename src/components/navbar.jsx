import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo-colored.png";
import hamburger from "../assets/menu.png";
import cart from "../assets/Vector.svg";
import profile from "../assets/Vector-3.svg";
import search from "../assets/search.png";
import avatar from "../assets/Avatar.png";
import menu from "../assets/menu.png";
import close from "../assets/Vector.png";
import message from "../assets/Vector-2.svg";
import heart from "../assets/Vector-1.svg";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState(false);
  const toggleSideMenu = () => {
    if (sideMenu) {
      setSideMenu(false);
    } else {
      setSideMenu(true);
    }
  };

  return (
    <>
      <section>
        <nav>
          <section className="upper-nav-desktop">
            <div id="logo-container">
              <img
                id="brand-img"
                src={logo}
                alt="brand logo"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div id="search-container">
              <form id="search-form">
                <input type="text" placeholder="Search" />
                <select id="selection-dropdown">
                  <option selected value="All Category">
                    All Category
                  </option>
                  <option value="Mobile Accessories">Mobile Accessories</option>
                  <option value="Clothing">Clothing</option>
                </select>
                <button type="submit">Search</button>
              </form>
            </div>
            <div id="action-container">
              <div className="action-item">
                <img src={profile} alt="" />
                <p>Profile</p>
              </div>
              <div className="action-item">
                <img src={message} alt="" />
                <p>Messages</p>
              </div>
              <div className="action-item">
                <img src={heart} alt="" />
                <p>Orders</p>
              </div>
              <div className="action-item" onClick={() => navigate("/cart")}>
                <img src={cart} alt="" />
                <p>My Cart</p>
              </div>
            </div>
          </section>
          <section className="upper-nav-mobile">
            <div className="upper-container">
              <div className="left-container">
                <img onClick={toggleSideMenu} src={menu} alt="menu icon" />
                <img src="src/assets/logo-colored.png" alt="" />
              </div>
              <div className="right-container">
                <img src={cart} alt="cart icon" />
                <img src={profile} alt="profile icon" />
              </div>
            </div>
            <div className="lower-container">
              <form id="search-form-mobile">
                <img src={search} alt="search icon" />
                <input type="text" placeholder="Search" />
              </form>
            </div>
          </section>
        </nav>
        <section className="lower-nav-desktop">
          <div className="left-container">
            <ul>
              <li>
                <img src={hamburger} alt="hamburger menu" />
              </li>
              <li
                onClick={() => {
                  navigate("/products");
                }}
              >
                All Category
              </li>
              <li>Hot offers</li>
              <li>Gift boxes</li>
              <li>Projects</li>
              <li>Menu items</li>
              <li>
                <select id="">
                  <option selected value="">
                    Help
                  </option>
                </select>
              </li>
            </ul>
          </div>
          <div className="right-container">
            <select id="">
              <option selected value="">
                English, USD
              </option>
            </select>
            <select id="">
              <option selected value="">
                Ship to
              </option>
            </select>
          </div>
        </section>
        <section>
          <div className="lower-nav-mobile">
            <div>
              <ul>
                <li>All Category</li>
                <li>Gadgets</li>
                <li>Clothes</li>
                <li>Accessories</li>
                <li>Mobile Accessories</li>
                <li>More Accessories</li>
                <li>More Accessories</li>
                <li>More Accessories</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      {sideMenu && (
        <section id="side-Menu">
          <div id="close-container" onClick={toggleSideMenu}>
            <img src={close} alt="" />
          </div>
          <div id="menu-top">
            <img src={avatar} alt="avatar" />
            <p>
              <a href="#">Sign-in</a> | <a href="#">Register</a>
            </p>
          </div>
          <div id="menu-options">
            <div className="option-item">
              <div className="icon-container">
                <img src="src/assets/icon5.png" alt="" />
              </div>
              <div className="name-container">
                <p>Home</p>
              </div>
            </div>
            <div className="option-item">
              <div className="icon-container">
                <img src="src/assets/icon4.png" alt="" />
              </div>
              <div className="name-container">
                <p>Categories</p>
              </div>
            </div>
            <div className="option-item">
              <div className="icon-container">
                <img src="src/assets/icon6.png" alt="" />
              </div>
              <div className="name-container">
                <p>Favourities</p>
              </div>
            </div>
            <div className="option-item">
              <div className="icon-container">
                <img src="src/assets/icon.png" alt="" />
              </div>
              <div className="name-container">
                <p>My Orders</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="option-item">
              <div className="icon-container">
                <img src="src/assets/icon3.png" alt="" />
              </div>
              <div className="name-container">
                <p>English | USD</p>
              </div>
            </div>
            <div className="option-item">
              <div className="icon-container">
                <img src="src/assets/icon1.png" alt="" />
              </div>
              <div className="name-container">
                <p>Contant Us</p>
              </div>
            </div>
            <div className="option-item">
              <div className="icon-container">
                <img src="src/assets/icon2.png" alt="" />
              </div>
              <div className="name-container">
                <p>About</p>
              </div>
            </div>
            <div className="divider"></div>

            <div className="option-item">
              <div className="icon-container"></div>
              <div className="name-container">
                <p>User Agreement</p>
              </div>
            </div>
            <div className="option-item">
              <div className="icon-container"></div>
              <div className="name-container">
                <p>Partnership</p>
              </div>
            </div>
            <div className="option-item">
              <div className="icon-container"></div>
              <div className="name-container">
                <p>Privacy policy</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default NavBar;
