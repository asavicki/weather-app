import Footer from "./components/Footer";
import Header from "./components/Header";

import { WeatherProvider } from './context/WeatherContext';
import "./styles/globals.scss";

export default function RootLayout({ children }) {

  return (
    <html>
      <head>
        <title>Weather App</title>
      </head>
      <body>
        <Header />
        <WeatherProvider>
          {children}
        </WeatherProvider>
        <Footer/>
      </body>
    </html>
  );
}
