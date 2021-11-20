import { HStack, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { useHistory } from 'react-router'

export const Search = ({seller_name, sellerId}) => {

    const [query, setQuery] = React.useState("")
    const history = useHistory()
    const params = new URLSearchParams()
    React.useEffect(() => {
        
        if (query) {
          params.append("search", query)
        } else {
          params.delete("search")
        }
        // history.push({pathname:"/products" ,search: params.toString()})
    }, [query, history])

    const handleOnChange = (event) => {
        setQuery(event.target.value)
    }
    const onKeyEvent = (e) => {
        if (e.keyCode === 13) {
            history.push({pathname: `/sellers/${sellerId}/items` ,search: params.toString()})
        }
    };

    return (
        <HStack spacing={3} alignItems="center">
            <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
                <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch />}
                />
                <Input value={query} onKeyDown={onKeyEvent} onChange={(event) => handleOnChange(event)} type="tel" placeholder="Search..." />
            </InputGroup>
        </HStack>
    )
}