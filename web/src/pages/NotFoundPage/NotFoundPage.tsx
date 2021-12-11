import MainLayout from 'src/layouts/MainLayout/MainLayout'
import styled from 'styled-components'

export default () => (
  <MainLayout>
    <Wrapper>
      <h1>Ups, diese Seite gibt es leider nicht 😢</h1>
    </Wrapper>
  </MainLayout>
)

const Wrapper = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 135px);
`
