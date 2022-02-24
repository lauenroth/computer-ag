const WebseitePage = () => {
  return (
    <>
      <nav>
        <h1>
          <a href="webseite.html">Meine erste Webseite</a>
        </h1>
        <ul>
          <li>
            <a href="hobbies.html">Hobbies</a>
          </li>
          <li>
            <a href="stundenplan.html">Stundenplan</a>
          </li>
        </ul>
      </nav>

      <main>
        <h1>Herzlich Willkommen!</h1>

        <p>Mein Name ist Jörg. Dies ist meine allererste Webseite!</p>

        <p>
          Seit Januar 2022 nehme ich an der Computer AG an der Grundschule am
          Rüdesheimer Platz teil.
        </p>

        <h2>Meine Hobbies</h2>

        <ul>
          <li>Gitarre spielen</li>
          <li>Radfahren</li>
          <li>Skifahren</li>
        </ul>

        <hr />

        <h2>Meine Lieblingsfächer</h2>

        <ul>
          <li>Mathematik</li>
          <li>Englisch</li>
          <li>Sport</li>
        </ul>

        <hr />
      </main>
    </>
  );
};

export default WebseitePage;
