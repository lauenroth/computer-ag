import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Computer AG"
        description="Website der Computer AG von der Grundschule am Rüdesheimer Platz in Berlin"
      />
      <main>
        <h1>Herzlich Willkommen!</h1>
      </main>
    </>
  )
}

export default HomePage
