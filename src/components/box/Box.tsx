import React, { FC } from "react";

interface BoxProps {
  number: number;
  date: string;
  time: string;
  title: string;
  content: string
  onDetails: () => void
}

const Box: FC<BoxProps> = (props) => {
  const { number, date, time, title, content, onDetails } = props;
  return (
    <div className=" w-full h-40 mx-20 flex flex-col relative rounded-md bg-gray-100 my-10 ">
      <div className="bg-white w-full flex flex-row h-12 items-center rounded-md">
        <div className="flex flex-row justify-center items-center absolute right-0">
          <div className="mx-5">{title}</div>
          <div className="mx-5 flex rounded-xl h-9 w-9 items-center justify-center">
            <img src="/Rectangle.png" alt="user" className="w-full"/>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center absolute left-0">
          <div className="mx-5 flex items-center justify-center text-gray-400 flex-row-reverse">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.75 3C6.02208 3 3 6.02208 3 9.75C3 10.4379 3.14554 11.1468 3.35732 11.8091L3.36068 11.8196C3.57868 12.5014 3.74647 13.0261 3.86295 13.4222C3.97485 13.8028 4.05981 14.1293 4.08134 14.3849C4.10678 14.6867 4.12001 14.9487 4.08147 15.2236C4.04294 15.4985 3.9582 15.7467 3.85076 16.0299C3.79524 16.1763 3.71923 16.3302 3.6228 16.5H9.75C13.4779 16.5 16.5 13.4779 16.5 9.75C16.5 6.02208 13.4779 3 9.75 3ZM1.63165 16.8254C1.54861 16.9462 1.5 17.0924 1.5 17.25C1.5 17.6642 1.83579 18 2.25 18H9.75C14.3063 18 18 14.3063 18 9.75C18 5.19365 14.3063 1.5 9.75 1.5C5.19365 1.5 1.5 5.19365 1.5 9.75C1.5 10.6394 1.6862 11.5079 1.92858 12.2659C2.15063 12.9604 2.31298 13.4683 2.42388 13.8454C2.53994 14.2401 2.57966 14.4281 2.58664 14.5109C2.61071 14.7964 2.60979 14.9169 2.59599 15.0154C2.58219 15.1138 2.54994 15.2299 2.44829 15.4979C2.3664 15.7137 2.17416 16.0116 1.63165 16.8254Z"
                fill="#9CAEBB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.66663 8.08334C5.66663 7.66913 6.00241 7.33334 6.41663 7.33334H13.0833C13.4975 7.33334 13.8333 7.66913 13.8333 8.08334C13.8333 8.49756 13.4975 8.83334 13.0833 8.83334H6.41663C6.00241 8.83334 5.66663 8.49756 5.66663 8.08334Z"
                fill="#9CAEBB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.66663 11.4167C5.66663 11.0024 6.00241 10.6667 6.41663 10.6667H9.74996C10.1642 10.6667 10.5 11.0024 10.5 11.4167C10.5 11.8309 10.1642 12.1667 9.74996 12.1667H6.41663C6.00241 12.1667 5.66663 11.8309 5.66663 11.4167Z"
                fill="#9CAEBB"
              />
            </svg>
            <div className="text-gray-900 pr-1">{number}</div>
          </div>
          <div className="mx-5 flex items-center justify-center rtl-grid text-gray-400">
            تاریخ :    <div className="text-gray-900 pr-1">{date}</div>
          </div>
          <div className="mx-5 border-l border-gray-300 pl-3 rtl-grid text-gray-400 flex flex-row ">
            ساعت : <div className="text-gray-900 pr-1">{time}</div>
          </div>
        </div>
      </div>
      <div className="w-ful h-32 rtl-grid p-5 bg-gray-100 rounded-md">{content}</div>
      <button className="absolute bottom-1 left-3 border rounded-md border-green-500 w-40 h-10 px-10 text-green-500 text-center text-sm flex items-center" onClick={onDetails}>مشاهده جزیات</button>
    </div>
  );
};

export default Box;
