'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        checkScroll();

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Image src="/logo.svg" alt="Logo" width={250} height={50} className={styles.logo} />
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#menu" className={styles.navLink}>Menu</a></li>
                    <li><a href="#scenes" className={styles.navLink}>Scenes</a></li>
                    <li><a href="#wedding" className={styles.navLink}>Wedding</a></li>
                    <li><a href="#access" className={styles.navLink}>Access</a></li>
                </ul>
            </nav>
            <button 
                className={styles.reserveButton}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ opacity: isHovering ? 1 : undefined }}
            >
                Reservation
            </button>
        </header>
    );
}