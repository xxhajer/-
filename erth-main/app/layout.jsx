import './globals.css';
import { LanguageProvider } from './LanguageContext';

export const metadata = {
  title: 'ERTH | إرث',
  description: 'National Retirement Experience Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
