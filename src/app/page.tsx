import Header from "./components/Header";
import Footer from "./components/Footer";
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
          <h1 className={styles.heroTitle}>時を超えた、和と洋の融合</h1>
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
                  明治時代の植民地建築を保存する指定文化財。
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
                  最高の地元産季節食材と出会うクラシックなフランス料理技法。
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
                  日本の伝統的なおもてなしの心で、温かく心地よい体験を。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className={styles.occasions}>
        <div className={styles.occasionsHeader}>
          <span className={styles.occasionsLabel}>Occasions</span>
          <h2 className={styles.occasionsTitle}>大切なひとときを</h2>
        </div>

        <div className={styles.accordionContainer}>
          {/* Business */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionImage}
              style={{ backgroundImage: "url('/images/accordion/business.png')" }}
            />
            <div className={styles.accordionOverlay} />
            <div className={styles.accordionInner}>
              <div className={styles.accordionLabel}>
                <span className={styles.verticalText}>Business</span>
                <span className={styles.mobileTitle}>Business</span>
              </div>
              <div className={styles.accordionContent}>
                <h4>Business</h4>
                <p className={styles.subtitle}>接待</p>
                <p className={styles.description}>
                  洗練されたプライベートルームで、成功へ導く細やかなサービスでゲストを魅了。
                </p>
                <button className={styles.viewButton}>
                  View Plan <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Family */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionImage}
              style={{ backgroundImage: "url('/images/accordion/family.jpg')" }}
            />
            <div className={styles.accordionOverlay} />
            <div className={styles.accordionInner}>
              <div className={styles.accordionLabel}>
                <span className={styles.verticalText}>Family</span>
                <span className={styles.mobileTitle}>Family</span>
              </div>
              <div className={styles.accordionContent}>
                <h4>Family</h4>
                <p className={styles.subtitle}>家族のお祝い</p>
                <p className={styles.description}>
                  温かく心地よい雰囲気の中で、世代を超えた家族との思い出を刻む。
                </p>
                <button className={styles.viewButton}>
                  View Plan <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Wedding */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionImage}
              style={{ backgroundImage: "url('/images/accordion/wedding.png')" }}
            />
            <div className={styles.accordionOverlay} />
            <div className={styles.accordionInner}>
              <div className={styles.accordionLabel}>
                <span className={styles.verticalText}>Wedding</span>
                <span className={styles.mobileTitle}>Wedding</span>
              </div>
              <div className={styles.accordionContent}>
                <h4>Wedding</h4>
                <p className={styles.subtitle}>ウェディング</p>
                <p className={styles.description}>
                  歴史ある館での夢のような始まり。特別な日のための独占的なブライダルプラン。
                </p>
                <button className={styles.viewButton}>
                  View Plan <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Anniversary */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionImage}
              style={{ backgroundImage: "url('/images/accordion/anniversary.png')" }}
            />
            <div className={styles.accordionOverlay} />
            <div className={styles.accordionInner}>
              <div className={styles.accordionLabel}>
                <span className={styles.verticalText}>Anniversary</span>
                <span className={styles.mobileTitle}>Anniversary</span>
              </div>
              <div className={styles.accordionContent}>
                <h4>Anniversary</h4>
                <p className={styles.subtitle}>記念日</p>
                <p className={styles.description}>
                  愛を祝う特別な席で、オリジナルケーキとシャンパンで素敵な時間をお過ごしください。
                </p>
                <button className={styles.viewButton}>
                  View Plan <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Party */}
          <div className={styles.accordionItem}>
            <div
              className={styles.accordionImage}
              style={{ backgroundImage: "url('/images/accordion/party.png')" }}
            />
            <div className={styles.accordionOverlay} />
            <div className={styles.accordionInner}>
              <div className={styles.accordionLabel}>
                <span className={styles.verticalText}>Party</span>
                <span className={styles.mobileTitle}>Party</span>
              </div>
              <div className={styles.accordionContent}>
                <h4>Party</h4>
                <p className={styles.subtitle}>パーティー</p>
                <p className={styles.description}>
                  大規模なグループ向けの広大なバンケットホール、カスタマイズされたコースメニュー付き。
                </p>
                <button className={styles.viewButton}>
                  View Plan <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className={styles.menu}>
        <div className={styles.menuHeader}>
          <span className={styles.menuLabel}>Menu</span>
          <h2 className={styles.menuTitle}>四季のコース</h2>
          <p className={styles.menuSubtitle}>
            旬の食材を活かした、シェフ渾身のフレンチコース。<br />
            季節ごとに変わる特別なメニューをお楽しみください。
          </p>
        </div>

        <div className={styles.menuCategories}>
          {/* Lunch Course */}
          <div className={styles.menuCategory}>
            <div className={styles.menuCategoryHeader}>
              <span className={styles.menuCategoryIcon}>◇</span>
              <h3 className={styles.menuCategoryTitle}>Lunch Course</h3>
              <span className={styles.menuCategoryPrice}>¥6,600〜</span>
            </div>
            <div className={styles.menuDivider} />
            <ul className={styles.menuItems}>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>アミューズ・ブーシュ</span>
                  <span className={styles.menuItemDesc}>季節の小さな一皿</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>前菜</span>
                  <span className={styles.menuItemDesc}>鎌倉野菜のテリーヌ 柚子ヴィネグレット</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>スープ</span>
                  <span className={styles.menuItemDesc}>本日のポタージュ</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>メイン</span>
                  <span className={styles.menuItemDesc}>三崎鮮魚のポワレ or 黒毛和牛のロースト</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>デセール</span>
                  <span className={styles.menuItemDesc}>パティシエ特製デザート</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Dinner Course */}
          <div className={`${styles.menuCategory} ${styles.menuCategoryFeatured}`}>
            <div className={styles.menuCategoryBadge}>Chef&apos;s Recommend</div>
            <div className={styles.menuCategoryHeader}>
              <span className={styles.menuCategoryIcon}>◇</span>
              <h3 className={styles.menuCategoryTitle}>Dinner Course</h3>
              <span className={styles.menuCategoryPrice}>¥15,400〜</span>
            </div>
            <div className={styles.menuDivider} />
            <ul className={styles.menuItems}>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>アミューズ・ブーシュ</span>
                  <span className={styles.menuItemDesc}>シェフからの小さなご挨拶</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>前菜</span>
                  <span className={styles.menuItemDesc}>フォアグラのテリーヌ 無花果のコンポート</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>スープ</span>
                  <span className={styles.menuItemDesc}>オマール海老のビスク</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>魚料理</span>
                  <span className={styles.menuItemDesc}>本日の鮮魚 シャンパンソース</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>肉料理</span>
                  <span className={styles.menuItemDesc}>A5黒毛和牛フィレ トリュフのジュ</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>デセール</span>
                  <span className={styles.menuItemDesc}>グランデセール &amp; 小菓子</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Seasonal Course */}
          <div className={styles.menuCategory}>
            <div className={styles.menuCategoryHeader}>
              <span className={styles.menuCategoryIcon}>◇</span>
              <h3 className={styles.menuCategoryTitle}>Seasonal Special</h3>
              <span className={styles.menuCategoryPrice}>¥22,000〜</span>
            </div>
            <div className={styles.menuDivider} />
            <ul className={styles.menuItems}>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>アミューズ</span>
                  <span className={styles.menuItemDesc}>旬の素材を使った三種の小皿</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>前菜</span>
                  <span className={styles.menuItemDesc}>季節の特選前菜</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>スープ</span>
                  <span className={styles.menuItemDesc}>本日の特製スープ</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>魚料理</span>
                  <span className={styles.menuItemDesc}>旬魚のスペシャリテ</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>肉料理</span>
                  <span className={styles.menuItemDesc}>特選和牛 季節の仕立て</span>
                </div>
              </li>
              <li className={styles.menuItem}>
                <div className={styles.menuItemInfo}>
                  <span className={styles.menuItemName}>デセール</span>
                  <span className={styles.menuItemDesc}>季節のグランデセール</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.menuGallery}>
          <div className={styles.menuGalleryItem}>
            <Image
              src="/images/menu/1.jpeg"
              alt="Dish 1"
              width={600}
              height={400}
              className={styles.menuGalleryImage}
            />
          </div>
          <div className={styles.menuGalleryItem}>
            <Image
              src="/images/menu/2.jpeg"
              alt="Dish 2"
              width={600}
              height={400}
              className={styles.menuGalleryImage}
            />
          </div>
          <div className={styles.menuGalleryItem}>
            <Image
              src="/images/menu/3.jpeg"
              alt="Dish 3"
              width={600}
              height={400}
              className={styles.menuGalleryImage}
            />
          </div>
          <div className={styles.menuGalleryItem}>
            <Image
              src="/images/menu/4.jpg"
              alt="Dish 4"
              width={600}
              height={400}
              className={styles.menuGalleryImage}
            />
          </div>
        </div>

        <div className={styles.menuFooter}>
          <p className={styles.menuNote}>
            ※ 食材の仕入れ状況により、メニュー内容が変更になる場合がございます。<br />
            ※ アレルギーをお持ちのお客様は、スタッフまでお申し付けください。
          </p>
          <button className={styles.menuButton}>
            View Full Menu <span className={styles.menuArrow}>→</span>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}