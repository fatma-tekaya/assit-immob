import React from 'react'
import image from '../../assets/imgcontact.jpg'
import './contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
const Contact = () => {
    return (
        <>
            <section className="c-wrapper" id="c-section">
                <div className="c-container paddings innerWidth flexCenter">
                    <div className="c-left flexColStart">
                        <span className='primaryText'>Our Contact</span>
                        <span className='orangeText'>Easy to contact us</span>
                        <span className='secondaryText'>We always ready to help by providing the best services for you.
                            We beleive a good place to live can make your life better
                        </span>
                        <div className="contactModes flexColStart">
                            {/* first row*/}
                            <div className="row flexStart">
                                <div className="mode flexColCenter">
                                    <div className="flexStart">
                                        <div className="icon flexCenter">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="detail flexColStart">
                                            <span className="primaryText">Call</span>
                                            <span>+216 55 555 555</span>
                                        </div>
                                    </div>
                                    <div className="button flexCenter">
                                        Call Now
                                    </div>
                                </div>
                                <div className="mode flexColCenter">
                                    <div className="flexStart">
                                        <div className="icon flexCenter">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="detail flexColStart">
                                            <span className="primaryText">Chat</span>
                                            <span>+216 55 555 555</span>
                                        </div>
                                    </div>
                                    <div className="button flexCenter">
                                        New Chat
                                    </div>
                                </div>

                            </div>
                            {/* second row*/}
                            <div className="row flexStart">
                                <div className="mode flexColCenter">
                                    <div className="flexStart">
                                        <div className="icon flexCenter">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="detail flexColStart">
                                            <span className="primaryText">Vedio Call</span>
                                            <span>+216 55 555 555</span>
                                        </div>
                                    </div>
                                    <div className="button flexCenter">
                                        Call Now
                                    </div>
                                </div>
                                <div className="mode flexColCenter">
                                    <div className="flexStart">
                                        <div className="icon flexCenter">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="detail flexColStart">
                                            <span className="primaryText">Message</span>
                                            <span>+216 55 555 555</span>
                                        </div>
                                    </div>
                                    <div className="button flexCenter">
                                        Message Now
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <div className="image-container">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact