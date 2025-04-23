import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalAppContext } from "../context";
import { API_URL } from "../constants";

const Gallery = () => {
  const { searchWord } = useGlobalAppContext();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["images", searchWord],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}&query=${searchWord}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <div className="loading"></div>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h2>Error: {error.message}</h2>
      </section>
    );
  }

  const imagesResult = data.results;
  if (imagesResult.length === 0) {
    return (
      <section className="image-container">
        <h2>No images found</h2>
      </section>
    );
  }

  return (
    <section className="image-container">
      {imagesResult.map((image) => {
        const { id, urls, alt_description } = image;
        return (
          <article key={id}>
            <img src={urls.regular} alt={alt_description} className="img" />
          </article>
        );
      })}
    </section>
  );
};

export default Gallery;
