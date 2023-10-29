import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../images/logo.png';
import '@fortawesome/free-solid-svg-icons';
import InstagramSvg from '../svg/InstagramSvg';
import TwitterSvg from '../svg/TwitterSvg';
import FacebookSvg from '../svg/FacebookSvg';

const Footer = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-evenly' }}
      bg='#F7F8FB'
      p={{ base: 10, md: 10 }}
    >
      <Image
        src={Logo}
        alt='Logo'
        height={{ base: '58px', md: '125px' }}
        width={{ base: '75px', md: '161px' }}
        mt={{ base: 2, md: 20 }}
      />
      <Box maxW='32rem' lineHeight={8}>
        <Heading fontSize={{ base: '15px', 
        kmd: '19px' }} color='#0E2368.600'>
          Contact Us
        </Heading>
        <Text fontSize={{ base: '9px', md: '14px' }} fontWeight={400} pt={5} pb={4} lineHeight='23px' width={217}>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
        </Text>
        <Text fontSize={{ base: '9px', md: '14px' }} fontWeight={400} pb={4} >
          example2020@gmail.com
        </Text>
        <Text fontSize={{ base: '9px', md: '14px' }} fontWeight={400} >
          (904) 443-0343
        </Text>
      </Box>
      <Box maxW='32rem' lineHeight='40px'>
        <Heading fontSize={{ base: '15px', md: '19px' }} color='#0E2368.600'>
          More
        </Heading>
        <Text fontSize={{ base: '9px', md: '14px' }} fontWeight={400} pt={5}>
          <a href='about us'>About Us</a>
        </Text>
        <Text fontSize={{ base: '9px', md: '14px' }} fontWeight={400} >
          <a href='products'>Products</a>
        </Text>
        <Text fontSize={{ base: '9px', md: '14px' }} fontWeight={400} >
          <a href='career'>Career</a>
        </Text>
        <Text fontSize={{ base: '9px', md: '14px' }} fontWeight={400}>
          <a href='contact us'>Contact Us</a>
        </Text>
      </Box>
      <Box maxW='32rem'>
        <Heading fontSize={{ base: '15px', md: '19px' }} display={{base : 'none', md:'unset' }} color='#0E2368.600'>
          Social Links
        </Heading>
        <Flex justifyContent='flex-start' gap={6} pt={5}>
          <InstagramSvg />
          <TwitterSvg />
          <FacebookSvg />
        </Flex>

        <Text fontSize={{ base: '9px', md: '14px' }} fontWeight={400} pt={20} >
          © 2022 Food Truck Example
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
