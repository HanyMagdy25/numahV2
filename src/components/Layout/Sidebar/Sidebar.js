import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Sidebar.module.css";
import LogoImage from "../../../assets/logoImg.png";
import HomeIcon from "../../../assets/homeIcon.svg";
import MusicIcon from "../../../assets/music-library-2.svg";
import GroupIcon from "../../../assets/Group.svg";
import playlist1 from "@/src/assets/playlist1.png";
import playlist2 from "@/src/assets/playlist2.png";
import PlusPng from "@/src/assets/plus.png";
import Closeicon from "@/src/assets/close.svg";

const playListData = [
  {
    id: 1,
    image: playlist1,
    number: 50,
    title: "Summer List 2",
  },
  {
    id: 2,
    image: playlist2,
    number: 52,
    title: "Ni0ghtty night",
  },
  {
    id: 3,
    image: playlist1,
    number: 77,
    title: "Country music",
  },
  {
    id: 4,
    image: playlist2,
    number: 90,
    title: "Slow",
  },
  {
    id: 5,
    image: playlist2,
    number: 50,
    title: "Nightty night",
  },
  {
    id: 6,
    image: playlist1,
    number: 60,
    title: "Country music",
  },
  {
    id: 7,
    image: playlist2,
    number: 520,
    title: "Slow",
  },
];
const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${showSidebar ? styles.active : ""}`}>
      <div className={styles.logo}>
        <button
          className={styles.closeBtn}
          aria-label="Close Sidebar"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <Closeicon fill="#9EACB9" width="14" height="14" />
        </button>
        <Image src={LogoImage} alt="Logo" />
      </div>
      <div>
        <ul className={styles.mainList}>
          <li className={styles.oneItemList}>
            <Link href="/" className={styles.oneItem}>
              <HomeIcon fill="#A0AEC0" />
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.oneItemList}>
            <Link href="/library" className={styles.oneItem}>
              <MusicIcon fill="#A0AEC0" />

              <span>Library</span>
            </Link>
          </li>
          <li className={styles.oneItemList}>
            <Link href="/playlist" className={styles.oneItem}>
              <GroupIcon fill="#A0AEC0" />
              <span>Playlist</span>
            </Link>
          </li>
          <div className={styles.playList}>
            <ul className={styles.playListItems}>
              {playListData?.map((item, index) => (
                <li key={index} className={styles.playListItem}>
                  <Image src={item.image} alt="Playlist" />
                  <div>
                    <h3>{item?.title}</h3>
                    <h6>{item?.number} songs</h6>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.addPlaylistDiv}>
            <button type="button" className={styles.addPlaylist}>
              <Image src={PlusPng} alt="plusIcon" width={24} height={24} />
              Add new playlist
            </button>
          </div>
        </ul>
        <div className={styles.settingsDiv}>
          <button type="button" className={styles.settings}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7501 5.58375C14.2417 5.58375 13.6251 4.51709 14.3751 3.20875C14.8084 2.45042 14.5501 1.48375 13.7917 1.05042L12.3501 0.225419C11.6917 -0.166248 10.8417 0.0670858 10.4501 0.725419L10.3584 0.883752C9.60841 2.19209 8.37508 2.19209 7.61675 0.883752L7.52508 0.725419C7.15008 0.0670858 6.30008 -0.166248 5.64175 0.225419L4.20008 1.05042C3.44175 1.48375 3.18341 2.45875 3.61675 3.21709C4.37508 4.51709 3.75841 5.58375 2.25008 5.58375C1.38341 5.58375 0.666748 6.29209 0.666748 7.16709V8.63375C0.666748 9.50042 1.37508 10.2171 2.25008 10.2171C3.75841 10.2171 4.37508 11.2838 3.61675 12.5921C3.18341 13.3504 3.44175 14.3171 4.20008 14.7504L5.64175 15.5754C6.30008 15.9671 7.15008 15.7338 7.54175 15.0754L7.63341 14.9171C8.38341 13.6088 9.61675 13.6088 10.3751 14.9171L10.4667 15.0754C10.8584 15.7338 11.7084 15.9671 12.3667 15.5754L13.8084 14.7504C14.5667 14.3171 14.8251 13.3421 14.3917 12.5921C13.6334 11.2838 14.2501 10.2171 15.7584 10.2171C16.6251 10.2171 17.3417 9.50875 17.3417 8.63375V7.16709C17.3334 6.30042 16.6251 5.58375 15.7501 5.58375ZM9.00008 10.6088C7.50841 10.6088 6.29175 9.39209 6.29175 7.90042C6.29175 6.40875 7.50841 5.19209 9.00008 5.19209C10.4917 5.19209 11.7084 6.40875 11.7084 7.90042C11.7084 9.39209 10.4917 10.6088 9.00008 10.6088Z"
                fill="#A0AEC0"
              />
            </svg>
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
