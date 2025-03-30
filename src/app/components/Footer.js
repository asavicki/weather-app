import Image from "next/image";
import styles from "../styles/components/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoText}>
        <Image
          src="/images/logo.png"
          width={150}
          height={50}
          alt="Small logo of the app"
        />
        <p>Created by Andžej Savicki, 2023</p>
      </div>
      <details>
        <summary>Resources</summary>
        <ul>
          <li>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              GeoNames
            </a>
            <span> - free API for location data</span>
          </li>
          <li>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              WeatherAPI
            </a>
            <span> - free API for weather data</span>
          </li>
        </ul>
      </details>
    </footer>
  );
}