import React from "react";
import { useRouter } from "next/router";
import Results from "../src/components/Results";

const results = () => {
  const router = useRouter();
  const { term } = router.query;
  if (term) {
    return <Results term={term} />;
  } else {
    return "";
  }
};

export default results;
