import { useState, useEffect } from "react";

import SuggestionsService from "services/suggestionsService";
import SuggestionsUser from "components/SuggestionsUser";

const Suggestions = () => {
  const [since, setSince] = useState(0);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const onRefresh = async () => {
    try {
      const userList = await SuggestionsService(since);
      setData(userList);
    } catch (errors: any) {
      setError(errors.message);
    }
  };

  useEffect(() => {
    onRefresh();
  }, [since]);

  return (
    <div className="suggestions-container">
      <div className="suggestions-container-1">
        <div className="refresh">
          <p>Who to follow</p>
          <button className="suggest-button" onClick={() => setSince(since + 10)}>Refresh</button>
          <button className="suggest-button" >View All</button>
        </div>
        {
          <div className="users-container">
            {data.length && <SuggestionsUser user={data[0]} />}
            {data.length>1 && <SuggestionsUser user={data[1]} />}
            {data.length>2 && <SuggestionsUser user={data[2]} />}
          </div>
        }
      </div>
    </div>
  );
};

export default Suggestions;
