import Link from "next/link";
import styles from "./Header.module.css";
import BagIcon from "@/src/assets/bag.svg";
import UserIcon from "@/src/assets/user.svg";
import SearchIcon from "@/src/assets/search-normal.svg";
import ArrowLeft from "@/src/assets/arrow-left.svg";
import ArrowRight from "@/src/assets/arrow-right.svg";
import Menuicon from "@/src/assets/menu.svg";
import LogoSmall from "@/src/assets/logoSmall.svg";
const Header = ({ setShowSidebar }) => {
  return (
    <header className={styles.header}>
      <button
        className={styles.menuBtn}
        type="button"
        onClick={() => setShowSidebar(true)}
        aria-label="menu"
      >
        <Menuicon fill="#FFD500" />
      </button>
      <div className={styles.userInfo}>
        <div className={styles.LogoSmall}>
          <LogoSmall />
        </div>
        <div className={styles.text}>
          <h3>Hi, Dominic 👋🏻</h3>
          <p>Let's spin some tracks and vibe out! 🎧</p>
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.arrows}>
          <ArrowLeft />
          <ArrowRight />
        </div>
        <div className={styles.searchDiv}>
          <SearchIcon />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="What music are you in the mood for?"
          />
        </div>
      </div>
      <div className={styles.right}>
        <Link href="/premium" className={styles.premium}>
          Go Premium
        </Link>
        <div className={styles.icons}>
          <button
            className={`${styles.menuBtn} ${styles.menuBtnMobile}`}
            type="button"
            onClick={() => setShowSidebar(true)}
            aria-label="menu"
          >
            <Menuicon fill="#FFD500" />
          </button>
          <Link href="/cart" className={styles.icon}>
            <BagIcon />
          </Link>
          <Link href="/profile" className={styles.icon}>
            <UserIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
