import React from 'react';
import { HomeContainer, HomeNavigation } from './style';
import AlerMessages from './AlertMessages';
import SignInForm from '@/components/molecules/form/signInForm';
import SignUpForm from '@/components/molecules/form/signUpForm';

function Home() {
  return (
    <HomeContainer>
      <AlerMessages />
      <HomeNavigation>
        <SignInForm />
      </HomeNavigation>
      <SignUpForm />
    </HomeContainer>
  );
}

export default Home;
