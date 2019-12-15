import * as React from "react";
import {
  CssBaseline,
  Paper,
  Grid,
  Hidden,
  Card,
  CardHeader,
  CardContent,
  Slider,
  TextField,
  Typography,
  Input
} from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Glyph from "./Glyph";
import { sizing } from "@material-ui/system";

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
  drive?: string;
  profession?: string;
  speciality?: string;
  feature?: string;
  personality?: string;
  traits?: string[];
  burdens?: string[];
  tragedy?: string;
  destiny?: string;
  secrets?: string[];
  powers?: IPowersProps[];
  equipment?: IEquipmentProps[];
  advancements?: number;
}

export interface IPowersProps {
  name: string;
  type?: string;
  rating?: number;
  stunts?: string[];
}

export class Power implements IPowersProps {
  name: string;
  type?: string | undefined;
  rating?: number | undefined;
  stunts?: string[] | undefined;

  constructor(name: string, type?: string, rating?: number, stunts?: string[]) {
    this.name = name;
    this.type = type;
    this.rating = rating;
    this.stunts = stunts;
  }
}

export interface IEquipmentProps {
  name: string;
  isProp: boolean;
  charges?: number;
  damage?: number;
  range?: string;
}

export class Equipment implements IEquipmentProps {
  name: string;
  isProp: boolean;
  charges?: number | undefined;
  damage?: number | undefined;
  range?: string | undefined;

  constructor(
    name: string,
    isProp: boolean,
    charges?: number,
    damage?: number,
    range?: string
  ) {
    this.name = name;
    this.isProp = isProp;
    this.charges = charges;
    this.damage = damage;
    this.range = range;
  }
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
  },
  traitHeader: {
    display: "inline-block",
    fontVariant: "small-caps",
    textTransform: "lowercase",
    fontWeight: "bold",
    marginRight: "0.5em"
  },
  powersHeader: {
    fontVariant: "small-caps",
    textTransform: "lowercase",
    fontWeight: "bold",
    marginRight: "0.5em"
  },
  section: {
    height: "100%"
  },
  stunt: {
    marginLeft: "1.5em"
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
                  <Typography variant="h3" component="h1">
                    {props.name} - "{props.nickname}"
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h2">
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
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="tin" />}
                  title={
                    <Typography variant="h5" component="h3">
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
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="aluminium" />}
                  title={
                    <Typography variant="h5" component="h3">
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
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="iron" />}
                  title={
                    <Typography variant="h5" component="h3">
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
                    <Typography variant="h5" component="h3">
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
                    <Typography variant="subtitle1">Resources</Typography>
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
                    <Typography variant="subtitle1">Influence</Typography>
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
                    <Typography variant="subtitle1">Spirit</Typography>
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
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="pewter" />}
                  title={
                    <Typography variant="h5" component="h3">
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
                    <Typography variant="subtitle1">Health</Typography>
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
                    <Typography variant="subtitle1">Reputation</Typography>
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
                    <Typography variant="subtitle1">Willpower</Typography>
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

            <Grid item xs={12}>
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="bendalloy" />}
                  title={
                    <Typography variant="h5" component="h3">
                      Traits and Burdens
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <Grid container spacing={2} component={CardContent}>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <Typography
                        variant="h6"
                        component="h4"
                        className={classes.traitHeader}
                      >
                        Drive
                      </Typography>
                      {props.drive}
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        component="h4"
                        className={classes.traitHeader}
                      >
                        Profession
                      </Typography>
                      {props.profession}
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        component="h4"
                        className={classes.traitHeader}
                      >
                        Speciality
                      </Typography>
                      {props.speciality}
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        component="h4"
                        className={classes.traitHeader}
                      >
                        Feature
                      </Typography>
                      {props.feature}
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        component="h4"
                        className={classes.traitHeader}
                      >
                        Personality
                      </Typography>
                      {props.personality}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {props.traits
                      ? props.traits.map(value => (
                          <div>
                            <Typography
                              variant="h6"
                              component="h4"
                              className={classes.traitHeader}
                            >
                              Trait
                            </Typography>
                            {value}
                          </div>
                        ))
                      : ""}
                    {props.burdens
                      ? props.burdens.map(value => (
                          <div>
                            <Typography
                              variant="h6"
                              component="h4"
                              className={classes.traitHeader}
                            >
                              Burden
                            </Typography>
                            {value}
                          </div>
                        ))
                      : ""}
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} alignItems="stretch">
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="zinc" />}
                  title={
                    <Typography variant="h5" component="h3">
                      Tragedy
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <CardContent>{props.tragedy}</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} alignItems="stretch">
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="steel" />}
                  title={
                    <Typography variant="h5" component="h3">
                      Destiny
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <CardContent>{props.destiny}</CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="bronze" />}
                  title={
                    <Typography variant="h5" component="h3">
                      Secrets Known
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <Grid container spacing={2} component={CardContent}>
                  {props.secrets
                    ? props.secrets.map(value => (
                        <Grid item xs={12} sm={6}>
                          {value}
                        </Grid>
                      ))
                    : ""}
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="copper" />}
                  title={
                    <Typography variant="h5" component="h3">
                      Powers
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <Grid container spacing={2} component={CardContent}>
                  {props.powers
                    ? props.powers.map(power => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <Typography variant="h6" component="h4">
                            {power.name}
                          </Typography>
                          {power.type ? (
                            <Typography
                              variant="h6"
                              component="h5"
                              className={classes.powersHeader}
                            >
                              {power.type}
                            </Typography>
                          ) : (
                            ""
                          )}
                          {power.rating ? (
                            <Typography
                              variant="h6"
                              component="h5"
                              className={classes.powersHeader}
                            >
                              Rating&nbsp;
                              <Typography variant="body1" component="span">
                                {power.rating}
                              </Typography>
                            </Typography>
                          ) : (
                            ""
                          )}
                          {power.stunts && power.stunts.length != 0 ? (
                            <>
                              <Typography
                                variant="h6"
                                component="h5"
                                className={classes.powersHeader}
                              >
                                Stunts
                              </Typography>
                              {power.stunts.map(stunt => (
                                <Typography
                                  variant="body1"
                                  className={classes.stunt}
                                >
                                  {stunt}
                                </Typography>
                              ))}
                            </>
                          ) : (
                            ""
                          )}
                        </Grid>
                      ))
                    : ""}
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="gold" />}
                  title={
                    <Typography variant="h5" component="h3">
                      Equipment
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <Grid container spacing={2} component={CardContent}>
                  {props.equipment
                    ? props.equipment.map(equipment => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <Typography variant="h6" component="h4">
                            {equipment.name}
                          </Typography>
                          {equipment.isProp ? (
                            <Typography
                              variant="h6"
                              component="h5"
                              className={classes.powersHeader}
                            >
                              Prop
                            </Typography>
                          ) : (
                            ""
                          )}
                          {equipment.charges ? (
                            <Typography
                              variant="h6"
                              component="h5"
                              className={classes.powersHeader}
                            >
                              Charges&nbsp;
                              <Typography variant="body1" component="span">
                                {equipment.charges}
                              </Typography>
                            </Typography>
                          ) : (
                            ""
                          )}
                          {equipment.damage ? (
                            <Typography
                              variant="h6"
                              component="h5"
                              className={classes.powersHeader}
                            >
                              Damage&nbsp;
                              <Typography variant="body1" component="span">
                                {equipment.damage}
                              </Typography>
                            </Typography>
                          ) : (
                            ""
                          )}
                          {equipment.range ? (
                            <Typography
                              variant="h6"
                              component="h5"
                              className={classes.powersHeader}
                            >
                              Range&nbsp;
                              <Typography variant="body1" component="span">
                                {equipment.range}
                              </Typography>
                            </Typography>
                          ) : (
                            ""
                          )}
                        </Grid>
                      ))
                    : ""}
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card className={classes.section}>
                <CardHeader
                  avatar={<Glyph name="brass" />}
                  title={
                    <Typography variant="h5" component="h3">
                      Advancements
                    </Typography>
                  }
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Slider
                    defaultValue={props.advancements || 0}
                    min={0}
                    max={20}
                    step={1}
                    marks
                    valueLabelDisplay="auto"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default Sheet;
