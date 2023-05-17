import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import { RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LinkButton = ({ url = "/", title = "home", onClose }) => {
    return (
        <>
            <Link onClick={onClose} to={url}>
                <Button variant={"ghost"}>{title}</Button>
            </Link>
        </>
    )
}

const Header = ({ isAuth, setIsAuth }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();
    const navigate = useNavigate();

    const logoutHandler = () => {
        onClose();
        localStorage.removeItem('isAuth');
        setIsAuth(false)
        navigate("/")
    };

    return (
        <>

            <Button color={"black"} backgroundColor={"#4dbde3"} zIndex={"overlay"} w={12} h={12} rounded="full" position={"fixed"}
                top={6} left={6} onClick={onOpen}>
                <RiMenu5Fill />
            </Button>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(3px)'} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={"1px"}>AIRLINES</DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={4} alignItems="flex-start">
                            <LinkButton onClose={onClose} url="/" title="Home" />
                            {isAuth && <LinkButton onClose={onClose} url="/flights" title="Flights" />}
                            <LinkButton onClose={onClose} url="/about" title="About Us" />

                            {isAuth && <>
                                <LinkButton onClose={onClose} url="/contact-us" title="Contact Us" />
                                <LinkButton onClose={onClose} url="/feedback" title="Feedback" />
                            </>}


                            <HStack justifyContent={"space-evenly"} pos={"absolute"} bottom={"2rem"} width="80%">
                                {
                                    isAuth ? (<>
                                        <VStack>
                                            <HStack>
                                                <Button onClick={logoutHandler} variant={"ghost"}>
                                                    <RiLogoutBoxLine />
                                                    Logout
                                                </Button>
                                            </HStack>
                                        </VStack>
                                    </>) : (<>
                                        <Link onClick={onClose} to={"/login"}>
                                            <Button color={"black"} backgroundColor={"#4dbde3"} >Login</Button>
                                        </Link>

                                        <p>OR</p>

                                        <Link onClick={onClose} to={"/register"}>
                                            <Button color={"black"} backgroundColor={"#4dbde3"} >Sign Up</Button>
                                        </Link>
                                    </>)
                                }
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header;

