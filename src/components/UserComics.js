import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/favorites.scss";

const UserComics = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://project-marvel-back.herokuapp.com/comics?title=&skip=`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        // console.log("COUCOU", dataChara);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="comics-container">
      <div>
        <p className="title">COMICS FAV</p>
        <div className="divdiv">
          {data.results.map((elem, index) => {
            // console.log("yoyoyo");
            // console.log(userId.favoritesChara);
            if (userId.favoritesComics.indexOf(elem._id) !== -1) {
              return (
                <div className="comics" key={index}>
                  <img
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt=""
                  />
                  <p>{elem.title}</p>
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserComics;