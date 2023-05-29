import StyledComponentsRegistry from '@/lib/styleRegistry';
import ReduxProvider from '@/context/reduxProvider';
import GlobalStyles from './globalStyle';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'SKYE-CONNECT',
  description: 'Social network that connect people',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
