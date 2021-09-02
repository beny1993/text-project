import React from 'react'
import Box from '../components/box/Box'
import Head from '../components/head/Head'

export default function MainList() {
    return (
        <>
        <Head title="لیست سوالات"/>
        <div className="flex justify-center items-center w-full h-full">
            <Box title="سوال اول" date="1400/6/11" time="14:00" number={20} content="متن اول" onDetails={() => console.log("next")
            }/>
        </div>
        </>
    )
}
