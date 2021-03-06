import React from 'react';
import PropTypes from 'prop-types';
import './MainHome.css';
import ProjectContainer from './ProjectContainer';
import CustomButton from './CustomButton';
import { Messages } from '../Messages';
import { openLink } from '../Helpers';

export default class MainHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currMessage: Messages.DEEPLOCAL,
            currentlyAtHover: true,
            previouslyAtHover: false,
            developedHover: false,
            miscHover: false,
            projectClicked: false,
        };
        this.changeHoverMessage = this.changeHoverMessage.bind(this);
        this.animateThenGoTo = this.animateThenGoTo.bind(this);
    }

    animateThenGoTo(link) {
        this.setState({ projectClicked: true });
        setTimeout(() => {
            this.props.history.push(link);
        }, 800);
    }

    changeHoverMessage(msg) {
        this.setState({ currMessage: msg });
    }

    render() {
        if (!this.props.imageColorFilter || !this.props.imageColorHoverFilter) {
            return <div></div>;
        }
        return (
            <div className={`main-home-container ${this.state.projectClicked && 'leave-home-animation'}`}>
                <div className="section-container profile-container">
                    <p className="container-header">ANDRES FERNANDO KIM</p>
                    <div className="default-border default-border-color profile-image-container">
                        <img
                            className="profile-image"
                            src={'/assets/icons/andres-01.png'}
                            alt="Picture of Andres standing."
                            style={{ filter: this.props.imageColorHoverFilter }}
                        />
                    </div>
                </div>
                <div className="section-container work-container">
                    <p className={`container-header ${this.state.currentlyAtHover && 'default-sub-hovercolor'}`}>
                        CURRENTLY AT
                    </p>
                    <div
                        className={`default-border default-border-color work-current-container sub-container default-box-shadow 
                        ${this.state.currentlyAtHover && 'default-border-hovercolor'}`}
                    >
                        <ProjectContainer
                            img={'/assets/icons/deeplocal-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            hovered={this.state.currentlyAtHover}
                            defaultHovered={true}
                            description={'Software Engineer'}
                            header={'Deeplocal'}
                            onHeaderHover={() => {
                                this.changeHoverMessage(Messages.DEEPLOCAL);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                this.animateThenGoTo('/deeplocal');
                            }}
                        />
                    </div>
                    <p className={`container-header ${this.state.previouslyAtHover && 'default-sub-hovercolor'}`}>
                        PREVIOUSLY AT
                    </p>
                    <div
                        className={`default-border default-border-color work-previous-container sub-container default-box-shadow 
                        ${this.state.previouslyAtHover && 'default-border-hovercolor'}`}
                        onMouseLeave={() => {
                            this.setState({ previouslyAtHover: false, currentlyAtHover: true });
                            this.changeHoverMessage(Messages.DEEPLOCAL);
                        }}
                    >
                        <ProjectContainer
                            img={'/assets/icons/monaco-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'Software Engineer Artist'}
                            header={'Monaco'}
                            onHeaderHover={() => {
                                this.setState({ previouslyAtHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.MONACO);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                this.animateThenGoTo('/monaco');
                            }}
                        />
                        <ProjectContainer
                            img={'/assets/icons/taggle-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'Software Engineer Intern'}
                            header={'Taggle'}
                            onHeaderHover={() => {
                                this.setState({ previouslyAtHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.TAGGLE);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                this.animateThenGoTo('/taggle');
                            }}
                        />
                    </div>
                </div>
                <div className="section-container projects-container">
                    <p className={`container-header ${this.state.developedHover && 'default-sub-hovercolor'}`}>
                        DEVELOPED
                    </p>
                    <div
                        className={`default-border default-border-color projects-developed-container sub-container default-box-shadow 
                        ${this.state.developedHover && 'default-border-hovercolor'}`}
                        onMouseLeave={() => {
                            this.setState({ developedHover: false, currentlyAtHover: true });
                            this.changeHoverMessage(Messages.DEEPLOCAL);
                        }}
                    >
                        <ProjectContainer
                            img={'/assets/icons/capsule-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'React, Firebase'}
                            header={'Capsule'}
                            onHeaderHover={() => {
                                this.setState({ developedHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.CAPSULE);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                this.animateThenGoTo('/capsule');
                            }}
                        />
                        <ProjectContainer
                            img={'/assets/icons/atomicHabits-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'React Native'}
                            header={'Atomic Habits'}
                            onHeaderHover={() => {
                                this.setState({ developedHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.ATOMIC_HABITS);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                this.animateThenGoTo('/atomichabits');
                            }}
                        />
                        {/*
                        <ProjectContainer
                            img={'/assets/icons/nuhub-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'Adobe Illustrator, React Native'}
                            header={'NU HUB'}
                            onHeaderHover={() => {
                                this.setState({ developedHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.NUHUB);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                this.animateThenGoTo('/nuhub');
                            }}
                        />
                        */}
                        <ProjectContainer
                            img={'/assets/icons/dailyui-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'Adobe Illustrator'}
                            header={'Daily UI'}
                            onHeaderHover={() => {
                                this.setState({ developedHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.DAILYUI);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                this.animateThenGoTo('/dailyui');
                            }}
                        />
                    </div>
                </div>
                <div className="section-container misc-container">
                    <p className={`container-header ${this.state.miscHover && 'default-sub-hovercolor'}`}>MISC</p>
                    <div
                        className={`default-border default-border-color misc-projects-container sub-container default-box-shadow 
                        ${this.state.miscHover && 'default-border-hovercolor'}`}
                        onMouseLeave={() => {
                            this.setState({ miscHover: false, currentlyAtHover: true });
                            this.changeHoverMessage(Messages.DEEPLOCAL);
                        }}
                    >
                        <ProjectContainer
                            img={'/assets/icons/medium-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'medium.com'}
                            header={'Design Based on Transparency'}
                            onHeaderHover={() => {
                                this.setState({ miscHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.MEDIUM_TRANSPARENCY);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                openLink('https://medium.com/@fernandokim/design-based-on-transparency-9a64e6f49c41');
                            }}
                        />
                        <ProjectContainer
                            img={'/assets/icons/medium-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'medium.com'}
                            header={'Capsule: Article'}
                            onHeaderHover={() => {
                                this.setState({ miscHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.MEDIUM_CAPSULE);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                openLink('https://blog.prototypr.io/capsule-send-meaningful-messages-4126d53560d8');
                            }}
                        />
                        {/*
                        <ProjectContainer
                            img={'/assets/icons/d3-01.png'}
                            imgStyle={{ filter: this.props.imageColorFilter }}
                            imgHoverStyle={{ filter: this.props.imageColorHoverFilter }}
                            description={'d3.com'}
                            header={'PACKET LOSS VISUALIZATION'}
                            onHeaderHover={() => {
                                this.setState({ miscHover: true, currentlyAtHover: false });
                                this.changeHoverMessage(Messages.PACKET_LOSS);
                            }}
                            onHeaderLeave={() => {}}
                            onHeaderClick={() => {
                                openLink('https://packetlossvis.firebaseapp.com/');
                            }}
                        />
                        */}
                    </div>
                </div>
                <div className="section-container contact-container">
                    <div className="contact-sub-container default-border-color">
                        <CustomButton
                            className={'contact-button-left'}
                            text={'EMAIL'}
                            onClick={() => {
                                openLink('mailto:andresfernandokim@gmail.com');
                            }}
                            style={{ width: '45%' }}
                            onHover={() => {
                                this.changeHoverMessage(Messages.EMAIL);
                            }}
                        />
                        <CustomButton
                            className={'contact-button-right'}
                            text={'LINKEDIN'}
                            onClick={() => {
                                openLink('https://www.linkedin.com/in/andres-fernando-kim/');
                            }}
                            style={{ width: '45%' }}
                            onHover={() => {
                                this.changeHoverMessage(Messages.LINKEDIN);
                            }}
                        />
                        <div className="contact-button-middle" style={{ clear: 'both' }} />
                        <CustomButton
                            className={'contact-button-left'}
                            text={'GITHUB'}
                            onClick={() => {
                                openLink('https://github.com/afkim14');
                            }}
                            style={{ width: '45%' }}
                            onHover={() => {
                                this.changeHoverMessage(Messages.GITHUB);
                            }}
                        />
                        <CustomButton
                            className={'contact-button-right'}
                            text={'MEDIUM'}
                            onClick={() => {
                                openLink('https://medium.com/@fernandokim');
                            }}
                            style={{ width: '45%' }}
                            onHover={() => {
                                this.changeHoverMessage(Messages.MEDIUM);
                            }}
                        />
                    </div>
                </div>
                <div className="section-container msg-container">
                    <div className="default-border default-border-color msg-sub-container">
                        <p className="hover-message default-accent-color">{this.state.currMessage}</p>
                    </div>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}

MainHome.propTypes = {
    imageColorFilter: PropTypes.string,
    imageColorHoverFilter: PropTypes.string,
};
