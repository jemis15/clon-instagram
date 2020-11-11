import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function MultiItemsCarousel({ title, grupo }) {
    const [carouselLinks, setCarouselLinks] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCarouselLinks() {
            try {
                setLoading(true);
                const { data: apiCarouselLinks } = await Axios.get(`/apimuni/carousellinks/grupo/${grupo}`);
                setCarouselLinks(apiCarouselLinks);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        loadCarouselLinks();
    }, []);

    if (loading) {
        return <Container><p>Cargando...</p></Container>
    }

    if (!carouselLinks || carouselLinks.length <= 0) {
        return null
    }

    return <>
        <div className="py-5">
            <h5 className="container mb-3">{title}</h5>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className="py-2"
                containerClass="container"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 5,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable>
                {carouselLinks.map(carouselLink => (
                    <CarouselLink url={carouselLink.url} image={carouselLink.image} />
                ))}
            </Carousel>
        </ div>
    </>
}

function CarouselLink({ url, image }) {
    if (!image) {
        return null;
    }

    return <div className="item2 rounded-lg overflow-hidden">
        <a loading="lazy" href={url} target="_blank" className="d-inline-block">
            <img
                src={`/apimuni/images/carousellinks/${image}`}
                alt="carousel link"
                className="img-fluid"
            />
        </a>
    </div>
}