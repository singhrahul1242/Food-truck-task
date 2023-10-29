import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import WhiteButton from '../cutomButton/WhiteButton'



const CustomCard = ({ item }) => {

  const cardSize = useBreakpointValue({
    base: { width: '271px', height: 'auto' },
    md: { width: '400px', height: 'auto' },
  });

  const imageSize = useBreakpointValue({
    base: { width: '204px', height: '166px' },
    md: { width: '330px', height: '250px' },
  });
  return (

    <Card maxW='sm' width='381px' borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      style={cardSize} >
      <CardBody>
        <Image
          src={item.img}
          alt='Card1'
          borderRadius='21px'
          style={imageSize}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' color='#0E2368'>{item.title}</Heading>
          <Text color='#444957' width={{ base: '220px', md: '100%' }}>
            PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
          </Text>

        </Stack>
      </CardBody>
      <CardFooter>
        <WhiteButton name='Read More' style={{ color: '#424961' }} />
      </CardFooter>
    </Card>
  )
}

export default CustomCard