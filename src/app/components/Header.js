import Image from 'next/image'
import styles from '../styles/components/header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <p>Welcome to </p>
            <Image
                src="/images/logo.png"
                width={300}
                height={100}
                alt="Picture of the author"
                clas
            />
        </header>
    );
    }