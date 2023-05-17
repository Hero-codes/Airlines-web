import React from 'react'
import { Heading, SimpleGrid, Container, Input } from "@chakra-ui/react"
import Flight from '../../components/Flight/Flight'
import { useNavigate } from 'react-router-dom';

const Flights = ({ isAuth }) => {

    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = React.useState("");
    const dummyInfo = [
        {
            id: 1,
            from: "Noida",
            to: "Bangalore",
            duration: "1hr",
            oldPrice: 15000,
            newPrice: 12000,
        },
        {
            id: 2,
            from: "New York",
            to: "Delhi",
            duration: "1hr",
            oldPrice: 15000,
            newPrice: 12000,
        },
        {
            id: 3,
            from: "Ladakh",
            to: "Andaman",
            duration: "1hr",
            oldPrice: 25000,
            newPrice: 19000,
        },
        {
            id: 4,
            from: "Romania",
            to: "Brazil",
            duration: "1hr",
            oldPrice: 15000,
            newPrice: 12000,
        },
        {
            id: 5,
            from: "Gujarat",
            to: "Sri Lanka",
            duration: "1hr",
            oldPrice: 25000,
            newPrice: 19000,
        },
        {
            id: 6,
            from: "Bhutan",
            to: "Denmark",
            duration: "1hr",
            oldPrice: 11100,
            newPrice: 10000,
        },
        {
            id: 7,
            from: "Austria",
            to: "Hungray",
            duration: "1hr",
            oldPrice: 20000,
            newPrice: 17450,
        },
        {
            id: 8,
            from: "Nigeria",
            to: "Portugal",
            duration: "1hr",
            oldPrice: 40000,
            newPrice: 35000,
        },
    ];

    React.useEffect(() => {
        if (!isAuth) navigate("/register");
    }, []);

    return (
        <Container px={10} boxShadow={["", "lg"]} maxW={"container.lg"} py={16} my={[24, 16]}>
            <Heading children="Flight booking details" mb={10} />

            <Input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                mb={8}
                placeholder='Search your flights here...'
            />

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

                {dummyInfo.filter(info => info.from.toLowerCase().includes(searchQuery) || info.to.toLowerCase().includes(searchQuery)).map(info => <Flight {...info} key={info.id} />)}

            </SimpleGrid>
        </Container>
    )
}

export default Flights