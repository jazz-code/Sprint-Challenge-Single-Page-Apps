import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("home", "Home Page");
const characterLabel = createLabel("users", "Characters");
const locationLabel = createLabel("users", "Location");
const episodeLabel = createLabel("users", "Episodes");

const panes = [
  {
    menuItem: (
      <Menu.Item key="home" as={NavLink} to={`/`} content={welcomeLabel} />
    )
  },
  {
    menuItem: (
      <div>
        <Menu.Item
          key="characters"
          as={NavLink}
          to={`/characters`}
          content={characterLabel}
        />
      </div>
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="location"
        as={NavLink}
        to={`/location`}
        content={locationLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="episode"
        as={NavLink}
        to={`/episode`}
        content={episodeLabel}
      />
    )
  }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
