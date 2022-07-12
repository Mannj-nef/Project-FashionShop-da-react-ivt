import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const socialImg = [
  {
    id: 1,
    imgUrl:
      "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/61188999_857172707995800_60073170215336813_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=NWCuq69RABUAX8gSJkE&_nc_ht=scontent-den4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_nwkTEve38IMb4ZCmAslgb1E7WJS4wEFQf5vTQ4sLKzQ&oe=62CF7653",
  },
  {
    id: 2,
    imgUrl:
      "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/61472921_1292768634212677_8560339718904799741_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=RmJUvrk8xX8AX9GdlpZ&_nc_ht=scontent-den4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-ElLYzAKCfbIoMrm22edikNPGYbLy4nnrpALsrJFpP9Q&oe=62CF4E6C",
  },
  {
    id: 3,
    imgUrl:
      "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/61188999_857172707995800_60073170215336813_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=NWCuq69RABUAX8gSJkE&_nc_ht=scontent-den4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_nwkTEve38IMb4ZCmAslgb1E7WJS4wEFQf5vTQ4sLKzQ&oe=62CF7653",
  },
  {
    id: 4,
    imgUrl:
      "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/61472921_1292768634212677_8560339718904799741_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=RmJUvrk8xX8AX9GdlpZ&_nc_ht=scontent-den4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-ElLYzAKCfbIoMrm22edikNPGYbLy4nnrpALsrJFpP9Q&oe=62CF4E6C",
  },
];

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container menu_footer-wrapp">
          <div className="menu_footer">
            <h4 className="title">USEFUL INFORMATION</h4>
            <ul className="nav_menu-footer">
              <li>
                <Link to="" className="nav_menu-link">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  Payment
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  FAQ’s
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu_footer">
            <h4 className="title">HELP</h4>
            <ul className="nav_menu-footer">
              <li>
                <Link to="" className="nav_menu-link">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  Authors
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu_footer">
            <h4 className="title">OUR COMMUNITY</h4>
            <ul className="nav_menu-footer">
              <li>
                <Link to="" className="nav_menu-link">
                  Community
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="" className="nav_menu-link">
                  Forums
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu_footer connect-social">
            <h4 className="title">Connect with us</h4>
            <div className="wrapp-image-social">
              {socialImg.length > 0 &&
                socialImg.map((item) => (
                  <div key={item.id} className="wrapp-img">
                    <img src={item.imgUrl} alt="" />
                  </div>
                ))}
            </div>
            <p className="desc">
              Follow us to stay in the loop on what's new width Bindi.
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>© 2022 NikaStore, All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
