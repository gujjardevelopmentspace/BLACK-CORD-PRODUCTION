import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const navLinks = [
  { name: "Home", path: "/", variant: "nav" },
  { name: "Portfolio", path: "/portfolio", variant: "nav" },
  { name: "Services", path: "/services", variant: "nav" },
  { name: "Pricing", path: "/pricing", variant: "nav" },
  { name: "Contact", path: "/contact", variant: "nav" },
  { name: "Client Login", path: "/client-login", variant: "ghost" },
  { name: "Start Project", path: "/start-project", variant: "member" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      style={{
        background: "#FFFFFF",
        boxShadow: "0 1px 0 rgba(0,0,0,0.08)",
      }}
    >
      <div className="navbar-content">

        {/* Navigation Links */}
        <div className="flex gap-3 items-center">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={link.path}
                className={
                  `navbar-btn btn-${link.variant}` +
                  (location.pathname === link.path ? " active" : "")
                }
                style={{
                  display: "inline-block",
                  padding: "0.6em 1.4em",
                  borderRadius: "0.5em",
                  fontWeight: "600",
                  fontSize: "1rem",
                  background:
                    link.variant === "member"
                      ? "#FF0000"
                      : link.variant === "nav"
                      ? "transparent"
                      : "transparent",
                  color:
                    link.variant === "member"
                      ? "#FFFFFF"
                      : "#000000",
                  border:
                    link.variant === "ghost"
                      ? "1px solid #000000"
                      : "none",
                  boxShadow:
                    location.pathname === link.path
                      ? "0 0 0 2px #FF0000"
                      : "none",
                  transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
