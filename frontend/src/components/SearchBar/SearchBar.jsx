import React from "react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import {BiSearchAlt2} from "react-icons/bi"

const SearchBar = () => {
    return(
        <InputGroup marginLeft="70px">
            <InputLeftElement
                pointerEvents="none"
                children={<BiSearchAlt2 w={4} />}
            />
            <Input background="#ffffff" borderRadius="50px" width="700px" placeholder="search here..." size="md"/>
        </InputGroup>
    )
}

export default SearchBar;