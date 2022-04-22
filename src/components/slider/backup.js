import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Fonts } from '../theme/fonts';
import { Containers } from './../theme/containers';
import { Styling } from './../theme/styling';
import { Spacing } from '../theme/spacing';
import { Images } from '../../assets/img';
import { Intro } from "../intro";
// import { Colors } from "../theme/colors";



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
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
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

        return (
            <div className={`${Styling.transitionStyle} ${Containers.mainContainer} ${Containers.mainCarouselContainer} bg-gray-200 rounded-lg shadow-2xl dark:shadow-none`}>
                {/* <h2> Single Item</h2> */}
                <Slider className="xsm:w-[50rem] xl:w-[60rem] 2xl:w-full" ref={c => (this.slider = c)} {...settings}>
                    {/* <Intro /> */}
                    <div key={2} className="flex items-center justify-center z-20">
                        <div className={`${Styling.transitionStyle} ${Containers.carouselSubContainer}`}>
                            <div className={`${Containers.imageContainer} ${Spacing.infoPadding}`}>
                                <img src={Images.conflictImg} alt="Conflict Resolution" className={`${Styling.imgStyle}`} />
                            </div>
                            <div className={`xsm:w-full lg:w-1/2 h-auto flex flex-col items-center ${Spacing.infoPadding}`}>
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
                    <div key={3} className="flex items-center justify-center z-20">
                        <div className={`${Styling.transitionStyle} ${Containers.carouselSubContainer}`}>
                            <div className={`${Containers.imageContainer} ${Spacing.infoPadding}`}>
                                <img src={Images.mediationImg} alt="Mediation Specialist" className={`${Styling.imgStyle}`} />
                            </div>
                            <div className={`xsm:w-full lg:w-1/2 h-auto flex flex-col items-center ${Spacing.infoPadding}`}>
                                <h2 className={`${Fonts.sectionTitleFont}`}>
                                    Mediation Specialist
                                </h2>
                                <p className={`${Fonts.bodyFont}`}>
                                    With vast experience and skill in mediation on family, commercial and community matters, any matter of disagreement referred is efficiently analysed and broken down into manageable issues to prevent and/or sort out the rising conflict.  Judiciary experience arms the mediator with a 60-day limit to bring conflict to resolution culminating in preserved relationships and allowing continuity of functions
                                </p>
                            </div>
                        </div>
                    </div>
                    <div key={4} className="relative z-20">
                        <div className={`${Styling.transitionStyle} ${Containers.carouselSubContainer}`}>
                            <div className={`${Containers.imageContainer} ${Spacing.infoPadding}`}>
                                <img src={Images.trainingImg} alt="Conflict Resolution Training" className={`${Styling.imgStyle}`} />
                            </div>
                            <div className={`xsm:w-full lg:w-1/2 h-auto flex flex-col items-center ${Spacing.infoPadding}`}>
                                <h2 className={`${Fonts.sectionTitleFont}`}>
                                    Conflict Resolution Training
                                </h2>
                                <p className={`${Fonts.bodyFont}`}>
                                    This 2--day conflict resolution training programme will teach and train others how to more confidently deal with workplace conflict situations. Participants will discover how conflict situations can be turned around into opportunities, they will explore and practice a conflict resolution process to more successfully handle workplace conflict.  This training arms participants to:
                                </p>
                                <br />
                                <ul className={`list-disc ml-4 space-y-2 ${Fonts.bodyFont}`}>
                                    <li>Learn, Practice and follow a process of resolving conflict;</li>
                                    <li>Become more confident in handling interpersonal and common workplace conflict;</li>
                                    <li>Become aware of the different styles of resolving conflict;</li>
                                    <li>Follow step-by-step process of successfully mediating conflict between two parties.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Slider >

                {/* <slickNext>
                    <button className={`${Containers.buttonContainer}`}></button>
                </slickNext> */}

            </div >
        );
    }
}