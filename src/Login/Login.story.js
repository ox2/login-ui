import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';

const handler = () => console.log('🍇'); // eslint-disable-line no-console

storiesOf('Login', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      { getStory() }
    </MuiThemeProvider>
  ))
  .add('landing', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('valid email', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={true}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('not authorized', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={true}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={'Email not authorized'}
      loginValidationError={''}
    />
  ))
  .add('landing with guest', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={true}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('valid email with guest', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={true}
      guestLoginEnabled={true}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('not authorized with guest', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={true}
      guestLoginEnabled={true}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={'Email not authorized'}
      loginValidationError={''}
    />
  ))
  .add('sending code', () => (
    <Login
      loggingIn={false}
      sendingCode={true}
      emailAccepted={false}
      codeSent={false}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('enter code', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('resending code', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      resendingCode={true}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('resending code done', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      resendingCode={true}
      resendingCodeDone={true}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={'info@some.io'}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('valid code format', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={true}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={'33221'}
      emailValue={'info@some.io'}
      emailValidationError={''}
      loginValidationError={''}
    />
  ))
  .add('incorrect code', () => (
    <Login
      loggingIn={false}
      sendingCode={false}
      emailAccepted={true}
      codeSent={true}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={true}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={'33221'}
      emailValue={'info@some.io'}
      emailValidationError={''}
      loginValidationError={'Incorrect code'}
    />
  ))
  .add('logging in', () => (
    <Login
      loggingIn={true}
      sendingCode={false}
      emailAccepted={false}
      codeSent={false}
      resendingCode={false}
      resendingCodeDone={false}
      validCodeFormat={false}
      validEmailFormat={false}
      guestLoginEnabled={false}
      logo={'http://i.imgur.com/aNF7yFO.gif'}
      onEmailSubmit={handler}
      onCodeUpdate={handler}
      onEmailUpdate={handler}
      onLogin={handler}
      onReset={handler}
      onResendCode={handler}
      codeValue={''}
      emailValue={''}
      emailValidationError={''}
      loginValidationError={''}
    />
  ));
