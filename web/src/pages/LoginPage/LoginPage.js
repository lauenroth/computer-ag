import { navigate, routes } from '@redwoodjs/router';
import { useRef } from 'react';
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms';
import { useAuth } from '@redwoodjs/auth';
import { MetaTags } from '@redwoodjs/web';
import { toast, Toaster } from '@redwoodjs/web/toast';
import { useEffect } from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home());
    }
  }, [isAuthenticated]);

  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const response = await logIn({ ...data });
    setIsLoading(false);

    if (response.message) {
      toast(response.message);
    } else if (response.error) {
      toast.error(response.error);
    } else {
      toast.success('Welcome back!');
    }
  };

  return (
    <>
      <MetaTags title="Login" />

      <section>
        <Toaster
          position="bottom-center"
          toastOptions={{ className: 'rw-toast', duration: 6000 }}
        />

        <LoginWrapper onSubmit={onSubmit}>
          <h2>Anmeldung</h2>
          <Label
            name="username"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Name
          </Label>
          <TextField
            name="username"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'Benutzername ist erforderlich',
              },
            }}
            disabled={isLoading}
            required
          />

          <FieldError name="username" className="rw-field-error" />

          <Label
            name="password"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Passwort
          </Label>
          <PasswordField
            name="password"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Passwort ist erforderlich',
              },
            }}
            disabled={isLoading}
            required
          />

          {/* <Link to={routes.forgotPassword()} className="rw-forgot-link">
              Password vergessen?
            </Link> */}

          <FieldError name="password" className="rw-field-error" />

          <Submit disabled={isLoading}>Anmelden</Submit>
        </LoginWrapper>
      </section>
    </>
  );
};

const LoginWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  max-width: 450px;

  h2 {
    text-align: center;
  }
`;

export default LoginPage;
