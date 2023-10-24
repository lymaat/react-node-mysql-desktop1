import React from 'react'
import {Carousel} from "antd"
import "./CarouselHome.css"
import mac1 from "../../assets/product/mac1.png"
import mac2 from "../../assets/product/mac2.png"
import bleuedp from "../../assets/product/bleuedp.png"
import diorsauvage from "../../assets/product/diorsauvageedt.png"
import versaceedp from "../../assets/product/versaceedp.png"



function CarouselHome() {
    const dataSlid = [
        {
            title : "DIOR SAUVAGE EDT",
            sub_title : "100ml",
            image : diorsauvage,
            bg_color:  "pink"
        },
        {
            title : "VERSACE EROS EDP",
            sub_title : "100ml",
            image : versaceedp,
            bg_color:  "gray"
        },
        {
            title : "BLUE DE CHANEL EDP",
            sub_title : "150ml ",
            image : bleuedp,
            bg_color:  "red"
        }
    ]
    return (
        <Carousel autoplay>
            {dataSlid.map((item,index)=>{
                 return (
                    <div key={index} className='itemSlid'>
                        <img 
                            src={item.image}
                            width={150}
                        />
                        <h1>{item.title}</h1>
                        <div>{item.sub_title}</div>

                    </div> 
                ) 
            })}
        </Carousel>
    )
}

export default CarouselHome
