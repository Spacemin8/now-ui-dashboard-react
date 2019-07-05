/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.creative-tim.com?ref=nudr-docs-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://presentation.creative-tim.com?ref=nudr-docs-footer"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://blog.creative-tim.com?ref=nudr-docs-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/creativetimofficial/now-ui-dashboard-pro-react/blob/master/LICENSE.md"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {new Date().getFullYear()}, Designed by{" "}
            <a
              target="_blank"
              href="https://www.invisionapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invision
            </a>
            . Coded by{" "}
            <a
              target="_blank"
              href="https://www.creative-tim.com?ref=nudr-docs-footer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
