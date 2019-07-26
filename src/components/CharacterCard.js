import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export default function CharacterCard({
  key,
  name,
  status,
  species,
  location,
  image,
  origin,
  episodeLength
}) {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {species}: {status}
        </Card.Meta>
        <Card.Description>
          Location: {location} <br /> Origin: {origin}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes: {episodeLength}
        </a>
      </Card.Content>
    </Card>
  );
  //<span>todo: location</span>;
}
