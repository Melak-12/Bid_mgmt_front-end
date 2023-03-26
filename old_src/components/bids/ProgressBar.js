import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStorage from '../../hooks/useStorage';

 const ProgressBar = ({ bid, setBid }) => {
  const { progress, isCompleted } = useStorage(bid);

  useEffect(() => {
    if (isCompleted) {
      setBid(null);
    }
  }, [isCompleted]);

  return (
   <p className='upload text-light'> <motion.div
   style={{ height: '5px', background: 'rgb(0, 255, 251)' }}
   initial={{ width: 0 }}
   animate={{ width: `${progress}%` }}
  />
 The file is Uploading   <b className='text-info'> &nbsp; &nbsp; {parseInt(progress)}%  &nbsp; &nbsp; </b> Done!
 </p>
  );
};
export default ProgressBar
