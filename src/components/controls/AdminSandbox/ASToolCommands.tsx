import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { gql, useQuery } from "@apollo/client";

const columns: GridColDef[] = [
  { field: "id", headerName: "Tool ID", width: 125, hide: true },
  {
    field: "Tool.Name",
    headerName: "Tool Name",
    width: 200,
  },
  {
    field: "Tool.Decription",
    headerName: "Description",
    width: 200,
    hide: true,
  },
  {
    field: "Tool.Command.Id",
    headerName: "Command ID",
    width: 175,
    hide: true,
  },
  {
    field: "Tool.Command.HowTo",
    headerName: "Command Description",
    width: 400,
  },
  {
    field: "Tool.Command.CommandLine",
    headerName: "Command",
    width: 600,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const GET_COMMANDS_AND_TOOLS = gql`
  {
    tool {
      id
      name
      commands {
        id
        howTo
        commandLine
      }
    }
  }
`;

function apiCmdToolsToViewObj(apiCmdToolResult) {
  // eslint-disable-next-line @typescript-eslint/no-array-constructor
  var result = new Array();
  apiCmdToolResult.tool.forEach((t) => {
    if ("commands" in t) {
      t.commands.forEach((c) => {
        const viewObj = {
          id: t.id,
          "Tool.Name": t.name,
          "Tool.Decription": t.description,
          "Tool.Command.Id": c.id,
          "Tool.Command.HowTo": c.howTo,
          "Tool.Command.CommandLine": c.commandLine,
        };
        result.push(viewObj);
      });
    } else {
      const viewObj = {
        "Tool.Id": t.id,
        "Tool.Name": t.name,
        "Tool.Decription": t.description,
      };

      result.push(viewObj);
    }
  });
  return result;
}

export default function ASToolCommands() {
  const { loading, error, data } = useQuery(GET_COMMANDS_AND_TOOLS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>`Error! ${error}`</p>;

  let viewObjArray = apiCmdToolsToViewObj(data);
  console.log(viewObjArray);
  //console.log(rows);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={viewObjArray}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
