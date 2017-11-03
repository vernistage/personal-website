import React, { Component } from "react";
import { Header, Container, Image, Button, Icon, Segment } from 'semantic-ui-react'
import headshot from './../../images/sand.jpg'

class Bio extends Component {
  render() {
    return (
      <Container>
        <Segment compact>
          <Header as='h2' id="bio" dividing>
            Sarah Colby
          </Header>
          <Image src={headshot} size='small' floated='left' />
          <p>
            Learning and problem-solving are my lifelong passions. As a child, I sat on my roof and attempted to memorize cloud formations so I could predict the weather, checked-out books from the library on volcanology after watching disaster movies like "Dante's Peak", and I began designing and coding <a href="https://web.archive.org/web/19990508060113/http://www.expage.com/page/yourimagination" target="_blank">some pretty entertaining websites</a> at the age of 10.
          </p>
          <p>
            My mind is always working to create the most efficient solution to a problem, whether it be mapping in my brain and reevaluating the quickest route to work or the least-expensive way to make dream trips a reality. My mind is constantly working. I gravitate towards web development because when I code, it is one of the only times my problem-solving brain is satiated; I lose track of time and am fully immersed in the task-at-hand.
          </p>
          <p>
            In my free time, I am an aerial artist and performer. It takes a lot of focus, problem-solving, and self-trust to be twenty feet in the air wrapping nylon fabric around myself in a way that supports me when I execute a drop that will take me all the way back down in under a second. Aerials have taught me a lot about the creative process, my ability to grow stronger, and pushing myself out of my comfort zone to achieve my goals. When I am on the ground, I like to bake and play with my rescue kittens, Chili and Peppercorn.
          </p>
          <p>
            <Button basic content='Contact' icon='mail' labelPosition='left' floated='right' href="mailto:sdickers10@gmail.com?Subject=Website%20inquiry" />
          </p>
        </Segment>
      </Container>
    );
  }
}

export default Bio
