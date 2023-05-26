import React from 'react';
import styles from '../../../styles/Sidebar.module.css';
import Link from 'next/link';
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
        { label: " Emails", path: "/email"},
      ];
      const router = useRouter();

      return (
        <div className={`${styles.sidebar}`}>
          {links.map((link, i) => {
            return (
              <Link key={i} rel="stylesheet" href={link.path} style={{backgroundColor: `${router.asPath === link.path ? 'red' : ''}`}}>
                <h2>{link.label}</h2>
              </Link>
            );
          })}
        </div>
      );
}

export default Sidebar;