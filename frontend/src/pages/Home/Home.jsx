import React from 'react'
import {
    Button,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import './Home.css';
import { Link } from 'react-router-dom';
import vg from "../../assets/aircraft.png"
import { GiAirplaneDeparture } from "react-icons/gi"

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <Stack
                    direction={['column', 'row']}
                    height="100%"
                    justifyContent={['center', 'space-between']}
                    alignItems="center"
                    spacing={['16', '56']}
                >
                    <VStack
                        width={'full'}
                        alignItems={['center', 'flex-start']}
                        spacing="8"
                    >
                        <Heading className='fly' children="READY TO FLY?" size={'2xl'} />
                        <Text
                            fontSize={'2xl'}
                            fontFamily="cursive"
                            textAlign={['center', 'left']}
                            children="Grab your seat by clicking below, don't forget to miss the chance"
                        />
                        <Link to="/flights">
                            <Button size={'lg'} color="black" alignItems={"center"} display={"flex"} backgroundColor={"#4dbde3"}>
                                Book Now
                                <GiAirplaneDeparture fontSize={"30px"} />
                            </Button>
                        </Link>
                    </VStack>

                    <Image
                        className="vector-graphics"
                        boxSize={'md'}
                        src={vg}
                        objectFit="contain"
                    />
                </Stack>
            </div>
        </section >
    )
}

export default Home