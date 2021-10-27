import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./Pages/About"
import Accounts from "./Pages/Accounts"
import Home from "./Pages/Home"
import Platforms from "./Pages/Platforms"
import Terms from "./Pages/Terms"
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/platforms" component={Platforms} />
        <Route path="/accounts" component={Accounts} />
        <Route path="/terms" component={Terms} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
