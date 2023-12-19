import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

const useGenres = () => useData<Genre>("/genres");

// const useGenres = () => {
// const [genres, setGenres] = useState<Genre[]>([]);
// const [error, setError] = useState("");
// const [loading, setLoading] = useState(false);

// useEffect(() => {
//   const controller = new AbortController();

//   setLoading(true);
//   apiClient
//     .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//     .then((res) => {
//       setGenres(res.data.results);
//       setLoading(false);
//     })
//     .catch((err) => {
//       if (err instanceof CanceledError) return;
//       setError(err.message);
//       setLoading(false);
//     });

//   return () => controller.abort();
// }, []);

// return { genres, error, loading };
// };

export default useGenres;
