import { ErrorMessage } from '@hookform/error-message';

import styles from './styles';

const CustomErrorMessage = ({ errors, name }) => {
  const classes = styles();
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p style={classes.error}>{message}</p>}
    />
  );
};

export default CustomErrorMessage;
