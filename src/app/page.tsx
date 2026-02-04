import Header from "./components/Header";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      {/* Hero Section - Full screen image with text overlay */}
      <section className={styles.hero}>
        <Image
          src="/images/hero-img.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <hr /><p>EST. 1908 YOKOHAMA</p><hr />
          </div>
          <Image
            src="/vertical-logo.svg"
            alt="Logo"
            width={450}
            height={200}
          />
          <h1 className={styles.heroTitle}>Welcome to Our Site</h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyLeft}>
          <div className={styles.verticalTextWrapper}>
            <div className={styles.verticalText}>
              一皿に込めた、<br />
              一期一会の物語。
            </div>
            <div className={styles.verticalDivider}></div>
            <div className={styles.verticalText}>
              横浜の港が見守る<br />
              西洋館で刻む時。
            </div>
          </div>
        </div>

        <div className={styles.philosophyRight}>
          <div className={styles.philosophyContent}>
            <span className={styles.philosophyLabel}>Our Philosophy</span>
            <h2 className={styles.philosophyTitle}>
              Omotenashi &amp;<br />Gastronomy
            </h2>
            <p className={styles.philosophyText}>
              1908年の横浜の精神を体験してください。本格的なフランス料理と日本の「おもてなし」の温かさが融合した時を超えた調和。歴史ある洋館の中で、一世紀にわたって湾を見守ってきた空間をお楽しみください。
            </p>
          </div>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Image src="/icons/heritage.svg" alt="Heritage Icon" width={24} height={24} />
              </div>
              <div className={styles.featureContent}>
                <h3>Heritage</h3>
                <p>
                  A designated cultural property preserving the colonial architecture of the Meiji era.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Image src="/icons/cuisine.svg" alt="Cuisine Icon" width={24} height={24} />
              </div>
              <div className={styles.featureContent}>
                <h3>Cuisine</h3>
                <p>
                  Classic French techniques meet the finest locally sourced seasonal ingredients.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Image src="/icons/heart.svg" alt="Heart Icon" width={24} height={24} />
              </div>
              <div className={styles.featureContent}>
                <h3>Omotenashi</h3>
                <p>
                  Wholehearted service that anticipates your needs before they are spoken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}