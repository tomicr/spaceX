import React from 'react';
import { useParams } from 'react-router-dom';

const MoreDetails = function MoreDetails() {
  const { name } = useParams();
  return <div>TEST</div>;
};
export default MoreDetails;
