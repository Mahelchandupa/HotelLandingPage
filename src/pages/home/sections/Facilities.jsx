import React from 'react'
import MainHeading from '../../../components/MainHeading'
import SubHeading from '../../../components/SubHeading'
import FacilitiesGrid from '../components/FacilitiesGrid'

const Facilities = () => {
    return (
        <div className=' mt-[63px] px-[120px]'>
            <div>
                <MainHeading txtColor="black">Our Facilities</MainHeading>
                <SubHeading txtColor="black">We offer modern (5 star) hotel facilities for your comfort.</SubHeading>
            </div>
            <FacilitiesGrid />
        </div>
    )
}

export default Facilities