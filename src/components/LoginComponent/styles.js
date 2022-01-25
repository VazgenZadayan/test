const styles = () => {
  const loginForm = {
    maxWidth: '50%',
    margin: '0 auto',
    border: '1px solid #212121',
    borderRadius: '10px',
    background: '#212121',
    padding: '20px 20px 80px 20px',
  };

  const title = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'Roboto',
    color: 'white',
    marginBottom: '40px',
  };

  const form = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '50%',
    margin: '0 auto',
    padding: '50px',
    border: '1px solid #ffffff29',
    borderRadius: '10px',
  };

  const input = {
    outline: 'none',
    border: 'none',
    borderRadius: '10px',
    marginBottom: '20px',
    padding: '10px',
  };

  const btn = {
    outline: 'none',
    border: 'none',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '15px',
    fontFamily: 'Roboto',
    height: '35px'
  };

  const confirmForm = {
    color: 'white',
    padding: '0'
  };

  return { loginForm, title, form, input, btn, confirmForm };
};

export default styles;
