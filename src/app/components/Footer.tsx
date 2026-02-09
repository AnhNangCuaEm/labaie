import styles from './footer.module.scss';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div>
                            <Image src="/logo.svg" alt="Logo" width={300} height={40} />
                        </div>
                        <p>
                            歴史的な横浜の中心で、時を超えた料理の旅。
                        </p>
                        <p>
                            〒231-0015 神奈川県横浜市山手0-0-0
                        </p>
                        <p>
                            駐車場: あり(10台)
                        </p>
                        <div className={styles.social}>
                            <a href="#">
                                <Image
                                    src="/icons/x-logo-white.png"
                                    alt="X icon"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a href="#">
                                <Image
                                    src="/icons/insta-logo.svg"
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                    className='social-icon'
                                />
                            </a>
                        </div>
                    </div>

                    {/* Reservations */}
                    <div className={styles.reservations}>
                        <h3>Reservations</h3>
                        <p className={styles.callLabel}>電話:</p>
                        <a href="tel:078-262-6650" className={styles.phone}>078-262-6650</a>
                        <p className={styles.hours}>受付: 11:00 - 21:00</p>
                        <button className={styles.bookingBtn}>オンライン予約</button>
                    </div>

                    {/* Hours */}
                    <div className={styles.hoursSection}>
                        <h3>Hours</h3>
                        <ul className={styles.hoursList}>
                            <li>
                                <span>ランチ</span>
                                <span>11:30 - 14:00 (L.O. 13:30)</span>
                            </li>
                            <li>
                                <span>ディナー</span>
                                <span>17:30 - 21:00 (L.O. 20:30)</span>
                            </li>
                            <li className="closed">
                                <span className={styles.label}>休日:</span>
                                <span>月曜日 (祝日の場合は翌日)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className={styles.links}>
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="#">プライベートダイニング</a></li>
                            <li><a href="#">季節のメニュー</a></li>
                            <li><a href="#">採用情報</a></li>
                            <li><a href="#">プライバシーポリシー</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copyright}>
                    © 2026 Grande Maison La Baie. All rights reserved.
                </div>
            </div>
        </footer>
    );
}