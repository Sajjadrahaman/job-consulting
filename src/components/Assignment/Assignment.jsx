import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Assignment = () => {
    const assignmentData = [
        {
            id: 1,
            mark: 48,
            assignment_number: "A1",
            number: 0,
        },
        {
            id: 2,
            mark: 50,
            assignment_number: "A2",
            number: 5,
        },
        {
            id: 3,
            mark: 50,
            assignment_number: "A3",
            number: 10,
        },
        {
            id: 4,
            mark: 59,
            assignment_number: "A4",
            number: 20,
        },
        {
            id: 5,
            mark: 60,
            assignment_number: "A5",
            number: 30,
        },
        {
            id: 6,
            mark: 55,
            assignment_number: "A6",
            number: 40,
        },
        {
            id: 7,
            mark: 60,
            assignment_number: "A7",
            number: 50,
        },
        {
            id: 8,
            mark: 60,
            assignment_number: "A8",
            number: 60,
        }
    ];

    return (
        <div >
            <div className='items-center flex h-40 justify-center bg-indigo-50 rounded-md'>
                <h2 className='text-3xl font-bold text-black'>Assignment Mark</h2>
            </div>
            <div className='mx-auto w-6/12'>
                <div className='my-20 border-[#5b71ff85]'>
                    <AreaChart
                        width={700}
                        height={350}
                        data={assignmentData}
                    >
                        <CartesianGrid strokeDasharray="2 2" stroke="#5b71ff85" />
                        <XAxis dataKey="assignment_number" />
                        <YAxis dataKey="number" type="monotone" />
                        <Tooltip />
                        <Area type="monotone" dataKey="mark" stroke="#7E90FE" fill="#7e8ffe50" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Assignment;