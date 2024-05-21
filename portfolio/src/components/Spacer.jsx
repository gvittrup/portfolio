import React from 'react';

const Spacer = ({ image }) => {
    return (
        <div className='aspect-[16/5] w-full bg-no-repeat bg-center bg-cover'>
            <img src={image} alt='spacer' className='aspect-[16/5] w-full bg-no-repeat bg-center bg-cover'/>
        </div>
    )
}

export default Spacer;