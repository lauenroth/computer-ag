import React, { useState } from 'react';
import { routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { Scrollama, Step } from 'react-scrollama';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import styled from 'styled-components';

const breadcumbItems = [
  {
    name: 'Übersicht',
    url: routes.uebersicht(),
  },
  {
    name: 'Was ist ein Computer?',
  },
];

const WasIstEinComputerPage = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <>
      <MetaTags title="Was ist ein Computer? | Computer AG" />
      <MainLayout isMaxWidth>
        <Breadcrumb items={breadcumbItems} />
        <h1>Was ist ein Computer?</h1>

        <InfoBox>
          <p>
            Ob Smartphone, Tablet, Taschenrechner, die Spielkonsole, die Kasse
            im Supermarkt oder der Boardcomputer im Auto - Computer umgeben uns
            überall.
          </p>{' '}
          {currentStepIndex}
        </InfoBox>
        <Scrollama onStepEnter={onStepEnter}>
          {[1, 2, 3, 4].map((_, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <div
                style={{
                  margin: '50vh 0',
                  border: '1px solid gray',
                  opacity: currentStepIndex === stepIndex ? 1 : 0.2,
                }}
              >
                I'm a Scrollama Step of index {stepIndex}
              </div>
            </Step>
          ))}
        </Scrollama>
        <p>
          <strong>&quot;Computer&quot;</strong> ist Englisch und heißt soviel
          wie <strong>&quot;Rechner&quot;</strong>. Dabei kann er weit mehr als
          schnell rechnen.
        </p>
      </MainLayout>
    </>
  );
};

const InfoBox = styled.section`
  max-width: 500px;
  position: sticky;
  top: 200px;
  width: 100%;
`;

export default WasIstEinComputerPage;
