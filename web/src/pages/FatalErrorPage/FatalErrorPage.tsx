// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful. =)

import MainLayout from 'src/layouts/MainLayout/MainLayout'
import styled from 'styled-components'

export default () => (
  <MainLayout>
    <Wrapper>
      <h1>Ups, da ist irgendetwas schief gelaufen... 😢</h1>
    </Wrapper>
  </MainLayout>
)

const Wrapper = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 135px);
`
