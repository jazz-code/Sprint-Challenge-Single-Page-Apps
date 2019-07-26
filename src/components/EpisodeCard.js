import React from "react";
import { Icon, List } from "semantic-ui-react";

export default function LocationCard({ name, airDate, episode, characters }) {
  // image={image}
  return (
    <List>
      <List.Item as="a">
        <Icon name="right triangle" />
        <List.Content>
          <List.Header>{name}</List.Header>
          <List.Description>
            {airDate} : {episode}
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item as="a">
        <Icon name="right triangle" />
        <List.Content>
          <List.Header>Characters</List.Header>
          <List.Description>Test test test</List.Description>
        </List.Content>
      </List.Item>
      {/* <List.Item>
        <Icon name="help" />
        Inline Text
      </List.Item> */}
    </List>
  );
}
