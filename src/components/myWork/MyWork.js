import React from 'react'
import "./MyWork.css"
import { myWorkData } from '../../helpers/myWorkData'
import arror_icon from "../../../src/assests/images/right-arrow.png"

const MyWork = () => {
    return (
        <div id='portfolio' className='mywork'>
            <div className='mywork-title'>
                <h1>My latest work</h1>
                <img src='' alt='' />
            </div>
            <div className='mywork-container'>
                {
                    myWorkData?.map((work, index) => {
                        return (
                            <img src={work.w_img} key={index} alt="" />
                        )
                    })
                }
            </div>
            <div className='mywork-showmore'>
                <p>Show More</p>
                <img src={arror_icon} style={{width:"40px", color:"#FFFFFF"}}/>
            </div>
        </div>
    )
}

export default MyWork