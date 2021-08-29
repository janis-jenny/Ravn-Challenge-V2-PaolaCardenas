import React from 'react';
import ReactLoading from 'react-loading';
import Navbar from '../Navbar';

const Loading = () => (
  <>
    <Navbar />
    {' '}
    <div className="d-flex justify-content-center py-3">
      <ReactLoading type="spokes" color="#333333" height={48} width={32} />
      <span className="fs-3 p-2">Loading</span>
    </div>
  </>
);

export default Loading;
