import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/index.scss';
import { Navbar } from '@/widgets/Navbar';
import { StoreProvider } from './providers/StoreProvider';

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
                    <Navbar></Navbar>
                    <main className="main">{children}</main>
                </StoreProvider>
            </body>
        </html>
    );
}
