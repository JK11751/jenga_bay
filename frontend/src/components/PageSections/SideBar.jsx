import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
  } from "@chakra-ui/react"
const SideBar = ({ children, ...rest }) => {
	return (
		<Drawer isFullHeight={false} height="70vh" placement="left" variant='alwaysOpen' {...rest}>
			<DrawerContent>
				<DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
				<DrawerBody>{children}</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
export default SideBar;