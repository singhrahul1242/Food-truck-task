import { Button } from '@chakra-ui/react'
import React from 'react'

const WhiteButton = (props) => {
  return (
    <Button borderRadius={20} variant='outline' borderColor='#424961' fontWeight='light' h={{ base: "26px", md: "42px" }}>{props.name}</Button>
  )
}

export default WhiteButton