import "./footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <section className="section-first-footer-container">
        <div className="first-footer-container">
          <div className="section-one">
            <img src="src/assets/logo-colored.png" alt="" />
            <p className="light-para">
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <div className="socials">
              <img src="src/assets/facebook3.svg" alt="" />
              <img src="src/assets/instagram3.svg" alt="" />
              <img src="src/assets/linkedin3.svg" alt="" />
              <img src="src/assets/twitter3.svg" alt="" />
              <img src="src/assets/youtube3.svg" alt="" />
            </div>
          </div>
          <div className="section-two">
            <p className="headings">Partnership</p>
            <p className="light-para">About us</p>
            <p className="light-para">Find store</p>
            <p className="light-para">Categories</p>
            <p className="light-para">Blogs</p>
          </div>
          <div className="section-three">
            <p className="headings">Information</p>
            <p className="light-para">Help Center</p>
            <p className="light-para">Money Refund</p>
            <p className="light-para">Shipping</p>
            <p className="light-para">Contact us</p>
          </div>
          <div className="section-four">
            <p className="headings">Contact us</p>
            <p className="light-para">Login</p>
            <p className="light-para">Register</p>
            <p className="light-para">Settings</p>
            <p
              className="light-para"
              onClick={() => {
                navigate("/productManagement");
              }}
            >
              Manage
            </p>
          </div>
          <div className="section-five">
            <p className="headings">For users</p>
            <p className="light-para">About us</p>
            <p className="light-para">Find store</p>
            <p className="light-para">Categories</p>
            <p className="light-para">Blogs</p>
          </div>
          <div className="section-six">
            <p className="headings">About</p>
            <img src="src/assets/Group.png" alt="" />
            <img src="src/assets/market-button.png" alt="" />
          </div>
        </div>
      </section>
      <section className="section-second-footer-container">
        <div className="section-second-footer">
          <p className="light-para">@2023 Ecommerce</p>
          <div className="region-selector">
            <img src="src/assets/US@2x.png" alt="" />
            <select name="" id="">
              <option value="" selected>
                English
              </option>
              <option value="">Spanish</option>
              <option value="">Chinese</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
