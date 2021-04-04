import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Image } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
  },
}));

export default function Avatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img alt="DexSale" src="https://i.ibb.co/QfByPw8/dx.png" className={classes.large} id="img-size" onClick={(e) => {
      e.preventDefault();
      window.location.href="https://dxsale.app/app/pages/defipresale?saleID=549&chain=BSC";
      }}/>
      <img alt="Twitter" src="https://i.ibb.co/QFccQZQ/download.png" className={classes.large} id="img-size" onClick={(e) => {
      e.preventDefault();
      window.location.href="https://twitter.com/stellarbsc";
      }}/>
      <img alt="Telegram" src="https://i.ibb.co/SXhcYBv/tg.png" className={classes.large} id="img-size" onClick={(e) => {
      e.preventDefault();
      window.location.href="https://t.me/StellarBsc";
      }} />
      <img alt="Pancakeswap" src="https://i.ibb.co/CWHFhWs/CAKEcard.png" className={classes.large} id="img-size" onClick={(e) => {
      e.preventDefault();
      window.location.href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x072cf6aee0669f148eec12f1a917786997f593e2&inputCurrency=BNB";
      }}/>
    </div>
  );
}
