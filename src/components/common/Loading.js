import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => (
  <>
    <div className="d-flex justify-content-center my-4 py-3">
      <ReactLoading type="spokes" color="#333333" height={48} width={32} />
      <span className="fs-3 p-2">Loading</span>
    </div>
  </>
);

export default Loading;
