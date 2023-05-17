import { Button, Container, Divider, Heading, Input, InputGroup, InputLeftAddon, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { CiLogin } from "react-icons/ci"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import loginBg from "../../assets/login.png"

const Login = ({ setIsAuth }) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const loginHandler = async () => {
        try {
            const { data } = await axios.post(import.meta.env.VITE_LOGIN_URL, {
                email, password
            })
            setIsAuth(true);
            localStorage.setItem('isAuth', 'trie')
            navigate("/flights");
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <Container boxShadow={'2xl'} my={[24, 16]} py={16} maxW={'container.lg'} >
            <Heading textAlign={"center"} mb={4} fontSize={'3xl'} textColor={"#4dbde3"} children="Login" />

            <Image src={loginBg}
                p={0}
                boxSize={"sm"}
                objectFit={"contain"}
                mx="auto" />

            <VStack spacing={8} >
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
                <Button onClick={loginHandler} bgColor={"#4dbde3"}>Login <CiLogin /> </Button>
            </VStack>

            <VStack spacing={4} mt={2}>
                <Divider fontWeight={'bold'} />
                <p style={{ textDecoration: "underline" }} >Don't have an account?</p>

                <Link to={"/register"}>
                    <Button bgColor={"#4dbde3"}>Register</Button>
                </Link>

            </VStack>
        </Container >
    )
}

export default Login