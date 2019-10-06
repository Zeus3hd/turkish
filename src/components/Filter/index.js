import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SortIcon from "@material-ui/icons/Sort";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));
const Filter = props => {
  const classes = useStyles();
  //eslint-disable-next-line
  const [values, setValues] = useState("Esenyurt");

  return (
    <div className={classes.root}>
      <ExpansionPanel style={{ width: "100%" }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <SortIcon /> <span>{props.texts.FilterSort}</span>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/*Location Form */}
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filter-location">
                {props.texts.FilterLocation}
              </InputLabel>
              <Select
                value={values}
                inputProps={{
                  name: "location",
                  id: "filter-location"
                }}
              >
                <MenuItem value={null}>All</MenuItem>
                <MenuItem value={"esenyurt"}>Esenyurt</MenuItem>
                <MenuItem value={"yesilkent"}>Yesilkent</MenuItem>
                <MenuItem value={"ankara"}>Ankara</MenuItem>
              </Select>
            </FormControl>
            {/*Property Type Form*/}
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filter-Property-Type">
                {props.texts.FilterType}
              </InputLabel>
              <Select
                value={values}
                inputProps={{
                  name: "Property-Type",
                  id: "filter-Property-Type"
                }}
              >
                <MenuItem value={null}>All</MenuItem>
                <MenuItem value={"esenyurt"}>Compound</MenuItem>
                <MenuItem value={"yesilkent"}>Villa</MenuItem>
                <MenuItem value={"ankara"}>Stand Alone</MenuItem>
              </Select>
            </FormControl>
            {/*Sale/Rent*/}
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filter-Sale-Rent">
                {props.texts.FilterSaleType}
              </InputLabel>
              <Select
                value={values}
                inputProps={{
                  name: "Sale-Rent",
                  id: "filter-Sale-Rent"
                }}
              >
                <MenuItem value={null}>All</MenuItem>
                <MenuItem value={"sale"}>Sale</MenuItem>
                <MenuItem value={"rent"}>Rent</MenuItem>
              </Select>
            </FormControl>
            {/*Furnished*/}
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filter-Furnished">
                {props.texts.FilterFurniture}
              </InputLabel>
              <Select
                value={values}
                inputProps={{
                  name: "Furnished",
                  id: "filter-Furnished"
                }}
              >
                <MenuItem value={null}>All</MenuItem>
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            {/*Rooms*/}
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filter-rooms">
                {props.texts.FilterRooms}
              </InputLabel>
              <Select
                value={values}
                inputProps={{
                  name: "rooms",
                  id: "filter-rooms"
                }}
              >
                <MenuItem value={null}>All</MenuItem>
                <MenuItem value={"1+0"}>1+0</MenuItem>
                <MenuItem value={"1+1"}>1+1</MenuItem>
                <MenuItem value={"2+1"}>2+1</MenuItem>
                <MenuItem value={"3+1"}>3+1</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <p> {props.texts.FilterPrice}</p>
              <TextField
                id="standard-number"
                label={props.texts.FilterPriceMax}
                value={values.age}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label={props.texts.FilterPriceMin}
                value={values.age}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
            </FormControl>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Filter;
