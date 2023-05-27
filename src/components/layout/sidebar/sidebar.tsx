import React from "react";
import styles from "../../../styles/Sidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

// export type SidebarProps = {};
// type Props = {
//     sidebar: SidebarProps;
// };

// const Sidebar = ({ sidebar }: Props) => {

const Sidebar = () => {
  const links = [
    { label: " Home", path: "/" },
    { label: " Websites", path: "/website" },
    { label: " Emails", path: "/email" },
  ];
  const router = useRouter();

  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.web_head}`}>
        <Link className={styles.web_logo} href="/">
          <div>
            <p className={styles.web_logo_text}>SCRAPPING MINT</p>
          </div>
        </Link>
        <div className={styles.web_head_bar}></div>
      </div>
      <div className={styles.menu}>
        <div>
          {links.map((link, i) => {
            return (
              <Link key={i} rel="stylesheet" href={link.path}>
                <button
                  className={styles.menu_button}
                  style={{
                    background: `${
                      router.asPath === link.path ? "rgb(48 58 101)" : ""
                    }`,
                    border: `${
                      router.asPath !== link.path && "none" 
                    }`
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <p className={styles.menu_icon}>ab</p>
                    <p className={styles.label}>{link.label}</p>
                  </div>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
