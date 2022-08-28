import React from "react";

const idLength = 4;
function Account({ props }) {
  const { name, id, cash, change } = props;

  const displayId = () => {
    let _id = id.toString();
    while (_id.length < idLength) {
      _id = "0" + _id;
    }
    return _id;
  };

  const getChangeValue = () => {
    return (cash * change).toFixed(2);
  };

  const displayChange = () => {
    const percent = change.toString() + "%";
    const value = "$" + getChangeValue().toString();
    const _str = percent + " / " + value;
    if (change < 0) {
      return <div className='account__change red'>{_str}</div>;
    } else {
      return <div className='account__change green'>{_str}</div>;
    }
  };

  return (
    <>
      <article className='account__container'>
        <header className='account__title blue bold'>
          {name}-{displayId()}
        </header>
        <section className='cash_change__container'>
          <div className='account__cash'>${cash}</div>
          {displayChange()}
        </section>
      </article>
      <hr />
    </>
  );
}

export default Account;
