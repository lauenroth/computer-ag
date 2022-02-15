import { MetaTags } from '@redwoodjs/web';

const HtmlPage = () => {
  return (
    <>
      <MetaTags title="HTML | Computer AG" />

      <h1>HTML</h1>
      <p>Hier findest du eine Übersicht über wichtige HTML Elemente.</p>

      <section>
        <h2>Überschriften</h2>
        <p>
          &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;
        </p>
        {/* <h4>Beispiel</h4> */}
      </section>
    </>
  );
};

export default HtmlPage;
