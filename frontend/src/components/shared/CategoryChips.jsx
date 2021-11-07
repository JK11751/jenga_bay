import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import CategoryList from "../../pages/Home/CategoryList";

const CategoryChips = () => {
    return(
    <Flex ml={10} mt={5} mb={5}>
        {CategoryList.map((category) =>
        
            (<Button mr={3} borderRadius="30px" size="sm" variant="outline">{category.value}</Button>)
        )}
    </Flex>
    )
}

export default CategoryChips;