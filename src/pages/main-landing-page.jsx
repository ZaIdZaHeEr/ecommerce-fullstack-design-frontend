import { NavLink } from "react-router-dom";
import "./main-landing-page.css";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="parent-container">
        <section className="section-main">
          <div className="main-left">
            <ul>
              <li>
                <NavLink to="/">Automobiles</NavLink>
              </li>
              <li>
                <NavLink to="/cloths">Clothes and wear</NavLink>
              </li>
              <li>
                <NavLink to="/home">Home interior</NavLink>
              </li>
              <li>
                <NavLink to="/computer">Computer and tech</NavLink>
              </li>
              <li>
                <NavLink to="/tools">Tools, equipments</NavLink>
              </li>
              <li>
                <NavLink to="/sports">Sports and outdoors</NavLink>
              </li>
              <li>
                <NavLink to="/animals">Animals and pets</NavLink>
              </li>
              <li>
                <NavLink to="/machinery">Machinery tools</NavLink>
              </li>
              <li>
                <NavLink to="/more">More category</NavLink>
              </li>
            </ul>
          </div>
          <div className="main-middle">
            <h2>Latest trending</h2>
            <h1>Electronic items</h1>
            <button>Learn more</button>
          </div>
          <div className="main-right">
            <div className="one">
              <div className="one-one">
                <img src="src/assets/Avatar.png" alt="" />
                <h3>Hi, user let's get started</h3>
              </div>
              <button style={{ backgroundColor: "#0067ff", color: "white" }}>
                Join now
              </button>
              <button style={{ backgroundColor: "#fff" }}>Login</button>
            </div>
            <div className="two">
              <h3>Get US $10 off with a new supplier</h3>
            </div>
            <div className="three">
              <h3>Send quotes with supplier preferences</h3>
            </div>
          </div>
        </section>
        <section className="section-sale">
          <div className="timer-area">
            <h3>Deals and offers</h3>
            <p>Hygiene equipments</p>
            <div className="timer">
              <div className="timer-item">
                <h3>04</h3>
                <p>Days</p>
              </div>
              <div className="timer-item">
                <h3>13</h3>
                <p>Hour</p>
              </div>
              <div className="timer-item">
                <h3>34</h3>
                <p>Min</p>
              </div>
              <div className="timer-item">
                <h3>56</h3>
                <p>Sec</p>
              </div>
            </div>
          </div>
          {/* Deals and Offers */}
          <div className="products-area">
            <div
              className="product-item"
              onClick={() => {
                navigate("/products");
              }}
            >
              <div className="item-img">
                <img src="src/assets/8.png" alt="" />
              </div>
              <div className="item-name">
                <p>Smart Watches</p>
              </div>
              <div className="item-discount">
                <p>-25%</p>
              </div>
            </div>
            <div
              className="product-item"
              onClick={() => {
                navigate("/products");
              }}
            >
              <div className="item-img">
                <img src="src/assets/image 34.png" alt="" />
              </div>
              <div className="item-name">
                <p>Laptops</p>
              </div>
              <div className="item-discount">
                <p>-25%</p>
              </div>
            </div>
            <div
              className="product-item"
              onClick={() => {
                navigate("/products");
              }}
            >
              <div className="item-img">
                <img src="src/assets/6.png" alt="" />
              </div>
              <div className="item-name">
                <p>GoPro cameras</p>
              </div>
              <div className="item-discount">
                <p>-25%</p>
              </div>
            </div>
            <div
              className="product-item"
              onClick={() => {
                navigate("/products");
              }}
            >
              <div className="item-img">
                <img src="src/assets/image 29.png" alt="" />
              </div>
              <div className="item-name">
                <p>Headphones</p>
              </div>
              <div className="item-discount">
                <p>-25%</p>
              </div>
            </div>
            <div
              className="product-item"
              onClick={() => {
                navigate("/products");
              }}
              >
              <div className="item-img">
                <img src="src/assets/image 23.png" alt="" />
              </div>
              <div className="item-name">
                <p>Smart phones</p>
              </div>
              <div className="item-discount">
                <p>-25%</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-home-outdoor">
          <div className="h-o-left">
            <p>Home and outdoor</p>
            <button>Source now</button>
          </div>
          <div className="h-o-right">
            <div className="right-top">
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Soft chairs</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/1.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Sofa & chair</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/1.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Kitchen dishes</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 93.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Smart watches</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 90.png" alt="" />
                </div>
              </div>
            </div>
            <div className="right-bottom">
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Kitchen mixer</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/9.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Blenders</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/1.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Home appliances</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/7.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Coffee maker</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 89.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-home-outdoor">
          <div
            style={{ backgroundImage: "url('src/assets/image 98.png')" }}
            className="h-o-left"
          >
            <p>Home and outdoor</p>
            <button>Source now</button>
          </div>
          <div className="h-o-right">
            <div className="right-top">
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Smart Watches</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/8.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Camera</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/6.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Headphones</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 86.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Smart watches</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 85.png" alt="" />
                </div>
              </div>
            </div>
            <div className="right-bottom">
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Headsets</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 29.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Laptops and PC</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 34.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Smartphones</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 23.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <p className="item-heading">Electric kattle</p>
                  <p className="item-price">From</p>
                  <p className="item-price">USD 19</p>
                </div>
                <div className="item-right">
                  <img src="src/assets/image 33.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-send-request">
          <div className="request-left">
            <h2>An easy way to send requests to all suppliers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="request-right">
            <h3>Send quote to suppliers</h3>
            <input type="text" placeholder="What items you need?" />
            <textarea
              placeholder="Type more details"
              name=""
              id=""
              rows={5}
            ></textarea>
            <div>
              <input type="number" placeholder="Quantity" />
              <select name="" id="">
                <option selected value="">
                  Pcs
                </option>
              </select>
            </div>
            <button>Send inquiry</button>
          </div>
        </section>
        <section className="section-recomended-items">
          <h3>Recommended items</h3>
          <div className="recomended-items">
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/Bitmap.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/2 1.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Jeans shorts for men blue color</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/image 30.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Brown winter coat medium size</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/image 24.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Jeans bag for travel for men</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/Bitmap (2).png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Leather wallet</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/image 86.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Canon camera black, 100x zoom</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/image 26.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Headset for gaming with mic</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/image 90.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Smartwatch silver color modern</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/image 26.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Blue wallet for men leather metarfial</p>
              </div>
            </div>
            <div className="recommended-item">
              <div className="top">
                <img src="src/assets/image 85.png" alt="" />
              </div>
              <div className="bottom">
                <h5>$10.99</h5>
                <p>Jeans bag for travel for men</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-extra-services">
          <h3>Our extra services</h3>
          <div className="extra-services">
            <div className="extra-service">
              <div className="service-top">
                <img src="src/assets/Mask group.png" alt="" />
              </div>
              <div className="service-bottom">
                Source from <br /> Industry Hubs
              </div>
            </div>
            <div className="extra-service">
              <div className="service-top">
                <img src="src/assets/Mask group (1).png" alt="" />
              </div>
              <div className="service-bottom">
                Customize Your <br /> Products
              </div>
            </div>
            <div className="extra-service">
              <div className="service-top">
                <img src="src/assets/image 106.png" alt="" />
              </div>
              <div className="service-bottom">
                Fast, reliable shipping by ocean or air
              </div>
            </div>
            <div className="extra-service">
              <div className="service-top">
                <img src="src/assets/image 107.png" alt="" />
              </div>
              <div className="service-bottom">
                Product monitoring <br />
                and inspection
              </div>
            </div>
          </div>
        </section>
        <section className="section-reigion">
          <h3>Suppliers by region</h3>
          <div className="reigion-items">
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/AE@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">Arabic Emirates</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/EN@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">Australia</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/US@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">United States</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/RU@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">Russia</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/DE@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">Italy</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/DK@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">Denmark</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/FR@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">France</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/AE@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">Arabic Emirates</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/CN@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">China</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
            <div className="reigion-item">
              <div className="item-image">
                <img src="src/assets/AE@2x.png" alt="" />
              </div>
              <div className="item-description">
                <p className="name">Arabic Emirates</p>
                <p className="website">shopname.ae</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-newsletter">
          <h3>Subscribe on our newsletter</h3>
          <p>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <form action="">
            <img src="src/assets/email.png" alt="" />
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
          </form>
        </section>
      </div>
    </>
  );
}
export default MainPage;
