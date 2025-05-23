import { Noto_Sans } from 'next/font/google';
import './globals.css';
import NavBar from '../components/NavBar';
import { ThemeProvider } from '../components/theme-provider';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true"
        className={`${notoSans.className} antialiased min-h-screen px-4 lg:px-6 gradient-bg`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className=" max-w-7xl mx-auto pt-8 mb-14">
            <NavBar />
          </header>
          <main className=" max-w-7xl mx-auto mb-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
