import { type AppType } from "next/app";
import "../public/styles.css";

// This default export is required in a new `pages/_app.js` file.
const MyApp: AppType<any> = ({ Component, pageProps })  => {
  return <Component {...pageProps} />;
}

export default MyApp;
