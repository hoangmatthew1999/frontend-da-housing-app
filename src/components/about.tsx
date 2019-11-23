import React from 'react';
import loftryTheme from './Theme';
import { Grommet, Box, Text, Heading,Paragraph, DropButton} from 'grommet';

const About: React.FC = () => {
    return (
        <Grommet theme={loftryTheme}>
            <Box>
                <Heading margin="none">About Loftry</Heading>  
                <Paragraph margin="none">
                Loftly helps connects students to local affordable housing with the power of A.I
                </Paragraph>

                <Heading margin="none">Frequently Asked Questions</Heading> 
                <DropButton
                label="How do I create an account?"
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                    <Box pad="large" background="light-2">
                        <Paragraph>If you don't have an Loftry account yet, go to Loftry.com and click Sign Up.

                You can sign up using your email address, Facebook account, Google account, or Amex. Signing up and creating an Airbnb account is free.

                After you sign up, be sure to complete your account before booking a reservation.</Paragraph>
                    </Box>
                }
                />
                <DropButton
                label="What are the benefits of this"
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                    <Box pad="large" background="light-2">
                        <Paragraph>Not shady</Paragraph>
                    </Box> 
                }
                />
            </Box>
        </Grommet>
    )
}

export default About; 