import React from 'react'
import image from '../../assets/imgvalue.jpg'
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState}
from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from 'C:/Users/jok02/Desktop/pfa/immovff/src/value.jsx'
import './value.css'
export const Value = () => {
  return (
    <>
        <section className="v-wrapper" id="v-section">
            <div className="v-container paddings innerWidth flexCenter">
                <div className="v-left">
                    <div className="image-container">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="v-right flexColStart">
                    <span className='primaryText'>Our Value</span><span className='primaryText'>Value We Give To You</span>
                    <span className='desc'>We always ready to help by providing the best services for you.
                    <br/>
                    We beleive a good place to live can make your life better
                    </span>
                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item,i)=>{
                                return(
                                    <AccordionItem className="accordionItem" key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="accordionbutton flexCenter">
                                                <div className="icon flexCenter">{item.icon}</div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className='secondaryText accordionpanel'>{item.details}</AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>

                </div>
            </div>
        </section>
        </>
  )
}
