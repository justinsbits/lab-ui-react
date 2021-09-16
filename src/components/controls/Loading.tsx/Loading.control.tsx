import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

export const LoadingControl = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      {/* <CircularProgress color="secondary" /> */}
    </div>
  );
};
