import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import WeatherControl from "../Weather/Weather.control";
import WeatherControlErrorBoundary from "../Weather/Weather.control.errorboundary";

import spkImage from "../../../assets/spk.jpg";

// import { gql, useQuery } from "@apollo/client";

// const GET_REPOSITORIES_OF_ORGANIZATION = gql`
//   {
//     organization(login: "the-road-to-learn-react") {
//       repositories(first: 20) {
//         edges {
//           node {
//             id
//             name
//             url
//             viewerHasStarred
//           }
//         }
//       }
//     }
//   }
// `;

// const SearchResults = () => {
//   const { loading, data } = useQuery(GET_REPOSITORIES_OF_ORGANIZATION);

//   if (loading) return <p>Loading Stuff ....</p>;

//   return JSON.stringify(data);
// };

export default function SpokaneControl() {
  // const val = SearchResults();
  // console.log(val);

  return (
    <Card>
      <CardMedia component="img" image={spkImage} alt="Spokane - Riverfront" />
      <CardContent>
        <WeatherControlErrorBoundary>
          <WeatherControl />
        </WeatherControlErrorBoundary>
      </CardContent>
    </Card>
  );
}
