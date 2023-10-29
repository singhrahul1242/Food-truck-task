import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Button } from '../index';
import Aboutus from '../../images/about.png';

const About = () => {
  return (
    <Flex
      justifyContent={{ base: 'center', md: 'space-evenly' }}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      mt={20}
      mb={20}
      bg="#F7F8FB"
    >
      <Image
        src={Aboutus}
        alt="about us"
        height="460px"
        width="384px"
        display={{ base: 'none', md: 'block' }}
      />
      <Box pt={20} maxW="32rem" lineHeight={8} textAlign={{ base: 'center', md: 'left' }}>
        <Heading
          fontSize={{ base: '26px', md: '45px' }}
          size='4xl'
          color="#0E2368"
          fontWeight={600}
          noOfLines={3}
        >
          About Us
        </Heading>
        <Text
          fontSize={{ base: '11px', md: '15px' }}
          fontWeight={400}
          pt={5}
          pb={5}
          lineHeight="27px"
          width={{ base: '275px', md: '450px' }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </Text>
        <Button name="Read More" />
      </Box>
    </Flex>
  );
};

export default About;
