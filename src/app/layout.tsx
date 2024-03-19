import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/index.scss';
import { Navbar } from '@/widgets/Navbar';
import { StoreProvider } from './providers/StoreProvider';
import { Finder } from '@/widgets/Finder';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { Footer } from '@/widgets/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'miss-you.ru',
    description: 'Meeting site',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <Navbar />
                    <Finder />
                    <Breadcrumb />
                    <main className="main">{children}</main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
