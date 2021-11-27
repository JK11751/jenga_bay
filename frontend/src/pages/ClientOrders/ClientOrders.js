import React, {useEffect} from 'react'
import NavBar from '../../components/PageSections/NavBar'
import Footer from '../../components/PageSections/Footer'
import { OrderItem } from '../../components/Orders/OrderItem';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Center, Text  } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetBuyerOrders } from '../../redux/appActions/orderActions';
import { getUser } from '../../utils/useToken';
// import { handleGetSellerDetails } from '../../redux/appActions/sellerActions';
// import { handleGetClientDetails } from '../../redux/appActions/userActions';

export const ClientOrders = () => {
    const dispatch = useDispatch()
    const userId = getUser().user_id

    const orderReducer = useSelector(({ orderReducer }) => orderReducer);
    // const sellerReducer = useSelector(({ sellerReducer }) => sellerReducer);
    const [pending, setPending] = React.useState([])
    useEffect(() => {
        dispatch(handleGetBuyerOrders(userId))
        // dispatch(handleGetSellerDetails(userId))
        console.log("userId",userId)
    }, [dispatch, userId])

    useEffect(() => {
        setPending(filterPendingOrders(orderReducer.buyerOrders, false))
    }, [orderReducer.buyerOrders])

    // finds county by name from select and returns a list of subcounties
  function filterPendingOrders(orders, criteria) {

    //looks for the county in the json file
    const pendingOrders = orders.filter(
      order => order.is_delivered === criteria
    )

    /*
      if the county exists then it returns the values of 
      subcounties from the array of subcounties
    */
    if (pendingOrders){
      return pendingOrders
      .map((order) => {
        return(
        <OrderItem id={order.id} seller_id={order.payment_transaction.recipient} order={order} key={order.id}/>)})
    }
  }

    return (
        <div>
        <NavBar/>
        <Box height="100vh">
            <Breadcrumb p={5} fontSize="1em" fontFamily="monospace" textTransform="uppercase" ml={20} spacing="8px" separator={<MdKeyboardArrowRight color="gray.500" />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={{pathname: `#`}}>Your-Account</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>Orders</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Center>
                <Tabs width="90%">
                    <TabList>
                        <Tab>Orders</Tab>
                        <Tab>Pending Orders</Tab>
                        <Tab>Cancelled Orders</Tab>
                    </TabList>

                    <TabPanels>
                      { orderReducer.buyerOrders && <TabPanel id="Orders">
                        {orderReducer.buyerOrders.length === 0 && (<Text> There are no orders here</Text>)}
                        {/* <p>Orders from {sellerReducer.sellerDetails.map((seller) =>{ return seller.business_name})}</p> */}
                            {
                                orderReducer.buyerOrders.map((order) => {
                                    return(
                                        <OrderItem  seller_id={order.payment_transaction.recipient} id={order.id} order={order} {...order} key={order.id}/>
                                    )}
                                )    
                            }
                        </TabPanel>}
                        { orderReducer.buyerOrders !== null &&  <TabPanel id="Pending-Orders">
                        {orderReducer.buyerOrders.length === 0 && (<Text> There are no pending orders</Text>)}
                        {/* <p>Orders from {sellerReducer.sellerDetails.map((seller) =>{ return seller.business_name})}</p> */}
                            { pending}
                        </TabPanel>}
                        <TabPanel id="Cancelled-Orders">
                        {orderReducer.cancelledOrders.length === 0 && (<Text> There are no cancelled orders</Text>)}
                        {/* <p>Orders from {sellerReducer.sellerDetails.map((seller) =>{ return seller.business_name})}</p> */}
                            {
                                orderReducer.cancelledOrders.map((order) => {
                                    return(
                                        <OrderItem seller_id={order.payment_transaction.recipient} id={order.id} order={order} {...order} key={order.id}/>
                                    )}
                                )    
                            }
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Center>
        </Box>
        <Footer/> 
        </div>
    )
}


