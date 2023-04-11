import React from 'react';

import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Footer from '../Footer/Footer';



const Statistics = () => {
    const data = [
        { assignmentname: 'New year mission', marks: 60, id: 1 },
        { assignmentname: 'G3-architects-website', marks: 58, id: 2 },
        { assignmentname: 'Landing page ', marks: 60, id: 3 },
        { assignmentname: 'Basic Javascript', marks: 60, id: 4 },
        { assignmentname: 'Geometry Genius', marks: 60, id: 5 },
        { assignmentname: 'AI Universe', marks: 60, id: 6 },
        { assignmentname: 'Quiz Hero', marks: 60, id: 7 },

    ];
    return (
        <div>
            <div className=' bg-slate-100 mb-14 '>
                <h1 className='text-2xl lg:text-5xl text-center font-semibold pt-10 '>Statistics</h1>
                <p className='text-center pt-1 lg:pt-3 pb-14'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 mb-10'>
                <h1 className='text-2xl lg:text-3xl text-center font-semibold pb-6  '> ScatterChart for 7 Assignment Marks</h1>
                <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="id" name="Assignment id" unit="" />
                        <YAxis type="number" dataKey="marks" name="Marks" unit="marks" />
                        <ZAxis type="number" dataKey="assignmentname" name="Assignment Name" unit="" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="A school" data={data} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Statistics;