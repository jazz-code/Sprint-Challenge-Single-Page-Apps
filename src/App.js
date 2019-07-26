import React from "react";
import { Route, Link } from "react-router-dom";
import { Tab } from "semantic-ui-react";

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  // const panes = [
  //   { menuItem: "Tab 1", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  //   { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  //   { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
  // ];

  // const TabExampleBasic = () => <Tab panes={panes} />;

  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      {/* <Route exact path="/" component={WelcomePage} /> */}
      <Route path="/characters" component={CharacterList} />
      <Route path="/location" component={LocationList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
