/*eslint-disable*/
import React from "react";
import { Link } from "react-scroll";
import Scroll from "../ScrollToTop/Scroll";
// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
               <Scroll showBelow={250}/>
            </li>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Mediterravenir
              </a>
            </li>
            <li>
              <Link
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
                to="about"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Coded by{" "}
            Quad Squad
        </div>

      </Container>


    </footer>
  );
}

export default DarkFooter;
