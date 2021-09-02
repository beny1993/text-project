import React, { FC } from 'react'

interface HeadProps {
    title: string;
    onAddHandler?: () => void
}

const Head: FC<HeadProps> = (props) => {
    const { title,onAddHandler } = props
    return (
        <div className="flex w-full bg-white h-16 absolute top-0 items-center flex-row-reverse">
            <p className="flex-1 mx-10 text-right ">{title}</p> 
            <button className="border w-28 bg-green-500 text-white rounded-md" onClick={onAddHandler}>سوال جدید</button>
            <div className="mx-5 flex items-center">
                name
                <div className="mx-5 flex rounded-full border h-12 w-12 items-center justify-center">image</div>
            </div>
        </div>
    )
}

export default Head