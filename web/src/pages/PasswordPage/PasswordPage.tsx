import { MetaTags } from '@redwoodjs/web';
import { Form, PasswordField, TextField } from '@redwoodjs/forms';
// import cryptoJs from 'crypto-js';

const PasswordPage = () => {
  const [hashedPassword, setHashedPassword] = React.useState('');

  const onSubmit = ({ password, salt }) => {
    //   const hash = cryptoJs
    //     .PBKDF2(password, salt, { keySize: 256 / 32 })
    //     .toString();
    //   setHashedPassword(hash);
  };

  return (
    <>
      <MetaTags
        title="Passwort"
        // description="Anmeldungen description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>Passwort</h1>
      <Form onSubmit={onSubmit}>
        <label htmlFor="password">Passwort</label>
        <PasswordField name="password" required />

        <label htmlFor="salt">Salt</label>
        <TextField name="salt" required />

        <button type="submit">Passwort verschlüsseln</button>
      </Form>

      {hashedPassword && <h3>Hash: {hashedPassword}</h3>}
    </>
  );
};

export default PasswordPage;
