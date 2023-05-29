import React from 'react';
import { HomeContainer, HomeNavigation } from './style';
import SignInForm from '@/components/molecules/form/signInForm';
import SignUpForm from '@/components/molecules/form/signUpForm';

function Home() {
  return (
    <HomeContainer>
      <HomeNavigation>
        <SignInForm />
      </HomeNavigation>
      <SignUpForm />
    </HomeContainer>
  );
}

export default Home;
