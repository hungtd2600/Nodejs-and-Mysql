import { FC, useState } from "react";
import axios from "axios";

const Add: FC = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const handleChange = (e: any) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = async (e: any) => {
    e.preventDefault();
    console.log(book);

    try {
      await axios.post("http://localhost:8800/books", book);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>
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
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Add;
