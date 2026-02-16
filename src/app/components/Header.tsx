'use client';

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Use ScrollTrigger to detect scroll — works with ScrollSmoother
        ScrollTrigger.create({
            start: "top -1",
            end: 99999,
            onUpdate: (self) => {
                setIsScrolled(self.progress > 0);
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(target, true, "top top");
        }
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={250} height={50} className={styles.logo} />
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#scenes" onClick={(e) => handleNavClick(e, "#scenes")} className={styles.navLink}>Scenes</a></li>
                    <li><a href="#menu" onClick={(e) => handleNavClick(e, "#menu")} className={styles.navLink}>Menu</a></li>
                    <li><a href="#wedding" onClick={(e) => handleNavClick(e, "#wedding")} className={styles.navLink}>Wedding</a></li>
                    <li><a href="#access" onClick={(e) => handleNavClick(e, "#access")} className={styles.navLink}>Access</a></li>
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