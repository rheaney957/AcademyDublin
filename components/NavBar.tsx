import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';
import { SetStateAction } from 'react';

export interface NavBarProps {
    isMobileMenuOpen: boolean;
    onMobileMenuToggle: () => void;
}

export default function NavBar({ isMobileMenuOpen, onMobileMenuToggle }: NavBarProps) {
    const router = useRouter();

    return (
        <div className={styles.navbarWrapper}>
            {/* Mobile menu button */}
            <button
                className={styles.mobileMenuButton}
                onClick={onMobileMenuToggle}
                aria-label="Open menu"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Desktop navigation */}
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <ul className={styles.navMenu}>
                        <li className={styles.navItem}>
                            <Link href="/">
                                Live Shows
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/venues">
                                Venues
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/help-and-FAQs">
                                FAQs
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
