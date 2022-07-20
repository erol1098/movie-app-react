import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

import { movieActions } from "../../store/movie-slice";

function Sort() {
  const sortKey = useSelector((state) => state.movie.sortKey);
  const dispatch = useDispatch();
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sort Results</Accordion.Header>
        <Accordion.Body>
          <Form.Select
            value={sortKey}
            onChange={(e) => dispatch(movieActions.setSortKey(e.target.value))}
          >
            <option value="pd">Popularity Descending</option>
            <option value="pa">Popularity Ascending</option>
            <option value="rd">Rating Descending</option>
            <option value="ra">Rating Ascending</option>
            <option value="dd">Release Date Descending</option>
            <option value="da">Release Date Ascending</option>
            <option value="t">Title (A-Z)</option>
          </Form.Select>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Sort;
