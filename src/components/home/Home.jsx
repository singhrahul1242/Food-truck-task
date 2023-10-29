import React from 'react';
import { Box, Image, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import Header from '../header/Header';
import HomeImg from '../../images/Pizza.png';
import { Button } from '../index';

const Home = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box position="relative">
            <Box style={{ position: 'absolute', zIndex: 1, width: '100%', padding: '0 1rem 0 4rem' }}>
                <Header />
            </Box>
            <Flex
                direction={{ base: 'column-reverse', md: 'row' }}
                pl={{ base: 'none', md: 20 }}
                className='Home-section'
                justifyContent={{ base: 'center', md: 'space-between' }}
                width='100%'
                spacing={0}
            >
                <Flex className='Left-section' width={{ base: '100%', md: '50%' }} justifyContent={{ base: 'center', md: 'space-between' }}>
                    <Box pt={{ base: 20, md: 40 }} lineHeight={8} display={{ base: 'flex' }} flexDirection={{ base: 'column' }} alignItems={{ base: 'center', md: 'flex-start' }}>
                        <Heading fontSize={{ base: '38px', md: '62px' }} fontWeight={700} color='#0E2368' noOfLines={3}>
                            Discover the<br /><span style={{ color: '#E23744' }}>Best</span> Food<br />and Drinks
                        </Heading>
                        <Text fontSize={{ base: '11px', md: 'md' }} pt={5} pb={5} lineHeight='16px' fontWeight={400} width={{ base: 300, md: 400 }}>
                            Naturally made Healthcare Products for the better care & support of your body.
                        </Text>
                        <Button name='Explore Now' />
                    </Box>
                </Flex>
                {
                    isMobile ? (<Flex className='Right-section' justifyContent='flex-end' position="relative">
                        <Image src={HomeImg} alt="Home Image" width='100%' height='410px' />
                        <Box position="absolute" top={0} right={0}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="440"
                                height="426" viewBox="0 0 600 839" fill="none">
                                <path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744" />
                            </svg>
                        </Box>
                    </Flex>)
                        :
                        (<Flex className='Right-section' justifyContent='flex-end' position="relative" width='50%'>
                            <Image src={HomeImg} alt="Home Image" width='650px' />
                            <Box position="absolute" top={0} right={0}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="752" height='760' viewBox="0 0 600 839" fill="none">
                                    <path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744" />
                                </svg>
                            </Box>
                        </Flex>)
                }
            </Flex>
        </Box>
    );
}

export default Home;
