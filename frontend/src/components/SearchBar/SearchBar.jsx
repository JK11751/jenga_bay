import React from "react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import {BiSearchAlt2} from "react-icons/bi"
// import { Button } from "@chakra-ui/button"
import {Flex} from "@chakra-ui/layout"

const SearchBar = () => {
    return(
        <Flex flexDir="row">
        <InputGroup marginLeft="70px">
            <InputLeftElement
                pointerEvents="none"
                children={<BiSearchAlt2 />}
            />
            <Input  background="#ffffff" borderRadius="50px" width="600px" placeholder="search here..." size="md"/>
        </InputGroup>
        {/* <Button fontWeight="normal" pl={3} pr={3} width="100px" height="35px" borderRadius="50px">search</Button> */}
        </Flex>
    )
}

export default SearchBar;