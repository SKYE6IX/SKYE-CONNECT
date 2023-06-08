import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/styleRegistry';
import Providers from '@/globalRedux/provider';
import GlobalStyles from './globalStyle';
import { isAuthenticated } from './authentication/isAuthenticated';
import HomeLayout from './home-layout/HomeLayout';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authUser = await isAuthenticated();
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {authUser ? <HomeLayout>{children}</HomeLayout> : children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
