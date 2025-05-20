import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoryLoading from '../category-loading/Category-Loading';

const Category = () => {
    const [categoryListData, setCategoryListData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get("https://dummyjson.com/products/category-list?limit=10")
            .then((response) => {
                const data = response.data.slice(0, 20);
                setCategoryListData(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
    }, []);
    return (
        <section className='section_categories text-[#fff]'>

            <div className='container mx-auto flex items-center h-[70px]'>
                {
                    loading && <CategoryLoading />
                }
                <ul className='flex items-center gap-[3px] md:gap-[6px] overflow-auto py-[20px]'>
                    {
                        categoryListData?.map((category, index) => (
                            <li key={index}><span className='cursor-pointer block text-nowrap capitalize text-[11px] md:text-[14px] font-medium hover:border-transparent duration-200 ease-out hover:bg-[#202830] bg-transparent px-[12px] py-[4px] md:px-[16px] md:py-[5px] text-[#f0f6fc] border border-[#3d444d] rounded-[6px]'>{category}</span></li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default React.memo(Category);
