import React from 'react';
import './Details.css';
import categoryIcon from '../../assets/images/categories.svg';


const Details = (props) => {

    const { categories, businessModels, trl, investmentEffort } = props.details;

    return (
        <div className="bg-white shadow-xl my-5 p-10">
            <h6 className='text-gray-800 font-md'>Offer Details</h6>
            <div className='grid grid-cols-2 '>
                <div className='mb-3'>
                    <div className="flex">
                        <img
                            className="w-7 mr-3"
                            src={categoryIcon}
                            alt="Your Company"
                        />
                        <p className='text-gray-500 my-3'>Technologies</p>
                    </div>
                    <div className='flex ms-10'>
                        {categories.map(item => <p key={item.id} className='bg-gray-200 mr-3 rounded-2xl text-gray-700 text-sm px-3 py-1 '>{item.name}</p>)}
                    </div>
                </div>
                <div className='mb-3'>
                    <div className="flex">
                        <img
                            className="w-7 mr-3"
                            src={categoryIcon}
                            alt="Your Company"
                        />
                        <p className='text-gray-500 my-3'>Business Models</p>
                    </div>
                    <div className='flex ms-10'>
                        {businessModels.map(item => <p key={item.id} className='bg-gray-200 mr-3 rounded-2xl text-gray-700 text-sm px-3 py-1 '>{item.name}</p>)}
                    </div>
                </div>
                <div className='mb-3'>
                    <div className="flex">
                        <img
                            className="w-7 mr-3"
                            src={categoryIcon}
                            alt="Your Company"
                        />
                        <p className='text-gray-500 my-3'>TRL</p>
                    </div>
                    <div className='flex ms-10'>
                        <p className='bg-gray-200 mr-3 rounded-2xl text-gray-700 text-sm px-3 py-1 '>{trl.name}</p>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className="flex">
                        <img
                            className="w-7 mr-3"
                            src={categoryIcon}
                            alt="Your Company"
                        />
                        <p className='text-gray-500 my-3'>Costs</p>
                    </div>
                    <div className='flex ms-10'>
                        <p className='bg-gray-200 mr-3 rounded-2xl text-gray-700 text-sm px-3 py-1 '>{investmentEffort}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;