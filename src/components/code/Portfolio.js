import React, { Component } from "react";
import { Image, Card, Icon, Container, Header } from 'semantic-ui-react'
import localHost from './../../images/home.png';
import friendConnector from './../../images/friend.png';
import linker from './../../images/linker.png';
import bounce from './../../images/blocked.png';
import today from './../../images/today.png';

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <Header as='h2' dividing>
          Portfolio
        </Header>
        <Card.Group>
          <Card>
            <Image src={localHost} />
            <Card.Content>
              <Card.Header>
                <a href="https://mysterious-badlands-77198.herokuapp.com/" rel="noreferrer noopener" target="_blank">LocalHost</a>
              </Card.Header>
              <Card.Description>LocalHost connects area hosts, who specialize in categories like 'Art', 'Music', or 'Food & Drink', to visitors looking for someone to show them around.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/vernistage/localhost" rel="noreferrer noopener" target="_blank">
                <Icon name="github" />
                View on Github
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src={friendConnector} />
            <Card.Content>
              <Card.Header>
                <a href="https://friend-connector.herokuapp.com" rel="noreferrer noopener" target="_blank">Friend Connector</a>
              </Card.Header>
              <Card.Description>
                App allows users to enter their name and a website to register. Upon registration, the website is scraped for headings. Users can form friendships and search for new friends by a topic of interest.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/vernistage/friend-connector" rel="noreferrer noopener" target="_blank">
                <Icon name="github" />
                View on Github
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src={linker} />
            <Card.Content>
              <Card.Header>
                <a href="https://link-modify.herokuapp.com/" rel="noreferrer noopener" target="_blank">Linker</a>
              </Card.Header>
              <Card.Description>
                Users can modify links and text them to themselves. For instructions, see Github below.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/vernistage/link-modify" rel="noreferrer noopener" target="_blank">
                <Icon name="github" />
                View on Github
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src={today} />
            <Card.Content>
              <Card.Header>Austin Events</Card.Header>
              <Card.Description>
                Displays today's and tomorrow's events in Austin, Texas, using the Do512 API.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/vernistage/do512" rel="noreferrer noopener" target="_blank">
                <Icon name="github" />
                View on Github
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src={bounce} />
            <Card.Content>
              <Card.Header>Bounce</Card.Header>
              <Card.Description>
                App monitors user Twitter mentions and automatically mutes accounts based on words or phrases blacklisted by user.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/vernistage/bounce" rel="noreferrer noopener" target="_blank">
                <Icon name="github" />
                View on Github
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='' />
            <Card.Content>
              <Card.Header>Battleship</Card.Header>
              <Card.Description>
                Javascript simulation of the popular game "Battleship".
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/vernistage/battleship" rel="noreferrer noopener" target="_blank">
                <Icon name="github" />
                View on Github
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}

export default Portfolio
