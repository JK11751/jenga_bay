import { HStack, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { useHistory } from 'react-router'

export const Search = () => {

    const [query, setQuery] = React.useState("")
    const history = useHistory()

    React.useEffect(() => {
        const params = new URLSearchParams()
        if (query) {
          params.append("search", query)
        } else {
          params.delete("search")
        }
        history.push({search: params.toString()})
    }, [query, history])

    const handleOnChange = (event) => {
        setQuery(event.target.value)
    }
    return (
        <HStack spacing={3} alignItems="center">
            <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
                <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch />}
                />
                <Input value={query} onChange={(event) => handleOnChange(event)} type="tel" placeholder="Search by category..." />
            </InputGroup>
        </HStack>
    )
}
