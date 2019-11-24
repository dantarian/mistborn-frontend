import * as React from "react";
import { CssBaseline, Paper, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Glyph from "./Glyph";
import { flexbox } from "@material-ui/system";

export interface ISheetProps {
  name: string;
  nickname: string;
  concept: string;
}

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2)
  },
  pageHeader: {
    textAlign: "center"
  },
  nickname: {}
}));

const Sheet: React.FC<ISheetProps> = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              justify="center"
              alignItems="center"
              component="header"
              className={classes.pageHeader}
            >
              <Hidden xsDown>
                <Grid item>
                  <Glyph name="atium" size={5} />
                </Grid>
              </Hidden>
              <Grid
                container
                item
                xs={12}
                sm={6}
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} component="h1">
                  <span className="name">{props.name}</span>
                  <span className={classes.nickname}>
                    {" "}
                    - "{props.nickname}"
                  </span>
                </Grid>
                <Grid item xs={12} component="h2" className="concept">
                  {props.concept}
                </Grid>
              </Grid>
              <Hidden xsDown>
                <Grid item>
                  <Glyph name="lerasium" size={5} />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default Sheet;
