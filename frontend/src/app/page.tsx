import { redirect } from 'next/navigation';
import WelcomePage from '@/components/pages/welcome/WelcomePage';
import { isAuthenticated } from './authentication/isAuthenticated';

export default async function Page() {
  const authUser = await isAuthenticated();
  if (authUser) {
    redirect('/feeds');
  }
  return <WelcomePage />;
}
