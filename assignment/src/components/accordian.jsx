import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";

export default function ServicesAccordion() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getIcon = (panel) => (
    <Typography
      sx={{
        fontSize: "1.5rem",
        fontWeight: 100,
        fontFamily: "'Playfair Display', serif",
        color: "#00BFFF"
      }}
    >
      {expanded === panel ? "﹣" : "﹢"}
    </Typography>
  );

  const summaryStyle = {
    fontFamily: "'Playfair Display', serif",
    color: "#FFFFFFCC",
    fontSize: "26px"
  };

  const detailsStyle = {
    fontSize: "14px",
    textAlign: "start",
    color: "#FFFFFFCC",
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0
  };

  const accordionStyle = {
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none"
  };

  return (
    <div>
      {[
        {
          id: "panel1",
          title: "Flutter App Development",
          content:
            "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? Let's get started today!"
        },
        {
          id: "panel2",
          title: "UI/UX Design",
          content:
            "Elevate your product with intuitive and visually stunning UI/UX design tailored to your users’ needs."
        },
        {
          id: "panel3",
          title: "Customization & Integration",
          content:
            "Seamless customization and third-party service integration for powerful, scalable applications."
        },
        {
          id: "panel4",
          title: "Testing & Quality Assurance",
          content:
            "Comprehensive testing ensures your app is stable, secure, and user-ready before launch."
        },
        {
          id: "panel5",
          title: "Maintenance & Support",
          content:
            "Ongoing maintenance and expert support keep your application running smoothly after launch."
        },
        {
          id: "panel6",
          title: "Consulting & Training",
          content:
            "Get expert guidance and hands-on training to empower your team and optimize your tech stack."
        },
        {
          id: "panel7",
          title: "Migration & Upgrades",
          content:
            "Seamlessly migrate legacy systems or upgrade your application to the latest technologies with minimal disruption."
        }
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
          <AccordionDetails sx={detailsStyle}>
            <Typography sx={detailsStyle}>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
