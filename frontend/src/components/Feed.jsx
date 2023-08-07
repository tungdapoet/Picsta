import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

export default function Feed() {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
    } else {
      setLoading(true);

    }
  }, [categoryId]);
  const ideaName = categoryId || "new";
  if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
}
