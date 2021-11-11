import React from 'react';
import NavBar from '../PageSections/NavBar';
import { Box,} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import ProductContainer from '../Products/ProductContainer';
import CategoryChips from '../Categories/CategoryChips';

const  Profile=()=> {
  const img = "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
    return(
        <Box flexDir="column" width="100vw" height="100vh">
            <NavBar />
            
            <Box>
                <Image height="300px" width="100vw" src={img}>
                </Image>
            </Box>
            <CategoryChips />
            <ProductContainer alignSelf="center"/> 
        </Box>
    )
}
export default Profile;