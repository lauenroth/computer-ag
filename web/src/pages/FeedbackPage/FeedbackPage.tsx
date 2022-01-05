import { Form, RadioField, Label } from '@redwoodjs/forms';
import { MetaTags } from '@redwoodjs/web';
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import styled from 'styled-components';

const FeedbackPage = () => {
  const ratings = ['🙁', '😐', '🙂', '😃'];
  const [hasSelected, setHasSelected] = React.useState(false);

  return (
    <>
      <MetaTags title="Feedback | Computer AG" />
      <MainLayout isMaxWidth>
        <Wrapper>
          <h1>Zeit für Feedback!</h1>
          <p>Wie hat dir die heutige Stunde gefallen?</p>

          <Form onSubmit={(data) => console.log(data)}>
            <fieldset>
              {ratings.map((rating, index) => (
                <Label name={`rating-${index + 1}`} key={`rating-${index}`}>
                  <RadioField
                    id={`rating-${index + 1}`}
                    name="rating"
                    value={index + 1}
                    onChange={() => setHasSelected(true)}
                  />
                  <span>{rating}</span>
                </Label>
              ))}
            </fieldset>
            {hasSelected && <button type="submit">Bewerten</button>}
          </Form>
        </Wrapper>
      </MainLayout>
    </>
  );
};

const Wrapper = styled.section`
  text-align: center;

  fieldset {
    border: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    min-height: 350px;
    gap: 40px;
  }

  label {
    cursor: pointer;

    input {
      display: none;
    }

    span {
      font-size: 120px;
      opacity: 0.7;
      transition: 0.25s;
    }

    &:hover span {
      opacity: 1;
    }

    input:checked + span {
      font-size: 140px;
      opacity: 1;
    }
  }

  button {
    font-size: 24px;
    margin-bottom: 40px;
  }

  @media (min-width: 500px) {
    fieldset {
      align-items: center;
      display: flex;
      height: 350px;
      justify-content: space-evenly;
    }
  }

  @media (max-width: 700px) {
    fieldset {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    fieldset {
      grid-template-columns: 1fr;
    }
  }
`;

export default FeedbackPage;
