import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Stat, StatGroup, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import React from 'react'

const Flight = ({ from, to, duration, oldPrice, newPrice }) => {

    const [qty, setQty] = React.useState(0);
    const navigate = useNavigate();

    const handleBooking = () => {
        const officialPrice = qty * newPrice
        navigate("/booking", { state: { qty, from, to, officialPrice, duration } })
    }

    return (

        <Card>
            <CardHeader>
                <Heading size='md'> {from} - {to} </Heading>
            </CardHeader>
            <CardBody>
                <Text mb={3}> Duration: {duration} </Text>

                <StatGroup flexDirection={"column"} gap={8}>
                    <Stat>
                        <StatLabel>Old</StatLabel>
                        <StatNumber>&#8377;{oldPrice}</StatNumber>
                    </Stat>

                    <Stat>
                        <StatLabel>New</StatLabel>
                        <StatNumber>&#8377;{newPrice}</StatNumber>
                    </Stat>
                </StatGroup>

            </CardBody>
            <CardFooter>

                <Flex alignItems={"center"} gap={1}>
                    <Button onClick={handleBooking} colorScheme='teal'>Book Now</Button>
                    <Button onClick={() => setQty(qty - 1)} colorScheme='pink' size={"sm"}>-</Button>
                    <p>{qty}</p>
                    <Button onClick={() => setQty(qty + 1)} colorScheme='green' size={"sm"}>+</Button>
                </Flex>
            </CardFooter>
        </Card>
    )
}

export default Flight;