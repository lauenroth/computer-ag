import { useAuth } from '@redwoodjs/auth';
import {
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms';
import { MetaTags } from '@redwoodjs/web';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

const breadcumbItems = [
  {
    name: 'Dein Profil',
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
      <MetaTags title="Dein Profil | Computer AG" />
      <Breadcrumb items={breadcumbItems} />
      <section>
        <h1>Dein Profil</h1>
        <p>
          Hier kannst du dein Profil anpassen. Momentan kannst du nur dein
          Avatar (also dein Profilbild) ändern.
        </p>

        <Form onSubmit={onSubmit}>
          <Label name="Avatar" />
          <TextField name="avatar" defaultValue={currentUser.avatar} />

          <Label name="Hobbies" />
          <TextAreaField name="hobbies" />

          <Submit>Speichern</Submit>
        </Form>
      </section>
    </>
  );
};

export default ProfilPage;
