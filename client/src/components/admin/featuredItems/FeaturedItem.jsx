import React from 'react'
import "./featuredItems.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { formatCurrency } from "../../../utilities/formatCurrency"
function FeaturedItem() {
    return (
        <div className='featured-container'>
            <div className='featured-item'>
                <p className='featured-title'>Revenue</p>
                <div className='featured-money-container'>
                    <span className='featured-money'>{formatCurrency(11000000)}</span>
                    <span className='featured-money-rate'>+3.4 <ArrowUpwardIcon className='arrow-icons' /></span>
                </div>
                <p className='featured-sub'>Compared to last month</p>
            </div>
            <div className='featured-item'>
                <p className='featured-title'>Sales</p>
                <div className='featured-money-container'>
                    <span className='featured-money'>{formatCurrency(11000000)}</span>
                    <span className='featured-money-rate'>-12.4 <ArrowDownwardIcon className='arrow-icons' /></span>
                </div>
                <p className='featured-sub'>Compared to last month</p>
            </div>
            <div className='featured-item'>
                <p className='featured-title'>Cost</p>
                <div className='featured-money-container'>
                    <span className='featured-money'>{formatCurrency(11000000)}</span>
                    <span className='featured-money-rate'>+2.6 <ArrowUpwardIcon className='arrow-icons' /></span>
                </div>
                <p className='featured-sub'>Compared to last month</p>
            </div>
        </div>
    )
}

export default FeaturedItem