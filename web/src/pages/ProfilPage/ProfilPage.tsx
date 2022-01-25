import { useAuth } from '@redwoodjs/auth';
import { Form, Label, Submit, TextField } from '@redwoodjs/forms';
import { MetaTags } from '@redwoodjs/web';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

const breadcumbItems = [
  {
    name: 'Mein Profil',
  },
];

const UPDATE_PROFILE = gql`
  mutation CreateContactMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

const ProfilPage = () => {
  const { currentUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <MetaTags title="Mein Profil | Computer AG" />
      <Breadcrumb items={breadcumbItems} />
      <section>
        <h1>Mein Profil</h1>
        <p>
          Hier kannst du dein Profil anpassen. Momentan kannst du nur dein
          Avatar (also dein Profilbild) ändern.
        </p>

        <Form onSubmit={onSubmit}>
          <Label name="Avatar" />
          <TextField name="avatar" defaultValue={currentUser.avatar} />

          <Submit>Speichern</Submit>
        </Form>
      </section>
    </>
  );
};

export default ProfilPage;
