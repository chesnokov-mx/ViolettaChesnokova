import Link from "next/link";
import React, {useState} from "react";
import styles from './css/MainLayout.module.css';

export default function Layout({ children }) {

    return (
        <>
            <nav className={styles.nav_menu}>
                <Link href="/"><a className={styles.mainLink}>VIOLETTA CHESNOKOVA</a></Link>
                <button className={styles.mainLayout_btn}>MENU</button>
            </nav>
            <div className={styles.mainLayout_menuDIV}>
                <nav className={styles.MainLayout_menuNav}>
                    <Link href="/"><a className={styles.LinkMenu}>ПОРТФОЛИО</a></Link>
                    <Link href="/"><a className={styles.LinkMenu}>УСЛУГИ</a></Link>
                    <Link href="/"><a className={styles.LinkMenu}>КТО Я?</a></Link>
                    <Link href="/"><a className={styles.LinkMenu}>КОНТАКТЫ</a></Link>
                </nav>
            </div>

            <main>
                {children}
            </main>
        </>
    )
}