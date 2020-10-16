import React, { useEffect, useState } from "react";
import Image from "./component/image/Image";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("people");
  const [name, setName] = useState();
  const baseurl = `https://api.pexels.com/v1/search?query=${query}`;
  const token = "563492ad6f91700001000001e686184c31ad4139af468507c35377af";
  const [testApi, setTestApi] = useState([]);
  const axiosInstance = axios.create({
    headers: {
      
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
  useEffect(() => {
    const fetchItem = async () => {
      await axiosInstance
        .get(baseurl)
        .then((res) => {
          setTestApi(res.data.photos);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchItem();
  }, [baseurl]);

  const handlechange = (e) => {
    setName(e.target.value);
  };
  const handleclick = (e) => {
    e.preventDefault();
    // console.log(name);
    setQuery(name)
    console.log(query)
    
  };
  return (
    <div className="app">
      <h1>{query}</h1>
      <form action="">
        <input
          type="text"
          name="query"
          placeholder="enter search name...."
          onChange={handlechange}
          value={name}
        />
        <button onClick={handleclick}>search</button>
      </form>
      <header className="app-header">
        {testApi.map((photo) => {
          return (
            <Image
              srcc={photo.src.medium}
              key={photo.id}
              classnameimg="imgsize"
              color="color"
              alt={photo.photographer}
            />
          );
        })}
      </header>
      {/* <Image/> */}
    </div>
  );
}

export default App;

// <img
//   key={test.src.id}
//   className="imgsize"
//   src={test.src.original}
//   alt=""
//   />
