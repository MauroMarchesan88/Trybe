import PropTypes from 'prop-types';
import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const validate = emailRegex.test(email);
  return validate;
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      {verifyEmail(email)
      ? <h2 data-testid="id-email-user" style={{color: "green"}}>{`Valor: ${email}`}</h2>
      : <h2 data-testid="id-email-user" style={{color: "red"}}>{`Valor: ${email}`}</h2>}
        {email &&   <h3>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;