import { Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { MdEmail, MdPhone } from "react-icons/md"
import { BsTwitter } from "react-icons/bs"
import React from 'react'
import contactImg from "../../assets/contact.png"
import { useNavigate } from 'react-router-dom'

const Contact = ({ isAuth }) => {

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuth) navigate("/register");
    }, []);

    return (
        <Container px={10} boxShadow={"lg"} maxW={"container.md"} py={16} my={[24, 16]}>
            <Heading textDecor={"underline"} children="Contact Us" />

            <Image src={contactImg}
                p={0}
                boxSize={"md"}
                objectFit={"contain"}
                mx="auto" />

            <Stack direction={"column"}>
                <Text textAlign={"justify"} lineHeight={"2"} >
                    Dear Valued Customer,

                    Thank you for choosing our airline for your travel needs. We are always eager to hear from our customers and are committed to providing you with the best possible service.

                    If you have any questions or concerns regarding your upcoming trip, please do not hesitate to reach out to us. Our customer support team is available 24/7 to assist you with any queries or issues you may have.

                    You can reach us by phone and email.

                    We look forward to hearing from you and hope to make your travel experience with us as comfortable and enjoyable as possible.

                    Sincerely,
                    The HeroLines Team
                </Text>

                <Text gap="10px" mb="1" fontSize={"xl"} display={"flex"} alignItems={"center"} >
                    <MdEmail />
                    <a style={{ textDecoration: "underline" }} href="mailto:someone@example.com"> airlines@gmail.com</a>
                </Text>

                <Text gap="10px" mb="1" fontSize={"xl"} display={"flex"} alignItems={"center"}>
                    <MdPhone />
                    <span>+1234567890</span>
                </Text>

                <Text gap="10px" mb="1" fontSize={"xl"} display={"flex"} alignItems={"center"}>
                    <BsTwitter />
                    <a target='_blank' href="https://twitter.com/HeroCodes404">@HeroCodes404</a>
                </Text>
            </Stack>
        </Container >
    )
}

export default Contact
