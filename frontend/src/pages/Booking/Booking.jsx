import { Button, Container, Heading, Image, Table, TableCaption, Tbody, Td, TableContainer, Th, Thead, Tr, Text, Box, } from "@chakra-ui/react"
import paymentBg from "../../assets/payment.png"
import React from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios"

const Booking = () => {
    const location = useLocation();

    const initPayment = (data) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: data.amount,
            currency: data.currency,
            name: "Ticket Booking",
            description: "Test Transaction",
            image: "https://pbs.twimg.com/profile_images/1626095321309908993/Arkr38PP_400x400.jpg",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = import.meta.emv.VITE_VERIFY_URL;
                    const { data } = await axios.post(verifyUrl, response)
                } catch (error) {
                    console.log(error)
                }
            },
            theme: "#00b386"
        }
        const rzp1 = new window.Razorpay(options)
        rzp1.open()
    }

    const checkoutHandler = async () => {
        try {
            const orderUrl = import.meta.env.VITE_ORDERS_URL;
            const { data } = await axios.post(orderUrl, { amount: location.state.officialPrice });
            initPayment(data.data)
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <Container boxShadow={'2xl'} my={[24, 16]} px={8} py={16} maxW={'container.lg'}>
            <Heading children="Book Here" size="lg" />

            <Image src={paymentBg}
                p={0}
                boxSize={"sm"}
                objectFit={"contain"}
                mx="auto" />

            <TableContainer>
                <Table variant='striped'>
                    <TableCaption>Ticket Details:</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>From</Th>
                            <Th>To</Th>
                            <Th>Duration</Th>
                            <Th>Seats</Th>
                            <Th isNumeric>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>{location.state.from}</Td>
                            <Td>{location.state.to}</Td>
                            <Td>{location.state.duration}</Td>
                            <Td>{location.state.qty}</Td>
                            <Td isNumeric>&#8377; {location.state.officialPrice}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <Button onClick={checkoutHandler} colorScheme="whatsapp">Grab Your Seat(s)</Button>

            <Box boxShadow={"base"} maxW={"container.sm"} p={2} mt={2}>
                <Text children="Note: " />
                <Text children="This is a test payment, no real money will be deducted." />
                <Text children="4111 1111 1111 1111, This is the test number, you can use this to try the payment gateway made by me :)" />
                <Text children={`Date: any future date from today (${new Date().toLocaleDateString()})`} />
                <Text children="Any 3 digit cvv will be accepted" />
            </Box>
        </Container>
    )
}
export default Booking
