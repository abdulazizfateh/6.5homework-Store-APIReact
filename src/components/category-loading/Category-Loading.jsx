import React from 'react'

const CategoryLoading = () => {
    const categoryListLoading = Array(20).fill("");
    return (
        <ul className='flex items-center gap-[3px] md:gap-[6px] overflow-auto py-[20px]'>
            {
                categoryListLoading?.map((_, index) => (
                    <li key={index}><span className='w-[70px] h-[26.5px] md:w-[108.21px] md:h-[33px] cursor-pointer block border border-[#3d444d] rounded-[6px]'></span></li>
                ))
            }
        </ul>
    )
}

export default React.memo(CategoryLoading);