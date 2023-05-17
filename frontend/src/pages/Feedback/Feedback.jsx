import { Button, Container, Heading, Image, Input, Textarea, VStack } from '@chakra-ui/react'
import { RiSendPlaneLine } from "react-icons/ri"
import feedbackBg from "../../assets/feedback.png"
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Feedback = ({ isAuth }) => {

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuth) navigate("/register");
    }, []);

    return (
        <Container boxShadow={"2xl"} maxW={"container.lg"} py={16} my={[24, 16]}>
            <Heading color='blue.500' pb={10} fontFamily={"cursive"} size={"lg"} textAlign={"center"} >
                Feedback Form
            </Heading>

            <Image src={feedbackBg}
                p={0}
                boxSize={"sm"}
                objectFit={"contain"}
                mx="auto" />

            <form
                action="https://formspree.io/f/xayzvprv"
                method="POST"
            >
                <VStack spacing={8} >
                    <label>
                        Your email:
                        <Input type="email" name="email" />
                    </label>
                    <label>
                        Your message:
                        <Textarea rows="10" cols="50" colorScheme='red' name="message"></Textarea>
                    </label>
                    <Button colorScheme='teal' type="submit">
                        Send <RiSendPlaneLine style={{ marginLeft: "5px" }} />
                    </Button>
                </VStack>
            </form>

        </Container>
    )
}

export default Feedback