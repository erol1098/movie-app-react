import { useSelector } from "react-redux/es/exports";
const useSort = () => {
  const key = useSelector((state) => state.movie.sortKey);
  const compare = (a, b) => {
    if (a.original_title < b.original_title) {
      return -1;
    }
    if (a.original_title > b.original_title) {
      return 1;
    }
    return 0;
  };

  const sorting = (movies) => {
    console.log("object");
    const temp = [...movies];
    temp.sort(compare);
    console.log(temp);
    return temp;
  };

  return { sorting };
};

export default useSort;
