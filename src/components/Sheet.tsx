import * as React from "react";
import {
  CssBaseline,
  Paper,
  Grid,
  Hidden,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Typography,
  Input
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Glyph from "./Glyph";
import { flexbox } from "@material-ui/system";

export interface ISheetProps {
  name: string;
  nickname: string;
  concept: string;
  crewName?: string;
  cause?: string;
  target?: string;
  method?: string;
  race?: string;
  gender?: string;
  height?: string;
  weight?: string;
  physique?: number;
  charm?: number;
  wits?: number;
  influence?: number;
  resources?: number;
  spirit?: number;
}

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: "#ddd"
  },
  pageHeader: {
    textAlign: "center"
  },
  cardHeader: {
    borderBottom: "1px solid #ddd"
  },
  dice: {
    textAlign: "center"
  },
  spentStanding: {
    textAlign: "center"
  }
}));

const Sheet: React.FC<ISheetProps> = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            {/* Header Section */}
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
                <Grid item xs={12}>
                  <Typography variant="h2" component="h1">
                    {props.name} - "{props.nickname}"
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" component="h2">
                    {props.concept}
                  </Typography>
                </Grid>
              </Grid>
              <Hidden xsDown>
                <Grid item>
                  <Glyph name="lerasium" size={5} />
                </Grid>
              </Hidden>
            </Grid>

            {/* Body Section */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardHeader
                  avatar={<Glyph name="tin" />}
                  title={
                    <Typography variant="h4" component="h3">
                      Crew
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="crewName"
                        defaultValue={props.crewName}
                        label="Name"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="crewCause"
                        defaultValue={props.cause}
                        label="Cause"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="crewTarget"
                        defaultValue={props.target}
                        label="Target"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="crewMethod"
                        defaultValue={props.method}
                        label="Method"
                        fullWidth
                        variant="standard"
                        multiline
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardHeader
                  avatar={<Glyph name="aluminium" />}
                  title={
                    <Typography variant="h4" component="h3">
                      Characteristics
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="characteristicsRace"
                        defaultValue={props.race}
                        label="Race"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="characteristicsGender"
                        defaultValue={props.gender}
                        label="Gender"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="characteristicsHeight"
                        defaultValue={props.height}
                        label="Height"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="characteristicsWeight"
                        defaultValue={props.weight}
                        label="Weight"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={<Glyph name="iron" />}
                  title={
                    <Typography variant="h4" component="h3">
                      Attributes
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <Grid container spacing={2} component={CardContent}>
                  <Grid item xs={6}>
                    {" "}
                  </Grid>
                  <Grid item xs={6} className={classes.dice}>
                    <Typography variant="subtitle1">Dice</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Physique</Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.dice}>
                    <TextField
                      id="physique"
                      defaultValue={props.physique}
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Charm</Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.dice}>
                    <TextField
                      id="charm"
                      defaultValue={props.charm}
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Wits</Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.dice}>
                    <TextField
                      id="wits"
                      defaultValue={props.wits}
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={<Glyph name="cadmium" />}
                  title={
                    <Typography variant="h4" component="h3">
                      Standings
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <Grid container spacing={2} component={CardContent}>
                  <Grid item xs={4}>
                    {" "}
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <Typography variant="subtitle1">Dice</Typography>
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <Typography variant="subtitle1">Spent</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    Resources
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="resources"
                      defaultValue={props.resources}
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="spentResources"
                      defaultValue={0}
                      fullWidth
                      variant="standard"
                      inputProps={{
                        type: "number",
                        min: 0,
                        max: props.resources,
                        step: 1,
                        style: { textAlign: "center" }
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    Influence
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="influence"
                      defaultValue={props.influence}
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="spentInfluence"
                      defaultValue={0}
                      fullWidth
                      variant="standard"
                      inputProps={{
                        type: "number",
                        min: 0,
                        max: props.influence,
                        step: 1,
                        style: { textAlign: "center" }
                      }}
                      className={classes.spentStanding}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    Spirit
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="spirit"
                      defaultValue={props.spirit}
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="spentSpirit"
                      defaultValue={0}
                      fullWidth
                      variant="standard"
                      inputProps={{
                        type: "number",
                        min: 0,
                        max: props.spirit,
                        step: 1,
                        style: { textAlign: "center" }
                      }}
                      className={classes.spentStanding}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  avatar={<Glyph name="pewter" />}
                  title={
                    <Typography variant="h4" component="h3">
                      Resiliences
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <Grid container spacing={2} component={CardContent}>
                  <Grid item xs={4}>
                    {" "}
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <Typography variant="subtitle1">Dice</Typography>
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <Typography variant="subtitle1">Damage</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    Health
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="health"
                      defaultValue={
                        (props.resources ? props.resources : 0) +
                        (props.physique ? props.physique : 0)
                      }
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="healthDamage"
                      defaultValue={0}
                      fullWidth
                      variant="standard"
                      inputProps={{
                        type: "number",
                        min: 0,
                        max:
                          (props.resources ? props.resources : 0) +
                          (props.physique ? props.physique : 0),
                        step: 1,
                        style: { textAlign: "center" }
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    Reputation
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="reputation"
                      defaultValue={
                        (props.influence ? props.influence : 0) +
                        (props.charm ? props.charm : 0)
                      }
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="reputationDamage"
                      defaultValue={0}
                      fullWidth
                      variant="standard"
                      inputProps={{
                        type: "number",
                        min: 0,
                        max:
                          (props.influence ? props.influence : 0) +
                          (props.charm ? props.charm : 0),
                        step: 1,
                        style: { textAlign: "center" }
                      }}
                      className={classes.spentStanding}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    Willpower
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="willpower"
                      defaultValue={
                        (props.spirit ? props.spirit : 0) +
                        (props.wits ? props.wits : 0)
                      }
                      fullWidth
                      InputProps={{ readOnly: true }}
                      inputProps={{ style: { textAlign: "center" } }}
                    />
                  </Grid>
                  <Grid item xs={4} className={classes.dice}>
                    <TextField
                      id="willpowerDamage"
                      defaultValue={0}
                      fullWidth
                      variant="standard"
                      inputProps={{
                        type: "number",
                        min: 0,
                        max:
                          (props.spirit ? props.spirit : 0) +
                          (props.wits ? props.wits : 0),
                        step: 1,
                        style: { textAlign: "center" }
                      }}
                      className={classes.spentStanding}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default Sheet;
