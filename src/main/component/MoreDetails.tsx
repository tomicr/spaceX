import React from 'react';
import { useParams } from 'react-router-dom';
import useLaunch from '../service/useLaunch';

const MoreDetails = function MoreDetails() {
  const { id } = useParams();
  // const { data } = useLaunch(id);
  return <div>test</div>;
};
export default MoreDetails;
