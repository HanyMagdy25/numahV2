import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import LogoIcon from "@/src/assets/logo.svg";
import HomeIcon from "../../../assets/homeIcon.svg";
import MusicIcon from "../../../assets/music-library-2.svg";
import GroupIcon from "../../../assets/Group.svg";
import playlist1 from "@/src/assets/playlist1.png";
import playlist2 from "@/src/assets/playlist2.png";
import PlusIcon from "@/src/assets/plus.svg";
import Closeicon from "@/src/assets/close.svg";
import SettingsIcon from "@/src/assets/settingsIcon.svg";

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
        <LogoIcon />
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
              <PlusIcon />
              Add new playlist
            </button>
          </div>
        </ul>
        <div className={styles.settingsDiv}>
          <button type="button" className={styles.settings}>
            <SettingsIcon />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
