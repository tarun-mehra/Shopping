import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import 'react-responsive-pagination/themes/classic.css';
import ResponsivePagination from 'react-responsive-pagination';
import { myContext } from './MainContext';
import { FaIndianRupeeSign } from "react-icons/fa6";



export default function Product() {

    let [category, setCategory] = useState([])

    let {count,setCount,cart,setCart} = useContext(myContext)

    let getCategory = () => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((res) => res.data)
            .then((finalRes) => {
                setCategory(finalRes.data)
            })
    }

    let [brand, setBrand] = useState([])

    let getBrand = () => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((res) => res.data)
            .then((finalRes) => {
                setBrand(finalRes.data)
            })
    }



    let [product, setProduct] = useState([])

    let [sort, setSort] = useState(null)

    let [categoryFilter, setCategoryFilter] = useState([])

    let [brandFilter, setBrandFilter] = useState([])

    let [price, setPrice] = useState([null, null])

    let [rating, setRating] = useState(null)

    let [discount, setDiscount] = useState([null, null])

    let [loaderStatus, setLoaderStatus] = useState(false)

    let [currentPage, setCurrentPage] = useState(1)

    let [totalPage, setTotalPage] = useState(0)



    let getProduct = () => {
        setLoaderStatus(true)

        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                page: currentPage,
                limit: '',
                sorting: sort,
                name: '',
                price_from: price[0],
                price_to: price[1],
                discount_from: discount[0],
                discount_to: discount[1],
                rating: rating,
                brands: brandFilter.toString(),
                categories: categoryFilter.toString()
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                setProduct(finalRes.data)
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                })
                setLoaderStatus(false)
                setTotalPage(finalRes.total_pages)
            })
    }


    useEffect(() => {
        getProduct()
    }, [sort, categoryFilter, brandFilter, price, rating, discount, currentPage])



    useEffect(() => {
        getCategory()
        getBrand()
    }, [])


    let getcheckCategory = (e) => {
        if (e.target.checked) {
            setCategoryFilter([...categoryFilter, e.target.value])
        }
        else {
            let finalAns = categoryFilter.filter((value) => value != e.target.value)
            setCategoryFilter(finalAns)
        }

    }

    let getCheckBrand = (e) => {
        if (e.target.checked) {
            setBrandFilter([...brandFilter, e.target.value])
        }
        else {
            let finalAns = brandFilter.filter((value) => value != e.target.value)
            setBrandFilter(finalAns)
        }
    }

    let clearAllFilter = () => {
        setBrandFilter([])
        setCategoryFilter([])
        setPrice([null, null])
        setDiscount([null, null])
        setRating(null)
        setSort(null)
    }


    return (
        <>
            <div>
                <div className='grid lg:grid-cols-[20%_20%] mt-[30px] items-center justify-between'>
                    <div className='flex px-[35px] justify-between'>
                        <p className='font-semibold text-[14px] lg:block hidden'>FILTER</p>
                        <p className='text-gray-500 hidden lg:block font-semibold cursor-pointer uppercase hover:text-gray-900' onClick={clearAllFilter}>Clear All</p>
                    </div>
                    <div>
                        <select onChange={(e) => setSort(e.target.value)} name="" id="" className='bg-white border-[2px] border-black py-[5px] rounded-2xl px-[15px] ml-[10px]'>
                            <option value="0">Sort by : Recommended</option>
                            <option value="1">Name : A to Z</option>
                            <option value="2">Name : Z to A</option>
                            <option value="3">Price : Low to High</option>
                            <option value="4">Price : High to Low</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className='grid lg:grid-cols-[20%_auto] p-[15px]'>
                        <div className='p-[15px] lg:block hidden '>
                            <div className='rounded-xl h-[250px] overflow-y-scroll mb-[20px] bg-green-50'>
                                <h1 className='text-center rounded-t-xl py-[5px] font-semibold text-[18px] sticky top-0 text-white bg-gray-500'>Categories</h1>
                                <ul className='px-[20px] py-[10px]'>
                                    {category.map((item) => <li><input className='mr-[5px]' onChange={getcheckCategory} value={item.slug} type="checkbox" />{item.name}</li>)}
                                </ul>
                            </div>
                            <div className='shadow-5xl bg-green-50 rounded-xl h-[250px] overflow-y-scroll mb-[20px]'>
                                <h1 className='text-center rounded-t-xl py-[5px] font-semibold text-[18px] sticky top-0 text-white bg-gray-500'>Brand</h1>
                                <ul className='px-[20px] py-[10px]'>
                                    {brand.map((item) => <li><input className='mr-[5px]' onChange={getCheckBrand} value={item.slug} type="checkbox" />{item.name}</li>)}
                                </ul>
                            </div>
                            <div className='shadow-5xl bg-green-50 rounded-xl h-[200px] overflow-y-scroll'>
                                <h1 className='text-center rounded-t-xl py-[5px] font-semibold text-[18px] sticky top-0 text-white bg-gray-500'>Price</h1>
                                <ul className='px-[20px] py-[10px]'>
                                    <li><input className='mr-[5px]' type="radio" name='price' onChange={() => setPrice([10, 250])} />Rs. 10 to Rs. 250</li>
                                    <li><input className='mr-[5px]' type="radio" name='price' onChange={() => setPrice([250, 500])} />Rs. 250 to Rs. 500</li>
                                    <li><input className='mr-[5px]' type="radio" name='price' onChange={() => setPrice([500, 1000])} />Rs. 500 to Rs. 1000</li>
                                    <li><input className='mr-[5px]' type="radio" name='price' onChange={() => setPrice([1000, 2500000])} />Rs. 1000 or above</li>
                                </ul>
                            </div>
                            <div className='shadow-5xl bg-green-50 rounded-xl h-[200px] overflow-y-scroll'>
                                <h1 className='text-center rounded-t-xl py-[5px] font-semibold text-[18px] sticky top-0 text-white bg-gray-500'>Discount Range</h1>
                                <ul className='px-[20px] py-[10px]'>
                                    <li><input className='mr-[5px]' type="radio" name='dis' onChange={() => setDiscount([5, 9])} />5% and above</li>
                                    <li><input className='mr-[5px]' type="radio" name='dis' onChange={() => setDiscount([10, 14])} />10% and above</li>
                                    <li><input className='mr-[5px]' type="radio" name='dis' onChange={() => setDiscount([15, 19])} />15% and above</li>
                                    <li><input className='mr-[5px]' type="radio" name='dis' onChange={() => setDiscount([20, 100])} />20% and above</li>
                                </ul>
                            </div>
                            <div className='shadow-5xl bg-green-50 rounded-xl h-[200px] overflow-y-scroll'>
                                <h1 className='text-center rounded-t-xl py-[5px] font-semibold text-[18px] sticky top-0 text-white bg-gray-500'>Rating</h1>
                                <ul className='px-[20px] py-[10px]'>
                                    <li><input className='mr-[5px]' type="radio" name='rating' onChange={() => setRating(4)} />4 and above</li>
                                    <li><input className='mr-[5px]' type="radio" name='rating' onChange={() => setRating(3)} />3 and above</li>
                                    <li><input className='mr-[5px]' type="radio" name='rating' onChange={() => setRating(2)} />2 and above</li>
                                    <li><input className='mr-[5px]' type="radio" name='rating' onChange={() => setRating(1)} />1 and above</li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-[20px] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]'>

                            {loaderStatus ?
                                <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-[300px] gap-[700px] mt-[100px]'>
                                    <Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader /><Loader />
                                </div>
                                :
                                product.map((item) => <ProductDetails ProductData={item} />)
                            }
                        </div>
                    </div>
                </div>
                <div className='py-[20px] mt-[30px] w-[100%] bg-gray-500'>
                    <ResponsivePagination
                        current={currentPage}
                        total={totalPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </>
    )
}




function ProductDetails({ ProductData }) {
    let {cart,setCart} = useContext(myContext)

    let { image, name, price, description,id} = ProductData

    let addToCart = () => {
        let cartObj = {
            image,
            name,
            price,
            quantity: 1,
            id
        }

        setCart([...cart,cartObj])
    }

    return (
        <div className='shadow-lg relative rounded-[10px] cursor-pointer h-[530px]'>
            <img src={image} className='rounded-t-xl h-[250px] w-[100%]' alt="" />
            <div className='p-[15px]'>
                <h1 className='text-[18px] h-[50px] font-semibold'>{name}</h1>
                <p className='text-[14px] mt-[10px] lg:leading-5 md:leading-8 leading-6 h-[100px]'>{description}</p>
                <p className='text-gray-800 flex items-center mt-[15px] h-[20px] font-semibold'><FaIndianRupeeSign/> {Number({ price }) <= 9 ? price + ".00" : price}</p>
                <button onClick={addToCart} className='bg-gray-500 hover:bg-gray-800 cursor-pointer p-[5px] rounded-xl px-[15px] top-[90%] absolute text-white'>Add to Cart</button>
            </div>
        </div>
    )
}

function Loader() {
    return (
        <div className="animate-pulse flex flex-col items-center gap-4 w-60">
            <div className="flex justify-center items-center">
                <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
                <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
                <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
            </div>
        </div>
    )
}