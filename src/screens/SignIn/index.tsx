import React from 'react';
import { Input } from "@components/Input"
import { Button } from '@components/Button';
import { KeyboardAvoidingView, Platform }  from 'react-native'

import { 
  Container , 
  Content, 
  Title, 
  Brand, 
  ForgotPassword, 
  ForgotPasswordLabel 
} from './styles';

import brandingImg from '@assets/brand.png'

export function SignIn() {
  return (
  <Container>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
      <Content>
        <Brand source={brandingImg} />

        <Title>Login</Title>

        <Input 
          placeholder='E-mail'
          type='secondary'
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Input 
          placeholder='Senha'
          type='secondary'
          secureTextEntry
        />
        
        <ForgotPassword>
          <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
        </ForgotPassword>
        
        <Button
          title="Entrar"
          type="secondary"
        />
        
      </Content>
    </KeyboardAvoidingView>
  </Container>
  )
}
