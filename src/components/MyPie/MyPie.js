import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const MyPie = () => {
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
        <div className='ms-5'>
            <h4 className='mb-5'>Investment VS Revenue</h4>
            <PieChart width={400} height={300}>
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} fill="#82ca9d" label></Pie>

                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default MyPie;