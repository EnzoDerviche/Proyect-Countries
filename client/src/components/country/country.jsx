import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import style from './country.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function Country({name, id, continent, flag}) {
  const classes = useStyles();

  return (
    <Link style={{ textDecoration: 'none' }} to={`/country/${id}`}>
      <Card className={classes.root && style.carta}>
        <CardActionArea>
          <CardMedia
            className={style.flag}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            src={flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h4">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {continent}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
