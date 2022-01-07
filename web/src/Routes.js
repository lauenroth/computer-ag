// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/anmeldungen" page={AnmeldungenPage} name="anmeldungen" />
      <Route path="/feedback" page={FeedbackPage} name="feedback" />
      <Route path="/was-ist-ein-computer" page={WasIstEinComputerPage} name="wasIstEinComputer" />
      <Route path="/uebersicht" page={UebersichtPage} name="uebersicht" />
      <Route path="/flyer" page={FlyerPage} name="flyer" />
      <Route path="/datenschutz" page={DatenschutzPage} name="datenschutz" />
      <Route path="/impressum" page={ImpressumPage} name="impressum" />
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
