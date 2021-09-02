import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "../components/box/Box";
import Head from "../components/head/Head";
import { useForm } from "react-hook-form";

export default function DetailsPage() {
  const [data, setData] = useState<any>([]);
  const [change, setChange] = useState<any>();
  const { register, handleSubmit } = useForm();

  let { id } = useParams<any>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setData(res.data));
  }, [change, id]);

  const onLikeHandler = (i: number) => {
    const obj = data.comment.map((item: any) => {
      if (item.id === i) {
        return { ...item, like: item.like++ };
      }
    });

    axios
      .put(`http://localhost:3000/posts/${id}`, {
        ...data,
        obj,
      })
      .then((res) => setChange(res));
  };
  const onDislikeHandler = (i: number) => {
    const obj = data.comment.map((item: any) => {
      if (item.id === i) {
        return { ...item, dislike: item.dislike++ };
      }
    });
    axios
      .put(`http://localhost:3000/posts/${id}`, {
        ...data,
        obj,
      })
      .then((res) => setChange(res));
  };

  console.log(data);
  let d = data.comment;

  const onSubmit = async (commentContent: any) => {
      d.push(commentContent);  
        
    await axios
      .put(
        `http://localhost:3000/posts/${id}`,
        {
          ...data, comment: d,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => setChange(res));
  };

  return (
    <>
      <Head title="جزییات سوالات" />
      <div className="flex justify-center items-center w-full flex-col p-20 relative top-20 bg-gray-200 pb-10">
        <Box
          title={data.title}
          date={data.date}
          time={data.time}
          content={data.content}
          key={data.id}
          number={data?.comment?.length}
        />
        <div className="text-lg self-end">پاسخ ها</div>
        {data?.comment?.map((item: any) => {
          return (
            <Box
              title={item.name}
              date={data.date}
              time={data.time}
              like={item.like}
              dislike={item.dislike}
              content={item.commentContent}
              key={item.id++}
              details={true}
              onLike={() => onLikeHandler(item.id)}
              onDislike={() => onDislikeHandler(item.id)}
            />
          );
        })}
        <div className="text-xl w-full h-6 rtl-grid mb-4">
          پاسخ خود را ثبت کنید{" "}
        </div>
        <form className="w-full">
          <textarea
            className="w-full h-40 rtl-grid"
            {...register("commentContent")}
          />
        </form>
        <button
          className="w-48 h-9 bg-green-700 text-white flex justify-center items-center self-end p-2 rounded-md mt-2"
          onClick={handleSubmit(onSubmit)}
        >
          ارسال پاسخ
        </button>
      </div>
    </>
  );
}
