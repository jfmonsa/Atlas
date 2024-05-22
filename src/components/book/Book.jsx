import "./book.css";
import {Link} from "react-router-dom";

const Book = ({title, authors, img, bookId}) => {
  return (
    <Link to={`/books/${bookId}`}>
      <div className="bookContainer">
        <img
          className="img"
          //src={img}
          src={`http://localhost:3000/storage/books/${img}`}
          alt={`Imagen de la portada del libro: ${title}, por ${authors}`}
        />
        <h2 className="tittleContainer">{title}</h2>
        <p className="autorContainer">{authors}</p>
      </div>
    </Link>
  );
};

export default Book;
