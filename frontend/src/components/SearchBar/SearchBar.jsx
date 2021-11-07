import React from "react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import {BiSearchAlt2} from "react-icons/bi"

const SearchBar = () => {
    return(
        <InputGroup marginLeft="70px">
            <InputLeftElement
                pointerEvents="none"
                children={<BiSearchAlt2 />}
            />
            <Input background="#ffffff" borderRadius="50px" width="750px" placeholder="search here..." height="33px"/>
        </InputGroup>
    )
}

export default SearchBar;