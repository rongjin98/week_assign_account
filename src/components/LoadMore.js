import React from "react";

function LoadMore({ title, onClickFn }) {
  return (
    <div className='load blue' onClick={onClickFn}>
      {title}
    </div>
  );
}

export default LoadMore;
