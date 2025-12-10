import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/MobileMenu.module.css';
import Footer from './Footer';
import Logo from '/public/images/logo.png';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset navigating state when route changes
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsNavigating(false);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  // Handle navigation with smooth transition
  const handleNavigation = async (href: string) => {
    // Don't navigate if already on the same page
    if (router.pathname === href) {
      onClose();
      return;
    }

    // Set navigating state to keep overlay visible
    setIsNavigating(true);

    // Start navigation
    await router.push(href);

    // Close menu after navigation completes
    onClose();
    setIsNavigating(false);
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
      <div className={styles.backButton} onClick={onClose}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>

      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} alt="Academy Dublin Logo" width={200} height={60} />
          </Link>
        </div>
        <div className={styles.socials}>
          <ul className={styles.socialsList}>
            <li>
              <a href="https://www.tiktok.com/@theacademydublin" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/academydublin" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/TheAcademyDublin/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/academydublin/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav className={styles.navContainer}>
        <ul className={styles.navMenu}>
          <li className={`${styles.navItem} ${router.pathname === '/' ? styles.navItemActive : ''}`}>
            <a onClick={() => handleNavigation('/')}>
              Live Shows
            </a>
          </li>
          <li className={`${styles.navItem} ${router.pathname === '/venues' ? styles.navItemActive : ''}`}>
            <a onClick={() => handleNavigation('/venues')}>
              Venues
            </a>
          </li>
          <li className={`${styles.navItem} ${router.pathname === '/help-and-FAQs' ? styles.navItemActive : ''}`}>
            <a onClick={() => handleNavigation('/help-and-FAQs')}>
              FAQs
            </a>
          </li>
          <li className={`${styles.navItem} ${router.pathname === '/contact-us' ? styles.navItemActive : ''}`}>
            <a onClick={() => handleNavigation('/contact-us')}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.navFooter}>
        <Footer />
      </div>
    </div>
  );
}
