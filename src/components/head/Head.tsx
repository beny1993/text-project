import React, { FC } from "react";

interface HeadProps {
  title: string;
  onAddHandler?: () => void;
}

const Head: FC<HeadProps> = (props) => {
  const { title, onAddHandler } = props;
  return (
    <div className="flex w-full bg-white h-16 absolute top-0 items-center flex-row-reverse mb-16">
      <p className="flex-1 mx-10 text-right ">{title}</p>
      <button
        className="border w-28 h-10 bg-green-500 text-white rounded-md flex flex-row-reverse justify-center items-center"
        onClick={onAddHandler}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 0C5.37496 0 5.67927 0.30452 5.67927 0.679732V4.31954L9.32073 4.31972C9.69569 4.31972 10 4.62424 10 4.99946C10 5.37467 9.69569 5.67919 9.32073 5.67919L5.67927 5.67901V9.32027C5.67927 9.69548 5.37496 10 5 10C4.62504 10 4.32073 9.69548 4.32073 9.32027V5.67901L0.679271 5.67919C0.303407 5.67919 0 5.37467 0 4.99946C0 4.62424 0.303407 4.31972 0.679271 4.31972L4.32073 4.31954V0.679732C4.32073 0.30452 4.62504 0 5 0Z"
            fill="white"
          />
        </svg>
        <div className="px-3">سوال جدید</div>
      </button>
      <div className="mx-5 flex items-center">
        name
        <div className="mx-5 flex rounded-full border h-12 w-12 items-center justify-center">
          image
        </div>
      </div>
    </div>
  );
};

export default Head;
