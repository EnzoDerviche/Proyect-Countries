import React from "react";
import style from "./filtro.module.css";
import { useDispatch } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IoMdMenu, IoIosGlobe, IoIosArrowRoundUp, IoIosArrowRoundDown, IoMdSwap, IoIosFootball, IoIosBasketball, IoIosTennisball, IoIosFlower } from "react-icons/io";
import {
  filterByContinent,
  sortByPopulation,
  sortAlphabetically,
  filterByActivity
} from "../../actions/index";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));



const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.success.light,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Filtro() {
  const dispatch = useDispatch();



  const filterByContinentButton = (name) => {
    dispatch(filterByContinent(name));
  };
  const filterByActivities = (name) => {
    dispatch(filterByActivity(name));
  };



  const sortBy = (filter, order) => { //verifica si el filter es population o alphabet para dispachar la funcion de ordenamiento segun el order
    switch (filter) {
      case "population":
        dispatch(sortByPopulation(order));
        break;
      case "alphabet":
        dispatch(sortAlphabetically(order));
        break;
      default:
        break;
    }
  };




  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <div>
          <Button
            className={style.boton}
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="grey"
            onClick={handleClick}
          >
          <IoMdMenu/>
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={() => sortBy("population", "asc")}>
              <ListItemIcon>
                <IoIosArrowRoundUp fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Population" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => sortBy("population", "desc")}>
              <ListItemIcon>
                <IoIosArrowRoundDown fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Population" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => sortBy("alphabet", "asc")}>
              <ListItemIcon>
                <IoMdSwap fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="A-Z" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => sortBy("alphabet", "desc")}>
              <ListItemIcon>
                <IoMdSwap fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Z-A" />
            </StyledMenuItem>
            <hr/>
            <StyledMenuItem onClick={() => filterByContinentButton("Americas")}>
              <ListItemIcon>
                <IoIosGlobe fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="America" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByContinentButton("Asia")}>
              <ListItemIcon>
                <IoIosGlobe fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Asia" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByContinentButton("Europe")}>
              <ListItemIcon>
                <IoIosGlobe fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Europa" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByContinentButton("Oceania")}>
              <ListItemIcon>
                <IoIosGlobe fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Oceania" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByContinentButton("Africa")}>
              <ListItemIcon>
                <IoIosGlobe fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Africa" />
            </StyledMenuItem>
            <hr/>
            <StyledMenuItem onClick={() => filterByActivities('Futbol')}>
              <ListItemIcon>
                <IoIosFootball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Futbol" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByActivities('Basket')}>
              <ListItemIcon>
                <IoIosBasketball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Basket" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByActivities('Tennis')}>
              <ListItemIcon>
                <IoIosTennisball fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Tennis" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => filterByActivities('Sky')}>
              <ListItemIcon>
                <IoIosFlower fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Sky" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
    </div>
  );
}
