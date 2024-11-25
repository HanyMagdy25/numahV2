import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Icon11 from "../src/assets/homeIcon.svg";
import Header from "@/src/components/Layout/Header/Header";
import Sidebar from "@/src/components/Layout/Sidebar/Sidebar";
import Footer from "@/src/components/Layout/Footer/Footer";
import img1 from "@/src/assets/image 1.png";
import img2 from "@/src/assets/image 2.png";
import img3 from "@/src/assets/image 3.png";
import img4 from "@/src/assets/image 5.png";
import imgGenre1 from "@/src/assets/genres/image (1).png";
import imgGenre2 from "@/src/assets/genres/image (2).png";
import imgGenre3 from "@/src/assets/genres/image (3).png";
import imgGenre4 from "@/src/assets/genres/image 3.png";
import imgGenre5 from "@/src/assets/genres/image.png";
import imgRecently1 from "@/src/assets/recently/image (4).png";
import imgRecently2 from "@/src/assets/recently/image 1 (1).png";
import imgRecently3 from "@/src/assets/recently/image 1 (2).png";
import TopPicks from "@/src/components/TopPicks/TopPicks";
import Genres from "@/src/components/Genres/Genres";
import RecentlyPlayed from "@/src/components/RecentlyPlayed/RecentlyPlayed";
import TrendingArtists from "@/src/components/TrendingArtists/TrendingArtists";
import artist1 from "@/src/assets/artists/image (4).png";
import artist2 from "@/src/assets/artists/image (5).png";
import artist3 from "@/src/assets/artists/image (6).png";
import artist4 from "@/src/assets/artists/image (7).png";

const inter = Inter({ subsets: ["latin"] });
const topPicksData = [
  {
    id: 1,
    image: img1,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 2,
    image: img2,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 3,
    image: img3,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 4,
    image: img4,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 5,
    image: img1,
    artist: "Boj",
    title: "Gbagada Express",
  },
  {
    id: 6,
    image: img2,
    artist: "New Jazz Underground",
    title: "the MF DOOM SUiTE",
  },
  {
    id: 7,
    image: img1,
    artist: "Boj",
    title: "Gbagada Express",
  },
  {
    id: 8,
    image: img2,
    artist: "New Jazz Underground",
    title: "the MF DOOM SUiTE",
  },
];
const freshReleaseData = [
  {
    id: 3,
    image: img3,
    artist: "ΔKTR",
    title: "Summer List 2",
  },

  {
    id: 6,
    image: img2,
    artist: "New Jazz Underground",
    title: "the MF DOOM SUiTE",
  },
  {
    id: 4,
    image: img4,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 1,
    image: img1,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 2,
    image: img2,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 5,
    image: img1,
    artist: "Boj",
    title: "Gbagada Express",
  },
  {
    id: 2,
    image: img2,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 5,
    image: img1,
    artist: "Boj",
    title: "Gbagada Express",
  },
];
const genresData = [
  {
    id: 1,
    image: imgGenre1,
    genre: "Punk",
  },
  {
    id: 2,
    image: imgGenre2,
    genre: "Punk",
  },
  {
    id: 3,
    image: imgGenre3,
    genre: "Jazz",
  },
  {
    id: 4,
    image: imgGenre4,
    genre: "Punk",
  },
  {
    id: 5,
    image: imgGenre5,
    genre: "Punk",
  },
  {
    id: 3,
    image: imgGenre3,
    genre: "Jazz",
  },
  {
    id: 4,
    image: imgGenre4,
    genre: "Punk",
  },
  {
    id: 5,
    image: imgGenre5,
    genre: "Punk",
  },
];
const recentlyPlayedData = [
  {
    id: 1,
    image: imgRecently1,
    artist: "New Jazz Underground",
    title: "the MF DOOM SUiTE",
  },
  {
    id: 2,
    image: imgRecently2,
    artist: "New Jazz Underground",
    title: "the MF DOOM SUiTE",
  },
  {
    id: 3,
    image: imgRecently3,
    artist: "It May Be Greenish...",
    title: "eebrozgi",
  },
  {
    id: 4,
    image: imgRecently2,
    artist: "Eldamar",
    title: "Akt I; First sight of...",
  },
  {
    id: 5,
    image: imgRecently3,
    artist: "It May Be Greenish...",
    title: "eebrozgi",
  },
  {
    id: 6,
    image: imgRecently2,
    artist: "Eldamar",
    title: "Akt I; First sight of...",
  },
];
const artistsData = [
  {
    id: 1,
    image: artist3,
    artist: "cEvin Key",
    title: "Summer List 2",
  },
  {
    id: 2,
    image: artist4,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 3,
    image: artist2,
    artist: "ΔKTR",
    title: "Summer List 2",
  },
  {
    id: 4,
    image: artist1,
    artist: "Magdalena Bay",
    title: "Summer List 2",
  },
  {
    id: 5,
    image: artist4,
    artist: "Boj",
    title: "Gbagada Express",
  },
  {
    id: 6,
    image: artist1,
    artist: "tunic",
    title: "the MF DOOM SUiTE",
  },
  {
    id: 7,
    image: artist3,
    artist: "Boj",
    title: "Gbagada Express",
  },
  {
    id: 8,
    image: artist2,
    artist: "Magdalena Bay",
    title: "the MF DOOM SUiTE",
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Numah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.page}>
          <Sidebar />
          <main className={styles.mainContent}>
            <Header />
            <div>
              <div className={styles.tabs}>
                <button className={`${styles.tab} ${styles.active}`}>
                  Home
                </button>
                <button className={styles.tab}>Following</button>
              </div>
              <TopPicks data={topPicksData} headTitle="Top Picks" />
              <TopPicks data={freshReleaseData} headTitle="Fresh Release" />
              <Genres data={genresData} headTitle="Genres" />
              <RecentlyPlayed
                data={recentlyPlayedData}
                headTitle="Recently Played"
              />
              <TrendingArtists
                data={artistsData}
                headTitle="Trending Artists"
              />
            </div>
          </main>
          <Footer />
        </div>
      </main>
    </>
  );
}
