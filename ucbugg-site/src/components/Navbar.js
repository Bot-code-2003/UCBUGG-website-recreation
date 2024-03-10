import React from "react";
import styles from "../styles/Navbar.module.css";
// import { Link } from "react-router-dom";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link to="/" className={`${styles.left} ${styles.navlink}`}>
        <img src="/logo.png" alt="Logo" />
        <div className={styles.title}>
          <h1>UCBUGG</h1>
        </div>
        <div className={styles.caption}>
          <p>3D Modeling</p>
          <p>& Animation</p>
        </div>
      </Link>
      <div className={styles.right}>
        <Link to="/" className={styles.navlink}>
          <h2>Home</h2>
        </Link>
        <Link to="/syllabus" className={styles.navlink}>
          <h2>Syllabus</h2>
        </Link>
        <Link to="/labs" className={styles.navlink}>
          <h2>Labs</h2>
        </Link>
        <Link to="/projects" className={styles.navlink}>
          <h2>Projects</h2>
        </Link>
        <Link to="/about" className={styles.navlink}>
          <h2>About</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
