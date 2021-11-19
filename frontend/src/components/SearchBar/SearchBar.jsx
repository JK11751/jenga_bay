import React, {useState,useRef,useEffect} from "react"
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input"
import {BiSearchAlt2} from "react-icons/bi"
// import {MdClose} from "react-icons/md"
import {Flex} from "@chakra-ui/layout"
import SearchedUsersDropdown from "./SearchedItemsDropDown"
// import CategoryList from "../Categories/CategoryList";
import { useHistory } from "react-router-dom"
import { handleGetProducts } from "../../redux/actions/appActions";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {

    //fetching data from the api
    const dispatch = useDispatch();
    const productReducer = useSelector(({ productReducer }) => productReducer);
    // setting the value of product Reducer to the data fetched from the api

    useEffect(() => {
        dispatch(handleGetProducts())// dispatches the action to get the data from the api    
    }, [dispatch]);

    localStorage.setItem("Allproducts", JSON.stringify(productReducer));console.log("Allproducts")

    //dealing with appending query to the url
    const [query, setQuery] = useState("")
    const history = useHistory()
    
    useEffect(() => {
        const params = new URLSearchParams()
        if (query) {
          params.append("search", query)
        } else {
          params.delete("search")
        }
        history.push({pathname: window.location.pathname ,search: params.toString()})
    }, [query, history])

    
    
    const [options, setOptions] = useState([])
    const [searchModalOpen, setSearchModalOpen] = useState("")

    //handles change in input
    const onInputChange = (event) => {
        const searchInput = event.target.value
        console.log(searchInput)
        setQuery(event.target.value)

        if (searchInput) {
            setSearchModalOpen(true);
        } else {
            setSearchModalOpen(false);
        }
    //    const newOptions = CategoryList.filter((category) => 
    //         category.value.toLowerCase().includes(event.target.value))
    const newOptions = productReducer.products.filter(
        (product) => 
            product.item_name
                    .toLowerCase()
                    .includes(event.target.value) ||
            product.category
                    .toLowerCase()
                    .includes(event.target.value) ||
            product.item_description  
                    .toLowerCase()
                    .includes(event.target.value) ||  
            product.item_seller.business_name
                    .toLowerCase()
                    .includes(event.target.value) ||
            product.item_seller.building
                    .toLowerCase()
                    .includes(event.target.value) ||
            product.item_seller.street
                    .toLowerCase()
                    .includes(event.target.value) ||
            product.item_seller.town
                    .toLowerCase()
                    .includes(event.target.value) || 
            product.item_seller.local_area_name        
                    .toLowerCase()
                    .includes(event.target.value) || 
            product.item_seller.sub_county.county.county_name           
                    .toLowerCase()
                    .includes(event.target.value) ||
            product.item_seller.sub_county.subcounty_name           
                    .toLowerCase()
                    .includes(event.target.value)                               
        );

 
       setOptions(newOptions)
    }
    // const filterUser = (searchInput, allUsers) => {
    //     const newFilteredUsers = allUsers.filter(
    //         (user) =>
    //             user.user_name
    //                 .toLowerCase()
    //                 .includes(searchInput.toLowerCase()) ||
    //             user.first_name
    //                 .toLowerCase()
    //                 .concat(` ${user.last_name.toLowerCase()}`)
    //                 .includes(searchInput.toLowerCase()) ||
    //             user.email.toLowerCase().includes(searchInput.toLowerCase())
    //     );

    //     setFilteredUsers(newFilteredUsers);
    // };
   
    //handles closing of search when clicking anywhere outside the modal
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
        setClickedOutside(true);
        }
    };

    //useEffect to listen to any click events
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    const onKeyEvent = (e) => {
        if (e.keyCode === 13) {
            history.replace(`/products/${query}`)
            setSearchModalOpen(true);
        }
    };
    

    return(
        <Flex flexDir="column">
            <InputGroup >
                <Input value={query} onKeyDown={onKeyEvent} borderWidth="1.9px" ref={myRef} onChange={onInputChange} onClick={(e) => {setClickedOutside(false)}} focusBorderColor = "blue" background="#ffffff" borderRadius="5px" width="40vw" placeholder="Search products, categories and brands..." size="md"/>
                {/* <InputRightElement
                    pointerEvents="none"
                    children={<MdClose color="#fff"/>}
                /> */}
                <InputRightAddon
                    borderColor="#FFA90A"
                    bg="#FFA90A"
                    // as={Link}
                    // to={{pathname: "/products" , search:`${myquery}`}}
                    onClick={() => history.replace(`/products/${query}`)}
                    children={<BiSearchAlt2 color="#fff"/>}
                />
            </InputGroup>
            <div ref={myRef}>
             { !clickedOutside && searchModalOpen && <SearchedUsersDropdown options={options} />}
            </div>
        </Flex>
    )
}

export default SearchBar;
