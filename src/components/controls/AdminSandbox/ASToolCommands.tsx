import {
  //GridRowsProp,
  useGridApiRef,
  DataGridPro,
  GridApiRef,
  //GridColumns,
  GridRowParams,
  MuiEvent,
  GridToolbarContainer,
  GridActionsCellItem,
  //GridColDef,
  GridColumns,
} from "@mui/x-data-grid-pro";
import { gql, useQuery } from "@apollo/client";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme) => ({
    actions: {
      color: theme.palette.text.secondary,
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
  }),
  { defaultTheme }
);

//const ADD_TOOL_AND_COMMAND = gql``;

const GET_TOOLS_AND_COMMANDS = gql`
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

interface EditToolbarProps {
  apiRef: GridApiRef;
}

function EditToolbar(props: EditToolbarProps) {
  const { apiRef } = props;

  const handleClick = () => {
    const id = apiRef.current.getRowsCount() + 1;
    apiRef.current.updateRows([{ id, isNew: true }]);
    apiRef.current.setRowMode(id, "edit");
    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      });
      apiRef.current.setCellFocus(id, "Tool.Name");
    });
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function ASToolCommands() {
  const classes = useStyles();
  const apiRef = useGridApiRef();

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, "edit");
  };

  const handleSaveClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.commitRowChange(id);
    apiRef.current.setRowMode(id, "view");

    const row = apiRef.current.getRow(id);
    apiRef.current.updateRows([{ ...row, isNew: false }]);
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: "delete" }]);
  };

  const handleCancelClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, "view");

    const row = apiRef.current.getRow(id);
    if (row!.isNew) {
      apiRef.current.updateRows([{ id, _action: "delete" }]);
    }
  };

  // ideally dynamic below - i.e. not addressing via React.useMemo
  const columns: GridColumns = [
    {
      field: "id",
      headerName: "Tool ID",
      type: "number",
      width: 125,
      hide: true,
    },
    {
      field: "Tool.Name",
      headerName: "Tool Name",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "Tool.Decription",
      headerName: "Description",
      type: "string",
      width: 200,
      hide: true,
    },
    {
      field: "Tool.Command.Id",
      headerName: "Command ID",
      type: "number",
      width: 175,
      hide: true,
    },
    {
      field: "Tool.Command.HowTo",
      headerName: "Command Description",
      type: "string",
      width: 400,
      editable: true,
    },
    {
      field: "Tool.Command.CommandLine",
      headerName: "Command",
      type: "string",
      width: 600,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      getActions: (params: GridRowParams) => {
        const isInEditMode = apiRef.current.getRowMode(params.id) === "edit";

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(params.id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className={classes.textPrimary}
              onClick={handleCancelClick(params.id)}
              color="inherit"
            />,
          ];
        }
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className={classes.textPrimary}
            onClick={handleEditClick(params.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(params.id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const { loading, error, data } = useQuery(GET_TOOLS_AND_COMMANDS);
  //const [addToolAndCo, { data, loading, error }] = useMutation(ADD_TOOL_AND_COMMAND);

  if (loading) return <p>Loading ...</p>;
  if (error) {
    console.error(error);
    throw error;
  }

  let viewObjArray = apiCmdToolsToViewObj(data);
  console.log(viewObjArray);
  //console.log(rows);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGridPro
        rows={viewObjArray}
        columns={columns}
        apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { apiRef },
        }}
      />
    </div>
  );
}
