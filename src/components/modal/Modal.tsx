import axios from "axios";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

interface ModalProps{
    setModal: (i:boolean) => void
}

const Modal: FC<ModalProps> = (props) => {
    const {setModal} = props;
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data: any) => {
      await axios.post("http://localhost:3000/posts",data,{
       headers: {
         'Content-Type': "application/json"
       }
      }).then(res => setModal(false))
    };

  return (
    <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 flex justify-center items-center">
      <div className="w-1/2 h-96 bg-gray-100 rounded-md flex rtl-grid flex-col relative">
        <div className="w-full bg-white h-12 rounded-md mb-4 flex items-center pr-2">
          <div className="absolute left-2 cursor-pointer" onClick={() => setModal(false)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 15L5 5"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>{" "}
          ایجاد سوال جدید
        </div>
        <form className="flex flex-col mx-5  h-64">
          <div className=" w-full mb-7 ">
            <div>موضوع</div>
            <input {...register("title")} className="w-full mt-3 rounded-md h-11" />
          </div>
          <div>متن سوال</div>
          <textarea  {...register("content")} className="h-40 rounded-md mt-3" />
        </form>
        <div className="flex absolute left-0 bottom-0">
          <button className="w-24 h-9  text-green-400 rounded-md m-2" onClick={() => setModal(false)}>
            انصراف
          </button>
          <button className="w-24 h-9 bg-green-500 text-white rounded-md m-2" onClick={handleSubmit(onSubmit)}>
            ایجاد سوال
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
