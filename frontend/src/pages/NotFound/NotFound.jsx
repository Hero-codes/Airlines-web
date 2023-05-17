import React from 'react'
import { Button, Flex, Container, Heading, Image } from "@chakra-ui/react"
import notfoundbg from "../../assets/notfound.png"
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <Container px={10} boxShadow={"lg"} maxW={"container.md"} py={16} my={[24, 16]}>
            <Heading textDecor={"underline"} textAlign={"center"} children="Page Not Found..." />

            <Image src={notfoundbg}
                p={0}
                boxSize={"md"}
                objectFit={"contain"}
                mx="auto" />

            <Flex gap={2} justifyContent={["center", "space-around"]} direction={["column", "row"]}>
                <Button onClick={() => navigate(-1)} gap={2} colorScheme='orange'>
                    <BiArrowBack />
                    <span style={{ marginBottom: "1px" }}>Go Back</span>
                </Button>
                <Button onClick={() => navigate("/")} gap={2} colorScheme='orange'>
                    Redirect Me To Home Page
                </Button>
            </Flex>
        </Container>
    )
}

export default NotFound