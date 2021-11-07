import { Box, Divider, Text } from "@chakra-ui/layout";

const ItemDescription = () => {
    return(
        <Box mb={12} ml={12} borderRadius="10px" p={4} width="90vw" backgroundColor="#f3f3f3">
            <Text p={3} fontSize='20px'>Item Description</Text>
            <Divider color="#000000"/>
            <Text p={2} lineHeight="25px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Fusce a neque orci. Vivamus nisl tortor, sollicitudin in augue vitae,
             dictum imperdiet orci. Vestibulum ut ligula nulla. Nam id tortor vel risus
             dapibus viverra. Aliquam vehicula porttitor ornare. Donec laoreet tellus in 
             faucibus vestibulum. Nam luctus orci nec neque laoreet, eu congue tellus convallis. 
             Etiam venenatis, quam vitae auctor venenatis, arcu nunc vehicula diam, quis sagittis
             dolor nibh vulputate magna. Integer vel est venenatis turpis pharetra consequat sit
             amet id elit. Quisque sodales euismod euismod. Etiam dictum risus lacus, non vestibulum 
             neque vehicula sit amet. Cras tincidunt neque a odio dictum, in condimentum elit facilisis.
             Vivamus ac vestibulum lorem. Mauris commodo ante vel nisl elementum maximus. Cras dictum viverra
             sollicitudin. Donec nunc magna, ultrices eget vulputate nec, sagittis vel est.</Text>
        </Box>
    )
}

export default ItemDescription;