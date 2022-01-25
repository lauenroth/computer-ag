// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router';
import MainLayout from './layouts/MainLayout/MainLayout';

const Routes = () => {
  return (
    <Router>
      <Route path="/quiz" page={QuizPage} name="quiz" />
      <Route path="/blog/{slug}" page={BlogPostPage} name="blogPost" />
      <Route path="/blog" page={BlogPage} name="blog" />
      <Route path="/anmeldungen" page={AnmeldungenPage} name="anmeldungen" />
      <Route path="/feedback" page={FeedbackPage} name="feedback" />
      <Route path="/was-ist-ein-computer" page={WasIstEinComputerPage} name="wasIstEinComputer" />
      <Route path="/uebersicht" page={UebersichtPage} name="uebersicht" />
      <Route path="/flyer" page={FlyerPage} name="flyer" />
      <Set private wrap={MainLayout} isMaxWidth unauthenticated="login">
        <Route path="/meine-ag" page={MeineAGPage} name="meineAg" />
        <Route path="/schreiben" page={SchreibenPage} name="schreiben" />
      </Set>
      <Set private wrap={MainLayout} isMaxWidth unauthenticated="login" maxWidth="default">
        <Route path="/profil" page={ProfilPage} name="profil" />
      </Set>
      <Set wrap={MainLayout} isMaxWidth>
        <Route path="/anmelden" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        {/* <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" /> */}
        {/* <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" /> */}
        <Route path="/datenschutz" page={DatenschutzPage} name="datenschutz" />
        <Route path="/impressum" page={ImpressumPage} name="impressum" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
