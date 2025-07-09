import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Toolbar,
  AppBar,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Sidebar.css";
import logo from "../assets/images/vayuz_logo.png";

const drawerWidth = 240;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div className="sidebar d-flex flex-column h-100 p-3">
      {/* Logo */}
      <div className="text-center mb-4">
        <img src={logo} alt="Vayuz Logo" className="logo img-fluid" />
      </div>

      {/* Contact Button */}
      <div className="contact-btn-wrapper mb-3 text-center">
        <Button className="contact-button">CONTACT US</Button>
      </div>

      {/* Navigation Links */}
      <List className="flex-grow-1">
        {["App Development", "Challenges", "Hire Developer", "Community"].map(
          (text, index) => (
            <ListItem
              button
              key={index}
              onClick={() => isMobile && handleDrawerToggle()}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{ style: { fontSize: "15px" } }}
              />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <>
      {/* Mobile AppBar */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #4c4a4acc",
            height: "100vh",
            overflow: "hidden", //
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {isMobile && <Toolbar />}
    </>
  );
};

export default Sidebar;
