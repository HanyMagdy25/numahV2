import Link from "next/link";
import styles from "./Footer.module.css";
// Images and Icons
import LogoIcon from "@/src/assets/logo.svg";
import X from "@/src/assets/social/path1009.svg";
import Insta from "@/src/assets/social/Group.svg";
import Facebook from "@/src/assets/social/Vector.svg";

const FooterGroup = ({ title, links }) => (
  <div className={styles.group}>
    <h2 className={styles.headTitle}>{title}</h2>
    <ul className={styles.ul}>
      {links.map((item, index) => (
        <li key={index}>
          <Link href={item.href} className={styles.link}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  const companyData = [
    { label: "About", href: "/aboutUs" },
    { label: "Jobs", href: "/Jobs" },
    { label: "Press", href: "/Press" },
    { label: "News", href: "/News" },
  ];
  const communitiesData = [
    { label: "Artists", href: "/Artists" },
    { label: "Developers", href: "/Developers" },
    { label: "Labels", href: "/Labels" },
    { label: "Investors", href: "/Investors" },
    { label: "Brands", href: "/Brands" },
  ];
  const usefulLinksData = [
    { label: "Help", href: "/Help" },
    { label: "Gift", href: "/Gift" },
    { label: "Web Player", href: "/Web Player" },
  ];

  return (
    <footer className={[styles.footer].join(" ")}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <div className={styles.logoCol}>
              <Link href="/" className={styles.logo}>
                <LogoIcon />
              </Link>
            </div>
            <FooterGroup title="Company" links={companyData} />
            <FooterGroup title="Communities" links={communitiesData} />
            <FooterGroup title="Useful Links" links={usefulLinksData} />
          </div>
          <div className={styles.footerRight}>
            <div className={styles.allIcons}>
              <Link href="/" data-social="Facebook" className={styles.oneIcon}>
                <Facebook />
              </Link>
              <Link href="/" data-social="X" className={styles.oneIcon}>
                <X />
              </Link>
              <Link href="/" data-social="Instagram" className={styles.oneIcon}>
                <Insta />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.rights}>© 2024 Numah | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
