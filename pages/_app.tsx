import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from 'components/common/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <div className="bg-black">
        <Navbar />
        <Component {...pageProps} />
    </div>
);

export default MyApp;
