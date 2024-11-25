import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import LogoImage from "../../../assets/logoImg.png";
import Insta from "@/src/assets/social/Group.svg";
import X from "@/src/assets/social/path1009.svg";
import Facebook from "@/src/assets/social/Vector.svg";
const Footer = () => {
  // const isActive = (path) => {
  //   if (typeof window !== "undefined") {
  //     return window.location.pathname.includes(path);
  //   }
  //   return false;
  // };

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
  const usfulLinksData = [
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
              <div className={styles.logo}>
                <Image src={LogoImage} alt="Logo" />
              </div>
            </div>
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Company</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {companyData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Comminities</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {communitiesData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.group}>
              <h2 className={styles.headTitle}>Usful Links</h2>
              <div className={styles.parent}>
                <ul className={styles.ul}>
                  {usfulLinksData?.map((item, index) => (
                    <li
                      key={index}
                      // className={`${styles.div8} ${
                      //   isActive(item?.href) ? styles.active : ""
                      // }`}
                    >
                      <Link href={item?.href} className={styles.link}>
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.allIcons}>
              <Link href="/" className={styles.oneIcon}>
                <Facebook />
              </Link>
              <Link href="/" className={styles.oneIcon}>
                <X />
              </Link>
              <Link href="/" className={styles.oneIcon}>
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
