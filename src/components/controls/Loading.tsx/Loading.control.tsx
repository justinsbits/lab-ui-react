import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function LoadingControl() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
