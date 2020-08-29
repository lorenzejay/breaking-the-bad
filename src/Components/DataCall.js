import React, { useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchChar from "./SearchChar";

const DataCall = () => {
  const [data, setData] = useState([]);

  const getInfo = async () => {
    const res = await axios.get("https://www.breakingbadapi.com/api/characters");
    const data = res.data;
    setData(data);
    console.log(data);
  };

  React.useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <SearchChar data={data} />
    </div>
  );
};

// class DataCall extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   async getInfo() {
//     const res = await axios.get("https://www.breakingbadapi.com/api/characters");
//     console.log(res.data);
//   }

//   componentDidMount() {
//     this.getInfo();
//   }

//   render() {
//     return <div></div>;
//   }
// }

export default DataCall;
