import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import CustomCard from "../card/CustomCard";

const CustomCarousel = () => {
    const items = [
        {
            title: 'Grilled Tomatoes at Home',
            img: require('../../images/card1.png'),
        },
        {
            title: 'Snacks for Travel',
            img: require('../../images/card2.png'),
        },
        {
            title: 'Post-workout Recipes',
            img: require('../../images/card3.png'),
        },
        {
            title: 'How To Grill Corn',
            img: require('../../images/card4.png'),
        },
        {
            title: 'Crunchwrap Supreme',
            img: require('../../images/card5.png'),
        },
        {
            title: 'Broccoli Cheese Soup',
            img: require('../../images/card6.png'),
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex + 3 < items.length) {
            setCurrentIndex(currentIndex + 3);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 3);
        }
    };

    return (
        <Box pl={{ base: 4, md: 20 }} pr="108px" pb={20}>
            <Heading fontSize={{ base: '28px', md: '56px' }} color="#0E2368" fontWeight={600} pb={10}>
                Latest Articles
            </Heading>
            <Box>
                <SimpleGrid spacing={2} templateColumns={{ base: '1fr', md: 'repeat(auto-fill, minmax(400px, 1fr))' }}>
                    {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
                        <CustomCard item={item} key={index} />
                    ))}
                </SimpleGrid>
            </Box>


            <Flex align="center" justify="center" mt={5}>
                <Button onClick={handlePrev} disabled={currentIndex === 0}>
                    <ChevronLeftIcon />
                </Button>
                <Text mx="24px" fontSize="md" fontWeight="bold">
                    {Math.floor(currentIndex / 3) + 1} / {Math.ceil(items.length / 3)}
                </Text>
                <Button onClick={handleNext} disabled={currentIndex + 3 >= items.length}>
                    <ChevronRightIcon />
                </Button>
            </Flex>
        </Box>
    );
}

export default CustomCarousel;

