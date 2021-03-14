/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create switch buttons
// plugin that creates slider

// reactstrap components
import {
    Container,
    Row,
     Card, CardHeader, CardBody,
} from "reactstrap";

import {BiRightArrow, FaFlag, GiEarthAfricaEurope, GrNote} from "react-icons/all";
import AboutImg from "assets/img/AboutImg.png";

function AboutSection() {

  return (
    <>
      <div id="about" className="section section-buttons">
        <Container>
          <div className="title">
            <h1 className="text-md-center text-dark">About us</h1>
          </div>

          <Row className="mr-4">
              <div className="col-6">
                  <Card className="mx-5 my-5">
                      <CardHeader>
                          <h3 className="text-dark my-3">
                              <GiEarthAfricaEurope/> Mediterravenir  </h3>
                      </CardHeader>
                      <CardBody>
                       <GrNote/> Created in 2012 in Tunisia. <br/>
                       <GrNote/> Acts to promote and strengthen the South-North dialogue between individuals and institutions of the Mediterranean basin on the cultural, social, geopolitical and economic level. <br/>
                       <GrNote/> Works mainly on civil rights and political life, education and vocational training at Euro-Mediterranean level.  <br/>
                       <GrNote/> Its target groups are women entrepreneurs, salaried women and young people.<br/>
                          <GrNote/> Méditerravenir has over 10 years of specific work experience in gender equality.
                      </CardBody>
                     </Card>
              </div>
              <div className="col-5 mx-4 my-5">

                    <img src={AboutImg} alt=""/>

              </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutSection;
