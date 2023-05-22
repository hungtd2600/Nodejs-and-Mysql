/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { FC } from "react";
import axios from "axios";
import Link from "next/link";

type Book = {
  id: number;
  title: string;
  description: string;
  cover: string;
  price: number;
};

type HomeProps = {
  books: Book[];
};

const handleDelete = async (id: any) => {
  await axios.delete("http://localhost:8800/books/" + id);
};

const Home: FC<HomeProps> = ({ books }) => {
  return (
    <div>
      <h1>Home</h1>
      {books &&
        books.map((book: Book) => {
          return (
            <div key={book.id}>
              <h1>{book.title}</h1>
              <h2>{book.description}</h2>
              <h3>{book.price}</h3>
              <img src={book.cover} alt={book.title} />
              <button>
                <Link href={`/update/${book.id}`}>update</Link>
              </button>
              <button onClick={() => handleDelete(book.id)}>delete</button>
            </div>
          );
        })}
      <Link href={"/add"}>Add</Link>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: books } = await axios.get<{ data: Book }>(
    "http://localhost:8800/books"
  );
  return {
    props: {
      books,
    },
  };
};
