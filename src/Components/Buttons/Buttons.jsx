import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

const Buttons = ({ children, color, variant, href, className, onClick }) => {

  return (
    <Button children={children} onClick={onClick} className={clsx(className)} color={color} variant={variant} href={href} />
  );
}

export default withStyles(styles)(Buttons);
