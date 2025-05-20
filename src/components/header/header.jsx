import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";


const Header = () => {

    return (
        <header className="z-20 border-b border-[#3d444d] bg-[#02040a]">
            <div className="container mx-auto">
                <nav className='flex items-center justify-between gap-[20px] h-[60px] sm:h-[65px] lg:h-[80px]'>
                    <div className='flex items-center gap-[5px]'>
                        <GiShoppingBag className='text-[29px] text-white' />
                        <p className='text-[24px] md:text-[29px] leading-[100%] text-white'>Storé</p>
                    </div>
                    <div className='flex items-center gap-[20px]'>
                        <div className="w-[340px] hidden md:block">
                            <form className='h-[38px] flex items-center gap-[12px] px-[12px] border border-[#3d444d] rounded-[6px]'>
                                <CiSearch className='text-[#9198a1] size-[24px]' />
                                <input className='w-full h-full outline-none text-white placeholder:text-[#9198a1] text-[14px]' type="text" placeholder='Type to search' />
                                <button></button>
                            </form>
                        </div>
                        <div className="flex items-center gap-[6px]">
                            <button className="hidden sm:flex cursor-pointer border border-[#3d444d] size-[30px] sm:size-[38px] items-center justify-center rounded-[6px]">
                                <CiHeart className="text-[#9198a1] sm:size-[24px]" />
                            </button>
                            <button className="hidden sm:flex cursor-pointer border border-[#3d444d] size-[30px] sm:size-[38px] items-center justify-center rounded-[6px]">
                                <CiShoppingCart className="text-[#9198a1] sm:size-[24px]" />
                            </button>
                            <button className="hidden sm:flex cursor-pointer border border-[#3d444d] size-[30px] sm:size-[38px] items-center justify-center rounded-[6px]">
                                <CiUser className="text-[#9198a1] sm:size-[24px]" />
                            </button>
                            <button className="cursor-pointer border border-[#3d444d] size-[30px] sm:size-[38px] flex items-center justify-center rounded-[6px]">
                                <AiOutlineMenu className="text-[#9198a1] sm:size-[24px]" />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default React.memo(Header);