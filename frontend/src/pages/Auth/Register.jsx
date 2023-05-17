import React from 'react'
import { Button, Container, Divider, Heading, Image, Input, InputGroup, InputLeftAddon, VStack } from '@chakra-ui/react'
import { CiLogin } from "react-icons/ci"
import { Link, useNavigate } from 'react-router-dom'
import registerBg from "../../assets/register.png"
import axios from 'axios'

const Register = ({ setIsAuth }) => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const registerHandler = async () => {
        try {
            const { data } = await axios.post(import.meta.env.VITE_REGISTER_URL, {
                name, email, password
            })
            setIsAuth(true);
            navigate("/flights");
            localStorage.setItem('isAuth', 'true')
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <Container boxShadow={'2xl'} my={[24, 16]} py={16} maxW={'container.lg'} >
            <Heading textAlign={"center"} mb={4} fontSize={'3xl'} textColor={"#4dbde3"} children="Register" />

            <Image src={registerBg}
                p={0}
                boxSize={"sm"}
                objectFit={"contain"}
                mx="auto" />

            <VStack spacing={8} >
                <InputGroup>
                    <InputLeftAddon children='Name' />
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type='text' placeholder='Type Your Name' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Email' />
                    <Input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type='email' placeholder='Type Your Email...' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Password' />
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password' placeholder='Type Your Password...' />
                </InputGroup>
                <Button onClick={registerHandler} bgColor={"#4dbde3"}>Register</Button>
            </VStack>

            <VStack spacing={4} mt={2}>
                <Divider fontWeight={'bold'} />
                <p style={{ textDecoration: "underline" }} >Already have an account?</p>

                <Link to={"/login"}>
                    <Button bgColor={"#4dbde3"}>
                        Login
                        <CiLogin />
                    </Button>
                </Link>
            </VStack>
        </Container >
    )
}

export default Register