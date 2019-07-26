import React from "react";
import { Icon, List } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  // image={image}
  return (
    <List>
      <List.Item as="a">
        <Icon name="right triangle" />
        <List.Content>
          <List.Header>{name}</List.Header>
          <List.Description>
            {type} : {dimension}
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item as="a">
        <Icon name="right triangle" />
        <List.Content>
          <List.Header>Residents</List.Header>
          <List.Description>{residents}</List.Description>
        </List.Content>
      </List.Item>
      {/* <List.Item>
        <Icon name="help" />
        Inline Text
      </List.Item> */}
    </List>
  );
}
