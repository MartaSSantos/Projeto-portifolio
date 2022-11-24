import styles from '../styles/components/footer.module.css'
export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}>
                Feito por <span>Marta S. Santos</span>
            </p>
        </footer>
    )
}