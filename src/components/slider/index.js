import React, { Component } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Fonts } from '../theme/fonts';
import { Containers } from '../theme/containers';
import { Styling } from '../theme/styling';
import { Images } from '../../assets/img';
import { Intro } from "../intro";
import { Buttons } from './../theme/buttons';

import { Navbar } from "../navbar";



function NextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div className="xsm:block md:block">
            <div
                className={`
                xsm:-right-1 
                md:-right-8 
                lg:-right-10 
                ${Styling.transitionStyleFaster} ${Buttons.btnCarousel}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <img
                    alt="Next"
                    src={Images.nextIco}
                    className={`${Buttons.btnIcon}`}
                />
            </div>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="xsm:block md:block">
            <div
                className={`
                xsm:-left-1 
                md:-left-8 
                lg:-left-10 
                ${Styling.transitionStyleFaster} ${Buttons.btnCarousel}
                `}
                style={{ ...style }}
                onClick={onClick}
            >
                <img
                    alt="Previous"
                    src={Images.prevIco}
                    className={`${Buttons.btnIcon}`}
                />
            </div>
        </div>
    );
}

export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            // autoplay: true,
            // autoplaySpeed: 12000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        initialSlide: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        innerWidth: 400
                        // variableWidth: true,
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        initialSlide: 1
                    }
                }
            ]
        };

        const carImage = `
        flex justify-center items-center 
        border-primary dark:border-secondary border-opacity-10 dark:border-opacity-10
        xsm:hidden xsm:pt-4 xsm:px-14
        md:block md:w-full md:pb-4 md:px-24
        lg:border-r lg:w-1/2 lg:py-14 lg:px-32
        xl:p-6 xl:pb-10 xl:pl-16 xl:pr-0
        `;

        const imageDimensions = `
        h-auto mx-auto 
        xsm:w-full 
        md:w-[50%] 
        xl:w-[80%] 
        2xl:w-96
        `;

        const carDetail = `
        relative flex flex-row items-center h-full
        xsm:w-full xsm:px-12 xsm:pb-5
        md:pb-12 md:px-16
        lg:w-1/2 lg:px-32 lg:py-14
        xl:px-12 
        2xl:px-16 
        `

        return (
            <div
                className={`
                ${Containers.glsFx} 
                ${Containers.mainContainer} 
                ${Containers.mainCarouselContainer} 
                ${Styling.transitionStyle}}
                `}
            >
                <Slider className={`
                    ${Styling.flexY}
                    relative h-[100%]
                    xsm:w-full px-0 mx-0`}
                    ref={c => (this.slider = c)} {...settings}
                >
                    {/* slide */}
                    <Intro />

                    {/* slide */}
                    <div key={2} className={`${Styling.flexCenter} z-20`}>
                        <div className={`${[Styling.transitionStyle, Containers.carouselSubContainer]}`}>

                            {/* carousel_image */}
                            <div className={`${carImage}`}>
                                <img
                                    alt="Conflict Resolution"
                                    src={Images.conflictImg}
                                    className={`${imageDimensions}`} />
                            </div>

                            {/* carousel_detail */}
                            <div className={`${carDetail}`}>
                                <div className="flex-col">
                                    <h2 className={`${Fonts.sectionTitleFont}`}>
                                        Conflict Resolution
                                    </h2>
                                    <p className={`${Fonts.bodyFont}`}>
                                        We all come from different backgrounds, attitudes &amp; opinions but we must come together &amp; form relationships to meet various objectives &amp; goals; for processes to work &amp; for administrations to function. Conflicts are therefore inevitable. With efficient conflict resolution mechanisms in place, friction is reduced &amp; tensions avoided in a professional and respectable manner.
                                        <br />
                                        <br />
                                        Reap strong relationships. Having good conflict resolution skills help personalities reduce the friction that damages their working relationships. By resolving conflicts in a more professional and respectful manner, they are enabled to collaborate better with, building stronger work relationships.
                                        <br />
                                        <br />
                                        Reduced disruptions. Poor conflict resolution skills cause tension to build up in the face of any disagreement, which then spreads to other stakeholders who may not have been involved originally. This results in a developing negative morale as well as stalling of the work flow. By providing conflict resolution mechanisms and training parties in conflict resolution, such disruptions can be minimized and a better working environment can be created.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* slide */}
                    <div key={3} className={`${Styling.flexCenter} z-20`}>
                        <div className={`${Styling.transitionStyle} ${Containers.carouselSubContainer}`}>

                            {/* carousel_image */}
                            <div className={`${carImage}`}>
                                <img
                                    alt="Conflict Resolution"
                                    src={Images.mediationImg}
                                    className={`${imageDimensions}`} />
                            </div>

                            {/* carousel_detail */}
                            <div className={`${carDetail}`}>
                                <div className="flex-col">
                                    <h2 className={`${Fonts.sectionTitleFont}`}>
                                        Mediation Specialist
                                    </h2>
                                    <p className={`${Fonts.bodyFont}`}>
                                        With vast experience and skill in mediation on family, commercial and community matters, any matter of disagreement referred is efficiently analyzed and broken down into manageable issues to prevent and/or sort out the rising conflict.  Judiciary experience arms the mediator with a 60-day limit to bring conflict to resolution culminating in preserved relationships and allowing continuity of functions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* slide */}
                    <div key={4} className="relative z-20">
                        <div className={`${Styling.transitionStyle} ${Containers.carouselSubContainer}`}>

                            {/* carousel_image */}
                            <div className={`${carImage}`}>
                                <img
                                    alt="Conflict Resolution"
                                    src={Images.trainingImg}
                                    className={`${imageDimensions}`} />
                            </div>

                            {/* carousel_detail */}
                            <div className={`${carDetail}`}>
                                <div className="flex-col">
                                    <h2 className={`${Fonts.sectionTitleFont}`}>
                                        Conflict Resolution Training
                                    </h2>
                                    <p className={`${Fonts.bodyFont}`}>
                                        This 2--day conflict resolution training programme will teach and train others how to more confidently deal with workplace conflict situations. Participants will discover how conflict situations can be turned around into opportunities, they will explore and practice a conflict resolution process to more successfully handle workplace conflict.  This training arms participants to:
                                    </p>
                                    <br />
                                    <ul className={`
                                    ${Fonts.bodyFont}
                                    list-disc 
                                    xsm:ml-2 xsm:space-y-1 
                                    md:ml-4 md:space-y-2 
                                    `}>
                                        <li>Learn, Practice and follow a process of resolving conflict;</li>
                                        <li>Become more confident in handling interpersonal and common workplace conflict;</li>
                                        <li>Become aware of the different styles of resolving conflict;</li>
                                        <li>Follow step-by-step process of successfully mediating conflict between two parties.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider >
            </div >
        );
    }
}