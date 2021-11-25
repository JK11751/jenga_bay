import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

export const Loading = () => {
    return (
        <Center>
            <Spinner thickness="4px"
                mt="45vh"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"/>
        </Center>
    )
}
