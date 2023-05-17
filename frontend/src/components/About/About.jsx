import { Container, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import aboutbg from "../../assets/about.png"

const About = () => {
    return (
        <Container maxW={"container.lg"} py={10} px={8} my={[24, 16]} boxShadow={"2xl"} >
            <Heading color={"#48d1ab"} children="About Us" mb={5} />

            <Image src={aboutbg}
                p={0}
                boxSize={"sm"}
                objectFit={"contain"}
                mx="auto" />

            <Text textAlign={"justify"} _selection={{ bg: "#48d1ab" }} fontSize={"lg"} lineHeight={2} >
                Welcome to our airline website! We are a premier airline that has been providing exceptional service to travelers for many years. Our airline is committed to providing a safe, reliable, and comfortable travel experience to all of our passengers. In this article, we will give you an overview of who we are, what we offer, and why you should choose us for your next trip.

                Who We Are

                We are a global airline that operates in several countries across the world. Our airline is known for its excellent customer service, state-of-the-art aircraft, and top-notch amenities. We have a team of highly skilled pilots, flight attendants, and ground staff who work together to ensure that our passengers have a memorable and stress-free travel experience.

                Our airline has won several awards for its exceptional service and commitment to safety. We are proud to be recognized as one of the best airlines in the world, and we continue to strive for excellence in everything we do.

                What We Offer

                We offer a range of services and amenities to make your travel experience comfortable and enjoyable. Here are some of the things that you can expect when you fly with us:

                Comfortable seating - Our aircraft are equipped with comfortable seats that provide ample legroom and space for you to relax and unwind.

                In-flight entertainment - We offer a wide selection of movies, TV shows, music, and games that you can enjoy during your flight.

                Delicious food and beverages - We offer a variety of delicious meals and drinks that cater to different dietary needs and preferences.

                Wi-Fi - Our aircraft are equipped with Wi-Fi, so you can stay connected with your friends and family or catch up on work while you fly.

                Priority services - We offer priority check-in, boarding, and baggage handling services to our premium passengers, so you can skip the lines and save time.

                Why Choose Us

                There are several reasons why you should choose us for your next trip. Here are some of the benefits of flying with us:

                Safe and reliable - We prioritize safety above everything else, and we have strict protocols in place to ensure that our passengers and crew are safe at all times.

                Affordable - We offer competitive fares that are affordable for all travelers, so you can enjoy a luxurious travel experience without breaking the bank.

                Convenient - We operate in several countries across the world, and we offer a wide range of flights to suit your travel needs.

                Exceptional service - We are committed to providing exceptional service to all of our passengers, and we go above and beyond to make your travel experience as comfortable and enjoyable as possible.

                Rewards program - We offer a rewards program that allows you to earn points for every flight you take with us. These points can be redeemed for free flights, upgrades, and other perks.

                Conclusion

                In conclusion, our airline is committed to providing a safe, reliable, and comfortable travel experience to all of our passengers. We offer a range of services and amenities that cater to different needs and preferences, and we go above and beyond to ensure that our passengers have a memorable and stress-free travel experience. We are proud to be one of the best airlines in the world, and we look forward to welcoming you on board soon!
            </Text>

            <Text mt={10} textDecor={"underline"}>
                &#64; Hero Airlines Limited.
            </Text>
        </Container >
    )
}

export default About