import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type = "spinningBubbles", color = "#f1356d" }) => {
  return (
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
  );
}

export default Loading;