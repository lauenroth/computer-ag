import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const HtmlPage = () => {
  return (
    <>
      <MetaTags title="HTML | Computer AG" />

      <section>
        <h1>HTML</h1>

        <p>Hier findest du eine Übersicht über wichtige HTML Elemente.</p>

        <hr />

        <section>
          <h2>Überschriften</h2>
          <p>
            Überschriften werden als Titel für einen Textabschnitt genutzt
            werden.
          </p>
          <code>&lt;h2&gt;Das ist eine Überschrift der Größe 2&lt;/h2&gt;</code>
          <p>
            Die größte / wichtigste Überschrift bekommt &lt;h1&gt;, aber es gibt
            insgesamt bis zu 6 Ebenen:
          </p>
          <p>
            &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;,
            &lt;h6&gt;
          </p>
        </section>

        <hr />

        <section>
          <h2>Paragraphen</h2>
          <p>Texte werden in Absätzen gruppiert, den Paragraphen.</p>
          <code>
            &lt;p&gt;Dies ist ein Absatz, der normalerweise mit etwas Abstand
            nach unten dargestellt wird.&lt;/p&gt;
          </code>
          <p>
            Dies ist ein Absatz, der normalerweise mit etwas Abstand nach unten
            dargestellt wird.
          </p>
        </section>

        <hr />

        <section>
          <h2>Listen</h2>
          <p>Es gibt zwei Arten von Listen in HTML:</p>
          <ul>
            <li>ungeordnete Listen</li>
            <li>geordnete Listen</li>
          </ul>
          <code>
            &lt;ul&gt;
            <br />
            &nbsp; &lt;li&gt;Tastatur&lt;/li&gt;
            <br />
            &nbsp; &lt;li&gt;Maus&lt;/li&gt;
            <br />
            &lt;/ul&gt;
          </code>
          <p>
            Ein Beispiel für eine ungeordnete Liste siehst du oben. Eine
            geordnete Liste wird mit &lt;ol&gt; umschlossen und sieht wie folgt
            aus:
          </p>
          <ol>
            <li>Aufstehen</li>
            <li>Anziehen</li>
            <li>Frühstücken</li>
            <li>Zähne putzen</li>
          </ol>
        </section>

        <hr />

        <section>
          <h2>Links</h2>
          <p>Ein Link ist ein Verweis auf eine andere Webseite.</p>
          <code>
            &lt;a href=&quot;https://computer-ag.com&quot;&gt;Website der
            Computer AG&lt;/a&gt;
          </code>
        </section>
      </section>

      <aside>
        <section>
          <h3>HTML Kurs</h3>
          <ul>
            <li>
              <Link to={routes.html()}>Einführung</Link>
            </li>
          </ul>
        </section>
      </aside>
    </>
  );
};

export default HtmlPage;
