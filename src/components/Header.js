import React from "react";

function Header({ onClickFn, sortState }) {
  const sortMarkHandler = () => {
    if (sortState.ascend) {
      return <span className='sortMark blue medium'>ʌ</span>;
    }
    return <span className='sortMark blue medium'>v</span>;
  };

  const addSortMark = (target) => {
    if (sortState.target === target) {
      return sortMarkHandler();
    }
    return "";
  };

  return (
    <header className='main__header'>
      <div className='account medium' onClick={onClickFn}>
        {addSortMark("account")} Account
      </div>

      <div className='cash__container grey-bck' onClick={onClickFn}>
        <article className='cash medium'>
          {addSortMark("cash")} Available Cash
        </article>
        <article className='change grey medium'>Today's Change</article>
      </div>
    </header>
  );
}

export default Header;
