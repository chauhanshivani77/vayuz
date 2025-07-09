import React, { useState } from "react";
import "./MainPage.css";
import { Button } from "@mui/material";
import rectangle_3 from "../assets/images/Rectangle-3.png";
import rectangle_2 from "../assets/images/rectangle-2.png";
import rectangle_1 from "../assets/images/rectangle-1.png";
import { GoArrowUpRight } from "react-icons/go";
import Link from "@mui/material/Link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import dynamic_img from "../assets/images/dynamic-img.png";
import background_img from "../assets/images/background-image.png";
import Sidebar from "./Sidebar"; // ✅ Sidebar component added

const MainPage = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getIcon = (panel) => (
    <Typography
      sx={{
        fontSize: "3rem",
        fontWeight: 100,
        fontFamily: "'Playfair Display', serif",
        color: "#FFFFFFCC",
        margin: 0,
      }}
    >
      {expanded === panel ? "﹣" : "﹢"}
    </Typography>
  );

  const summaryStyle = {
    fontFamily: "'Playfair Display', serif",
    color: "#FFFFFFCC",
    fontSize: "30px",
  };

  const detailsStyle = {
    fontSize: "14px",
    textAlign: "start",
    color: "#FFFFFFCC",
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
  };

  const accordionStyle = {
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none",
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="main-page" style={{ flexGrow: 1 }}>
        <div className="container px-0">
          <section className="first-section mb-lg-5 mb-md-5 px-4">
            <div className="header">
              <p className="subtitle">
                Securing Your Flutter App: Best Practices and Techniques
              </p>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="left-side">
                  <h1>
                    Unlock the Potential <br />
                    of Flutter
                  </h1>
                  <p style={{ fontWeight: 400, fontSize: "20px" }}>
                    Your Premier Partner for Cross-Platform <br /> App
                    Excellence!
                  </p>
                  <Button
                    variant="contained"
                    className="upgrade-btn"
                    style={{ fontWeight: "500" }}
                  >
                    UPGRADE YOUR TECH
                  </Button>
                </div>
              </div>
              <div className="col-md-7">
                <div className="right-side">
                  <div className="right-bg">
                    <img
                      src={background_img}
                      alt="bg"
                      className="bg-image img-fluid"
                    />
                  </div>
                  <img
                    src={rectangle_3}
                    alt="rectangle-3"
                    className="rectangle-3"
                  />
                  <img
                    src={rectangle_2}
                    alt="rectangle-2"
                    className="rectangle-2"
                  />
                  <img
                    src={rectangle_1}
                    alt="rectangle-1"
                    className="rectangle-1"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="second-section pb-3 px-4">
            <div className="row">
              <div className="col-md-3 pe-0">
                <div className="flutter-left">
                  <h1>
                    Flutter's <br /> Dawn
                  </h1>
                  <p className="mt-0">History of flutter</p>
                </div>
              </div>
              <div className="col-md-1 px-0"></div>
              <div className="col-md-5 ps-0">
                <div className="flutter-middle">
                  <p>
                    Uncover the fascinating story of Flutter in 'Flutter's Dawn:
                    History of Flutter.' From humble origins to global acclaim,
                    delve into its captivating narrative. Explore milestones,
                    triumphs, and challenges. Whether tech enthusiast or curious
                    mind, join us on this captivating journey!{" "}
                    <Link href="#" underline="none">
                      Click to begin!
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <div className="flutter-right">
                  <Button
                    variant="contained"
                    className="upgrade-btn "
                    style={{ marginTop: "-1.5rem", fontWeight: "500" }}
                  >
                    Begin
                    <GoArrowUpRight
                      style={{ fontSize: "1.5rem", marginLeft: "10px" }}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="third-section mt-5 pt-5 px-4">
            <div className="upper-head">
              <h1 className="mb-0">Our Dynamic Services Suite!</h1>
              <p className="sub-head mt-0">
                Embrace Innovation: Let's Create Together!
              </p>
              <p className="mt-3">
                Step into innovation! Explore our range of services and let's
                create something extraordinary together. <br /> Your vision, our
                expertise. Let's begin!
              </p>
            </div>
            <div className="lower-head mt-4">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 px-0">
                  <div>
                    {[
                      {
                        id: "panel1",
                        title: "Flutter App Development",
                        content: (
                          <>
                            Unlock endless possibilities with Flutter App
                            Development. Build beautiful, high-performance
                            applications for any platform – faster and easier
                            than ever before.Learn more on Material UI{" "}
                            <Link
                              href="/"
                              target="_blank"
                              sx={{ color: "#00BFFF", fontWeight: 400 }}
                            >
                              and let's get started today!
                            </Link>{" "}
                          </>
                        ),
                      },
                      {
                        id: "panel2",
                        title: "UI/UX Design",
                        content: (
                          <>
                            Unlock endless possibilities with Flutter App
                            Development. Build beautiful, high-performance
                            applications for any platform – faster and easier
                            than ever before.Learn more on Material UI{" "}
                            <Link
                              href="/"
                              target="_blank"
                              sx={{ color: "#00BFFF", fontWeight: 400 }}
                            >
                              and let's get started today!
                            </Link>{" "}
                          </>
                        ),
                      },
                      {
                        id: "panel3",
                        title: "Customization & Integration",
                        content: (
                          <>
                            Unlock endless possibilities with Flutter App
                            Development. Build beautiful, high-performance
                            applications for any platform – faster and easier
                            than ever before.Learn more on Material UI{" "}
                            <Link
                              href="/"
                              target="_blank"
                              sx={{ color: "#00BFFF", fontWeight: 400 }}
                            >
                              and let's get started today!
                            </Link>{" "}
                          </>
                        ),
                      },
                      {
                        id: "panel4",
                        title: "Testing & Quality Assurance",
                        content: (
                          <>
                            Unlock endless possibilities with Flutter App
                            Development. Build beautiful, high-performance
                            applications for any platform – faster and easier
                            than ever before.Learn more on Material UI{" "}
                            <Link
                              href="/"
                              target="_blank"
                              sx={{ color: "#00BFFF", fontWeight: 400 }}
                            >
                              and let's get started today!
                            </Link>{" "}
                          </>
                        ),
                      },
                      {
                        id: "panel5",
                        title: "Maintenance & Support",
                        content: (
                          <>
                            Unlock endless possibilities with Flutter App
                            Development. Build beautiful, high-performance
                            applications for any platform – faster and easier
                            than ever before.Learn more on Material UI{" "}
                            <Link
                              href="/"
                              target="_blank"
                              sx={{ color: "#00BFFF", fontWeight: 400 }}
                            >
                              and let's get started today!
                            </Link>{" "}
                          </>
                        ),
                      },
                      {
                        id: "panel6",
                        title: "Consulting & Training",
                        content: (
                          <>
                            Unlock endless possibilities with Flutter App
                            Development. Build beautiful, high-performance
                            applications for any platform – faster and easier
                            than ever before.Learn more on Material UI{" "}
                            <Link
                              href="/"
                              target="_blank"
                              sx={{ color: "#00BFFF", fontWeight: 400 }}
                            >
                              and let's get started today!
                            </Link>{" "}
                          </>
                        ),
                      },
                      {
                        id: "panel7",
                        title: "Migration & Upgrades",
                        content: (
                          <>
                            Unlock endless possibilities with Flutter App
                            Development. Build beautiful, high-performance
                            applications for any platform – faster and easier
                            than ever before.Learn more on Material UI{" "}
                            <Link
                              href="/"
                              target="_blank"
                              sx={{ color: "#00BFFF", fontWeight: 400 }}
                            >
                              and let's get started today!
                            </Link>{" "}
                          </>
                        ),
                      },
                    ].map(({ id, title, content }) => (
                      <Accordion
                        key={id}
                        expanded={expanded === id}
                        onChange={handleChange(id)}
                        sx={accordionStyle}
                      >
                        <AccordionSummary expandIcon={getIcon(id)}>
                          <Typography sx={summaryStyle}>{title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            width: "78%", //
                            paddingTop: 0,
                            paddingBottom: 0,
                          }}
                        >
                          <Typography sx={detailsStyle}>{content}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </div>
                </div>
                <div className="col-md-5 mt-5 px-0">
                  <div className="dynamic-img-sec">
                    <img src={dynamic_img} alt="dynamic" className="dynamic" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
