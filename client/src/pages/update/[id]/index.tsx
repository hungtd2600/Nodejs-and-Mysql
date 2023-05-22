import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Add: FC = () => {
  const router = useRouter();
  const idBook = router.query.id;
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const handleChange = (e: any) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    await axios.put("http://localhost:8800/books/" + idBook, book);
  };
  return (
    <div>
      {" "}
      <h1>Update book</h1>
      <div>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="cover"
          name="cover"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Add;
