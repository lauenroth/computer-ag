import { Form, TextAreaField } from '@redwoodjs/forms';
import { routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const breadcumbItems = [
  {
    name: 'Meine AG',
    url: routes.meineAg(),
  },
  {
    name: 'Schreibtest',
  },
];

const SchreibenPage = () => {
  const text =
    'Heute habe ich gelernt, wofür die Buchstaben EVA stehen. Nämlich für Eingabe, Verarbeitung und Ausgabe.';
  const [typedText, setTypedText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const checkKey = (event) => {
    if (
      (event.which <= 90 && event.which >= 48) ||
      event.which === 32 ||
      event.which === 188 ||
      event.which === 190
    ) {
      if (text[currentIndex] === event.key) {
        setCurrentIndex(currentIndex + 1);
        setTypedText(typedText + event.key);

        if (currentIndex === text.length - 1) {
          toast.success('Geschafft!', {
            autoClose: false,
            hideProgressBar: true,
          });
        }
      }
    }
  };

  return (
    <>
      <MetaTags title="Schreibtest | Computer AG" />

      <Breadcrumb items={breadcumbItems} />

      <h1>Schreibtest</h1>

      <p>Tippe folgenden Satz in dem Textfeld ab:</p>

      <h2>{text}</h2>

      <Form>
        <TextAreaField
          name="text"
          onPaste={(e) => {
            e.preventDefault();
            toast.error('Kein Copy/Paste erlaubt!');
          }}
          value={typedText}
          onKeyUp={checkKey}
        />

        <p>
          {typedText.length} von {text.length} Zeichen.
        </p>
      </Form>
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default SchreibenPage;
