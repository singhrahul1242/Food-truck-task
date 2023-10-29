import React from 'react';
import Logo from '../../images/logo.png'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'

const Header = () => {
    

    return (
        <Flex as="nav" className='header' pt={3} alignItems="center" justifyContent="space-between">
            <Box className="log" w="107px" h='83px' display={{ base: 'none', md: 'block' }}>
                <img src={Logo} alt='logo' />
            </Box>
            <Spacer />
            <Box order={{ base: 2, md: 1 }}>
                <Button borderRadius={20} variant='outline' color='white' borderColor='white' fontWeight='light' fontSize={{ base: '11px', md :'16px'}} height={{base: '27px', md : '36px'}}>
                    Get In Touch
                </Button>
            </Box>
        </Flex>

    )
}

export default Header;