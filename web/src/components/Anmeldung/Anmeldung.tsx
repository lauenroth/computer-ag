import { useState } from 'react'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  Label,
  EmailField,
  SelectField,
  FieldError,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useMutation } from '@redwoodjs/web'
import styled from 'styled-components'

const CREATE_ANMELDUNG = gql`
  mutation CreateContactMutation($input: CreateAnmeldungInput!) {
    createAnmeldung(input: $input) {
      id
    }
  }
`

function validateEmail(email) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return res.test(String(email).toLowerCase())
}

const Anmeldung = () => {
  const formMethods = useForm()
  const [name, setName] = useState('')
  const [klasse, setKlasse] = useState('')
  const [email, setEmail] = useState('')

  const [create, { loading, error }] = useMutation(CREATE_ANMELDUNG, {
    onCompleted: () => {
      toast.success('Vielen Dank für die Anmeldung!')
      // close form
      document.body.classList.remove('modal')
      // reset form
      formMethods.reset()
    },
  })

  const canSubmit = name.length > 0 && klasse !== '' && validateEmail(email)

  return (
    <>
      <Toaster />
      <AnmeldungWrapper
        className="modal"
        formMethods={formMethods}
        onSubmit={(data) => {
          create({ variables: { input: data } })
        }}
      >
        <h2>Anmeldung zur Computer AG</h2>

        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />

        <Label name="name">Name des Kindes</Label>
        <TextField
          name="name"
          onKeyUp={(e) => setName(e.currentTarget.value)}
          disabled={loading}
          validation={{ required: true }}
          required
        />
        <FieldError name="name" />

        <Label name="klasse">Klasse</Label>
        <SelectField
          name="klasse"
          onChange={(e) => setKlasse(e.target.value)}
          disabled={loading}
          required
        >
          <option value="">Bitte auswählen</option>
          <optgroup label="3.Klasse">
            <option>A1</option>
            <option>A2</option>
            <option>A3</option>
            <option>B1</option>
            <option>B2</option>
            <option>B3</option>
            <option>C1</option>
            <option>C2</option>
            <option>C3</option>
            <option>D1</option>
            <option>D2</option>
            <option>D3</option>
          </optgroup>
          <optgroup label="4.Klasse">
            <option>4A</option>
            <option>4B</option>
            <option>4C</option>
            <option>4D</option>
          </optgroup>
        </SelectField>

        <Label name="email">E-Mail Adresse</Label>
        <EmailField
          name="email"
          onKeyUp={(e) => setEmail(e.currentTarget.value)}
          disabled={loading}
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Bitte eine gültige E-Mail Adresse eingeben',
            },
          }}
          required
        />
        <FieldError name="email" />

        <Label name="anmerkung">
          Anmerkung <span>(optional)</span>
        </Label>
        <TextAreaField name="anmerkung" disabled={loading} />

        <Submit className={loading ? 'sending' : ''} disabled={!canSubmit}>
          <span>Anmeldung abschicken</span>
        </Submit>
        <p>
          Das Absenden der Anmeldung ist keine Garantie für einen Platz in der
          Computer AG. Bei mehr als 10 Anmeldungen wird ausgelost. Für jede
          Anmeldung wird Anfang Januar eine Zu- bzw. Absage per E-Mail
          verschickt.
        </p>
      </AnmeldungWrapper>

      <p className="close-modal">
        <button
          onClick={() => {
            document.body.classList.remove('modal')
          }}
        >
          <img src="/images/close.svg" alt="Fenster schließen" />
        </button>
      </p>
    </>
  )
}

const AnmeldungWrapper = styled(Form)`
  z-index: 100;

  h2 {
    font-size: 28px;
    margin: 10px 0 30px;
    text-align: center;
  }

  label {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 10px;
    padding-bottom: 5px;
    padding-left: 10px;

    span {
      font-size: 10px;
    }
  }

  label input:disabled {
    color: #ccc;
  }

  input,
  select,
  textarea {
    border: 1px solid #457b9d;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 1em;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;

    &:disabled {
      background-color: #f5f5f5;
      color: #ccc;
    }
  }

  textarea {
    height: 5em;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    text-align: justify;
  }

  button {
    height: 48px;
    margin: 0 auto 20px;
    position: relative;
    transition: border-radius linear 0.2s, width linear 0.2s,
      background-color linear 0.2s;
    width: 100%;

    &:not(:disabled) {
      background-color: var(--color-background);
    }

    &.sending span {
      display: none;
    }

    &.sending:after {
      position: absolute;
      content: '';
      width: 25px;
      height: 25px;
      border: 3px solid #fff;
      border-radius: 50%;
      border-left-color: transparent;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      animation: spin ease-in 2.5s forwards;
      animation-name: spin;
      -webkit-animation-name: spin;
      transition-timing-function: ease-in-out;
      -webkit-transition-timing-function: ease-in-out;
      animation-duration: 2.5s;
      -webkit-animation-duration: 2.5s;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
    }
  }

  @media (max-width: 650px) {
    left: 0;
    right: 0;
    width: auto;

    h2 {
      font-size: 1.2em;
      margin-top: 0;
      text-align: left;
    }
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    90% {
      transform: translate(-50%, -50%) rotate(1080deg) scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`

export default Anmeldung
