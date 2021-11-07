import React from "react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => {
    return(
        <InputGroup marginLeft="70px">
            <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineSearch/>}
            />
            <Input background="#ffffff" borderRadius="50px" width="700px" placeholder="search here..." size="md"/>
        </InputGroup>
    )
}

export default SearchBar;