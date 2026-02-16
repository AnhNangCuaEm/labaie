import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <ScrollAnimations />
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
        <div className={styles.philosophyLeft} data-animate="slide-left">
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

        <div className={styles.philosophyRight} data-animate="slide-right">
          <div className={styles.philosophyContent}>
            <span className={styles.philosophyLabel}>Our Philosophy</span>
            <h2 className={styles.philosophyTitle}>
              Omotenashi &amp;<br />Gastronomy
            </h2>
            <p className={styles.philosophyText}>
              1908年の横浜の精神を体験してください。本格的なフランス料理と日本の「おもてなし」の温かさが融合した時を超えた調和。歴史ある洋館の中で、一世紀にわたって湾を見守ってきた空間をお楽しみください。
            </p>
          </div>

          <div className={styles.featureGrid} data-animate="stagger-children">
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
      <section id="scenes" className={styles.occasions}>
        <div className={styles.occasionsHeader} data-animate="header">
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
      <section id="menu" className={styles.menu}>
        <div className={styles.menuHeader} data-animate="header">
          <span className={styles.menuLabel}>Menu</span>
          <h2 className={styles.menuTitle}>四季のコース</h2>
          <p className={styles.menuSubtitle}>
            旬の食材を活かした、シェフ渾身のフレンチコース。<br />
            季節ごとに変わる特別なメニューをお楽しみください。
          </p>
        </div>

        <div className={styles.menuCategories}>
          {/* Lunch Course */}
          <div className={styles.menuCategory} data-animate="fade-up">
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
          <div className={`${styles.menuCategory} ${styles.menuCategoryFeatured}`} data-animate="fade-up">
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
          <div className={styles.menuCategory} data-animate="fade-up">
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

        <div className={styles.menuGallery} data-animate="stagger-children">
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

      {/* Wedding Plan Section */}
      <section id="wedding" className={styles.wedding}>
        <div className={styles.weddingHeader} data-animate="header">
          <span className={styles.weddingLabel}>Wedding Plan</span>
          <h2 className={styles.weddingTitle}>永遠の誓いを、歴史ある館で</h2>
          <p className={styles.weddingSubtitle}>
            1908年より時を刻む横浜の洋館で、おふたりだけの特別な一日を。<br />
            フレンチの伝統と日本のおもてなしが織りなす、至福のウェディング。
          </p>
        </div>

        <div className={styles.weddingPlans} data-animate="stagger-children">
          {/* Plan 1 */}
          <div className={styles.weddingPlan}>
            <div className={styles.weddingPlanBadge}>人気No.1</div>
            <div className={styles.weddingPlanIcon}>♦</div>
            <h3 className={styles.weddingPlanName}>La Baie Premium</h3>
            <p className={styles.weddingPlanPrice}>¥1,980,000〜 <span>（40名様）</span></p>
            <div className={styles.weddingPlanDivider} />
            <ul className={styles.weddingPlanFeatures}>
              <li>挙式（チャペル or 人前式）</li>
              <li>披露宴（フルコース料理）</li>
              <li>フラワーコーディネート</li>
              <li>ウェディングケーキ</li>
              <li>ドレス＆タキシード（各1着）</li>
              <li>ヘアメイク・着付け</li>
              <li>写真撮影（200カット以上）</li>
              <li>招待状・席次表</li>
            </ul>
            <button className={styles.weddingPlanButton}>
              プランの詳細を見る <span>→</span>
            </button>
          </div>

          {/* Plan 2 */}
          <div className={styles.weddingPlan}>
            <div className={styles.weddingPlanIcon}>♦</div>
            <h3 className={styles.weddingPlanName}>Petit Wedding</h3>
            <p className={styles.weddingPlanPrice}>¥680,000〜 <span>（10名様）</span></p>
            <div className={styles.weddingPlanDivider} />
            <ul className={styles.weddingPlanFeatures}>
              <li>少人数挙式プラン</li>
              <li>特別フルコース料理</li>
              <li>フラワーアレンジメント</li>
              <li>ミニウェディングケーキ</li>
              <li>衣装レンタル</li>
              <li>スナップ撮影</li>
            </ul>
            <button className={styles.weddingPlanButton}>
              プランの詳細を見る <span>→</span>
            </button>
          </div>

          {/* Plan 3 */}
          <div className={styles.weddingPlan}>
            <div className={styles.weddingPlanIcon}>♦</div>
            <h3 className={styles.weddingPlanName}>Photo Wedding</h3>
            <p className={styles.weddingPlanPrice}>¥280,000〜</p>
            <div className={styles.weddingPlanDivider} />
            <ul className={styles.weddingPlanFeatures}>
              <li>洋館ロケーション撮影</li>
              <li>衣装レンタル（各1着）</li>
              <li>ヘアメイク</li>
              <li>全データ納品（100カット以上）</li>
              <li>アルバム1冊</li>
            </ul>
            <button className={styles.weddingPlanButton}>
              プランの詳細を見る <span>→</span>
            </button>
          </div>
        </div>

        <div className={styles.weddingFooter}>
          <p className={styles.weddingNote}>
            ※ ブライダルフェアは毎週土・日曜日に開催しております。<br />
            ※ お見積り・ご相談は無料です。お気軽にお問い合わせください。
          </p>
          <button className={styles.weddingContactButton}>
            ブライダル相談予約 <span>→</span>
          </button>
        </div>
      </section>

      {/* Blog / News Section */}
      <section className={styles.blog}>
        <div className={styles.blogHeader} data-animate="header">
          <span className={styles.blogLabel}>Blog &amp; News</span>
          <h2 className={styles.blogTitle}>お知らせ</h2>
        </div>

        <div className={styles.blogGrid} data-animate="stagger-children">
          {/* Blog Post 1 */}
          <article className={styles.blogCard}>
            <div className={styles.blogCardDate}>
              <span className={styles.blogDay}>13</span>
              <span className={styles.blogMonth}>2024.04</span>
            </div>
            <div className={styles.blogCardContent}>
              <span className={styles.blogTag}>お知らせ</span>
              <h3 className={styles.blogCardTitle}>横浜山手より。</h3>
              <p className={styles.blogCardExcerpt}>
                春の陽気に包まれた山手の丘から、桜の便りをお届けいたします。テラス席からの眺めも格別です。
              </p>
              <a href="#" className={styles.blogReadMore}>
                続きを読む <span>→</span>
              </a>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className={styles.blogCard}>
            <div className={styles.blogCardDate}>
              <span className={styles.blogDay}>11</span>
              <span className={styles.blogMonth}>2024.04</span>
            </div>
            <div className={styles.blogCardContent}>
              <span className={styles.blogTag}>シェフ日記</span>
              <h3 className={styles.blogCardTitle}>ラベシェフ日記 No.01</h3>
              <p className={styles.blogCardExcerpt}>
                新しく着任したシェフが語る、La Baieの厨房から見える風景と料理への想い。
              </p>
              <a href="#" className={styles.blogReadMore}>
                続きを読む <span>→</span>
              </a>
            </div>
          </article>

          {/* Blog Post 3 - Reservation Info */}
          <article className={`${styles.blogCard} ${styles.blogCardReservation}`}>
            <div className={styles.blogCardDate}>
              <span className={styles.blogDay}>09</span>
              <span className={styles.blogMonth}>2024.04</span>
            </div>
            <div className={styles.blogCardContent}>
              <span className={styles.blogTag}>ご予約</span>
              <h3 className={styles.blogCardTitle}>ご予約・お問い合わせのご案内</h3>
              <p className={styles.blogCardExcerpt}>
                オンライン予約フォームが新しくなりました。24時間いつでもご予約いただけます。お電話でのお問い合わせもお気軽にどうぞ。
              </p>
              <a href="#" className={styles.blogReadMore}>
                予約フォームへ <span>→</span>
              </a>
            </div>
          </article>

          {/* Blog Post 4 */}
          <article className={styles.blogCard}>
            <div className={styles.blogCardDate}>
              <span className={styles.blogDay}>07</span>
              <span className={styles.blogMonth}>2024.04</span>
            </div>
            <div className={styles.blogCardContent}>
              <span className={styles.blogTag}>メニュー</span>
              <h3 className={styles.blogCardTitle}>春のメニューのお知らせ</h3>
              <p className={styles.blogCardExcerpt}>
                桜鯛や筍、山菜など、春の恵みをふんだんに使った新メニューが登場いたしました。
              </p>
              <a href="#" className={styles.blogReadMore}>
                続きを読む <span>→</span>
              </a>
            </div>
          </article>
        </div>

        <div className={styles.blogFooter}>
          <button className={styles.blogButton}>
            すべての記事を見る <span>→</span>
          </button>
        </div>
      </section>

      {/* Location Section */}
      <section id="access" className={styles.location}>
        <div className={styles.locationHeader} data-animate="header">
          <span className={styles.locationLabel}>Location</span>
          <h2 className={styles.locationTitle}>アクセス</h2>
        </div>

        <div className={styles.locationContent}>
          {/* Left - Info */}
          <div className={styles.locationInfo} data-animate="slide-left">
            <div className={styles.locationName}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={300}
                height={38}
                style={{ filter: "invert(1)" }}
              />
              <p className={styles.locationNameJp}>グランメゾン ラ・ベ</p>
            </div>

            <div className={styles.locationDetails}>
              <div className={styles.locationDetailItem}>
                <span className={styles.locationDetailLabel}>住所</span>
                <p>〒231-0015<br />神奈川県横浜市中区山手町0-0-0</p>
              </div>

              <div className={styles.locationDetailItem}>
                <span className={styles.locationDetailLabel}>営業時間</span>
                <div className={styles.locationHours}>
                  <p>ランチ　11:30 - 14:00 (L.O. 13:30)</p>
                  <p>ディナー　17:30 - 21:00 (L.O. 20:30)</p>
                </div>
              </div>

              <div className={styles.locationDetailItem}>
                <span className={styles.locationDetailLabel}>定休日</span>
                <p>月曜日（祝日の場合は翌日）</p>
              </div>

              <div className={styles.locationDetailItem}>
                <span className={styles.locationDetailLabel}>アクセス</span>
                <div className={styles.locationAccess}>
                  <p>みなとみらい線「元町・中華街駅」5番出口より徒歩8分</p>
                  <p>JR「石川町駅」南口より徒歩12分</p>
                </div>
              </div>

              <div className={styles.locationDetailItem}>
                <span className={styles.locationDetailLabel}>駐車場</span>
                <p>あり（10台）</p>
              </div>
            </div>

            <button className={styles.locationReserveButton}>
              オンライン予約 <span>→</span>
            </button>
          </div>

          {/* Right - Map */}
          <div className={styles.locationMap} data-animate="slide-right">
            <div
              className={styles.locationMapImage}
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDndYNGAIlx40Nl1Z8SkR5Y0MvGLeWSxGFeFeN_xxSlkTxfw8AL3jlaQEhYWiKks08l9mVEGm5z4OPmD0Q2zIesauEPfsJpFuVxWhH9dMRuIY-mX9L82qY0Yv2ggHwv9WEjbzi2ORplx7QGPROdQV-uaBT05IJQORJUKqv4wfm6cR9Dp7k5FmkILEMM8qSioOASMlm7ebXB64LXV5i4a3_VQ08h9Iph2Dikel806eUfJ179Qxj-AgOO_DVxREW-JDT6ZB0TkWqyoNQ')"
              }}
            >
              <div className={styles.locationMapOverlay}>
                <button className={styles.locationMapButton}>
                  Googleマップで見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}