import styled from 'styled-components'

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader>
        <img
          src="/images/makey.png"
          alt="MakeyMakey"
          className="makey"
          height="80"
        />
        <h1>
          <a href="/">Computer AG</a>
          <div>
            <span>Grundschule</span> am Rüdesheimer Platz
          </div>
        </h1>
        <img src="/images/vr.png" alt="VR Brille" className="vr" />
      </MainHeader>
      {children}
    </>
  )
}

const MainHeader = styled.header`
  align-items: center;
  background-color: #fff;
  color: var(--color-background);
  display: flex;
  height: 100px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  h1 {
    letter-spacing: 1px;
    margin: 0;
    position: relative;
  }

  a {
    color: var(--color-background);
  }

  a:hover {
    text-decoration: none;
  }

  h1 div {
    display: block;
    font-size: 12px;
    letter-spacing: 0;
    margin-top: -7px;
  }

  h1 span {
    margin-right: 8px;
  }

  .vr {
    height: 90px;
    position: absolute;
    right: 30px;
    top: 25px;
    transition: top 0.25s;
  }

  .vr:hover {
    top: 10px;
  }

  .makey {
    bottom: -40px;
    right: -50px;
    opacity: 0.9;
    position: fixed;
    transform: rotate(40deg);
    transition: 0.25s;
    z-index: 1;
  }

  .makey:hover {
    bottom: 10px;
    right: 10px;
    opacity: 1;
    transform: rotate(0deg);
  }

  @media (max-width: 800px) {
    height: 80px;

    h1 {
      font-size: 32px;
    }

    h1 div {
      font-size: 10px;
    }

    .vr {
      height: 60px;
      right: 5px;
      top: 20px;
    }
  }
`

export default MainLayout
