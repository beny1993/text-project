import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "../components/box/Box";
import Head from "../components/head/Head";
import Modal from "../components/modal/Modal";

export default function MainList() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<any>([]);
    let location = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setData(res.data));
  }, [modal]);

  const onDetailsHandler = (id: number) => {
    location.push(`/post/${id}`)
  }

  return (
    <>
      <Head title="لیست سوالات" onAddHandler={() => setModal(true)} />
      <div className="flex justify-center items-center w-full  flex-col px-20 relative top-20 bg-gray-200">
        {data.map((item: any) => {
          return (
            <Box
              title={item.title}
              date={item.date}
              time={item.time}
              number={item?.comment?.length}
              content={item.content}
              onDetails={() => onDetailsHandler(item.id)}
              key={item.id}
            />
          );
        })}
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
}
