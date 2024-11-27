import Link from "next/link";
import Image from "next/image";
import styles from "./Premium.module.css";
// Images and Icons
import layerN from "../../assets/Layer_1.png";
import PremiumText from "../../assets/premiumText.svg";

const Premium = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.layerNDiv}>
        <Image src={layerN} alt="layerN" className={styles.layerN} />
      </div>
      <div className={styles.premiumTextDiv}>
        <PremiumText />
      </div>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>Unlock Unlimited Access!</h3>
        <p className={styles.contentDescription}>Subscribe today and elevate your experience!</p>
        <Link href="/" className={styles.subscribe}>
          Subscribe Now
        </Link>
      </div>
    </div>
  );
};

export default Premium;
