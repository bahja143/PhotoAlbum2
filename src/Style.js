import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  icon: {
    color: theme.palette.common.white,
  },

  button: {
    color: theme.palette.common.white,
  },

  main: {
    marginTop: 80,
  },

  container: {
    marginTop: 100,
  },

  cardMedia: {
    height: "30vh",
  },

  cardContainer: {
    marginTop: 40,
  },

  footer: {
    padding: "10vh 10vh",
  },
}));

export default useStyle;
