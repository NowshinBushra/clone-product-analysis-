import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import MyPie from '../MyPie/MyPie';


const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 50000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 80000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 100000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 150000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 200000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 250000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='flex'>
            <div className='mt-20 mx-5'>
            <h4 className='mb-5'>Investment VS Revenue</h4>
            <LineChart width={400} height={300} data={data}>
                <Line dataKey="revenue"></Line>
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>
                <YAxis dataKey="investment"></YAxis>
            </LineChart>
            </div>
            <div className='mt-20 ms-5'>
            <MyPie></MyPie>
            </div>
        </div>



    );
};

export default Dashboard;