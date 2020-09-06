import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar({ color, active }) {
  let backgroundColor;
  let fontColor;

  switch (color) {
    case 0:
      backgroundColor = "#fff1e8";
      fontColor = styles.dark;
      break;

    case 1:
      backgroundColor = "#ff004d";
      fontColor = styles.light;
      break;

    case 2:
      backgroundColor = "#ffa300";
      fontColor = styles.light;
      break;

    case 3:
      backgroundColor = "#00e436";
      fontColor = styles.light;
      break;

    case 4:
      backgroundColor = "#29adff";
      fontColor = styles.light;
      break;

    default:
      backgroundColor = "#fff1e8";
      fontColor = styles.dark;
      break;
  }

  return (
    <nav
      className={
        active ? styles.wrapper : [styles.wrapper, styles.deactive].join(" ")
      }
      styles={{ backgroundColor: backgroundColor }}
    >
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link href="/about">
            <a className={[styles.link, fontColor].join(" ")} id={styles.about}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a
              className={[styles.link, fontColor].join(" ")}
              id={styles.projects}
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={[styles.link, fontColor].join(" ")} id={styles.blog}>
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={[styles.link, fontColor].join(" ")}
              id={styles.contact}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
