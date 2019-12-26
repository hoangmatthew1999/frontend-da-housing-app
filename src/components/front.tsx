import React from 'react';
import loftryTheme from './Theme';
import { Box, Header,Layer, Heading, TextInput, Button, Text, Grommet, Anchor, Tabs, Tab, } from 'grommet';
import {Login} from 'grommet-icons';
import Register from './Register';

const Front: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmission = async () => {
        console.log(JSON.stringify({ email, password }));
    }
    const [show, setShow] = React.useState();

    return (
        <Grommet full theme={loftryTheme}>
            <Box fill="vertical" overflow = "hidden"align="start" flex="grow" background="url(https://images.unsplash.com/43/L6sQn4GyQdSBW7pLgEz7_DSC_0013.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1945&q=80)" direction="column">
        <Header align="center" direction="row-responsive" justify="start" gap="large" fill="horizontal">
          <Heading textAlign="start" margin={{"left":"medium","right":"large"}}>
            Loftry
          </Heading>
          <Box direction="row" gap="medium">
            <Anchor href = "/about" label="About" size="large" />
            <Anchor href = "/faq" label="FAQ" size="large" />
            <Anchor href = "/help" label="Help" size="large" />
            <Anchor href = "/example-profile" label="Profile" size="large" />
          </Box>
        </Header>
        <Box align="center" justify="center" direction="row" gap="medium">
          <Box align="stretch" justify="start" fill={false} background={{"color":"background"}} pad="large" wrap={false} round="medium" gap="large" direction="column" margin="xlarge">
            <Heading textAlign="start" margin="small" size="medium" level="1">
              Welcome Back
            </Heading>
            <TextInput placeholder="Email" value={email} type="email" onChange={event => setEmail(event.target.value)}/>
            <TextInput placeholder="Password" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
            <Button label="Login" color="brand" fill="horizontal" icon={<Login />} primary={true} onClick={handleSubmission} />
            <Text textAlign="start">
              Don't have an account? <Anchor onClick={() => setShow(true)}> Sign Up</Anchor>
            </Text>
            {show && (
                            <Layer
                                onEsc={() => setShow(false)}
                                onClickOutside={() => setShow(false)}
                            >
                                <Register />
                            </Layer>
                        )}
          </Box>
          <Box align="start" justify="center" direction="column" margin={{"left":"large"}}>
            <Heading textAlign="start" color="white">
              Introducing Loftly Housing. <br />Welcome to AI Powered Co-living.
            </Heading>
            <Box align="start" justify="center" direction="row" gap="large">
              <Button label="Living with Loftly" primary={true} />
              <Button label="Renting with Loftly" primary={true} />
            </Box>
          </Box>
        </Box>
      </Box>
            <Box tag="footer" pad="small" background="dark-1">
            footer
          </Box>
        </Grommet>
    )
}

export default Front;