import { useSelector } from "react-redux/es/exports";
const useSort = () => {
  const key = useSelector((state) => state.movie.sortKey);

  const compare = (a, b) => {
    if (key === "t" || key === "ra" || key === "pa" || key === "da") {
      if (
        a[
          `${
            key === "t"
              ? "original_title"
              : key === "ra"
              ? "vote_average"
              : key === "pa"
              ? "popularity"
              : "release_date"
          }`
        ] <
        b[
          `${
            key === "t"
              ? "original_title"
              : key === "ra"
              ? "vote_average"
              : key === "pa"
              ? "popularity"
              : "release_date"
          }`
        ]
      ) {
        return -1;
      }
      if (
        a[
          `${
            key === "t"
              ? "original_title"
              : key === "ra"
              ? "vote_average"
              : key === "pa"
              ? "popularity"
              : "release_date"
          }`
        ] >
        b[
          `${
            key === "t"
              ? "original_title"
              : key === "ra"
              ? "vote_average"
              : key === "pa"
              ? "popularity"
              : "release_date"
          }`
        ]
      ) {
        return 1;
      }
      return 0;
    } else if (key === "rd" || key === "pd" || key === "dd") {
      if (
        a[
          `${
            key === "rd"
              ? "vote_average"
              : key === "pd"
              ? "popularity"
              : "release_date"
          }`
        ] <
        b[
          `${
            key === "rd"
              ? "vote_average"
              : key === "pd"
              ? "popularity"
              : "release_date"
          }`
        ]
      ) {
        return 1;
      }
      if (
        a[
          `${
            key === "rd"
              ? "vote_average"
              : key === "pd"
              ? "popularity"
              : "release_date"
          }`
        ] >
        b[
          `${
            key === "rd"
              ? "vote_average"
              : key === "pd"
              ? "popularity"
              : "release_date"
          }`
        ]
      ) {
        return -1;
      }
      return 0;
    }
  };

  const sorting = (movies) => {
    const temp = [...movies];
    temp.sort(compare);
    return temp;
  };

  return { sorting };
};

export default useSort;
