import React, {FC} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Theme as DefaultTheme} from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles<DefaultTheme, Props>((theme) => ({
  line1: (props) => ({
    width: props.baseWidth,
    backgroundColor: '#EEEEEE',
  }),
  line2: (props) => ({
    width: props.baseWidth * 2,
    backgroundColor: '#EEEEEE',
  }),
  line3: (props) => ({
    width: props.baseWidth * 3,
    backgroundColor: '#EEEEEE',
  }),
}));

type Props = {
  baseWidth: number
}

export const Hello: FC<Props> = (props) => {
  const classes = useStyles(props);
  return <div>
    <div className={classes.line1}>Line1</div>
    <div className={classes.line2}>Line2</div>
    <div className={classes.line3}>Line3</div>
  </div>;
}
