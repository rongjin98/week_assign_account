import "./App.css";
import Header from "./components/Header";
import Account from "./components/Account";
import LoadMore from "./components/LoadMore";
import { MockApiCall } from "./api/MockApiCall";
import { useEffect, useState } from "react";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayAccounts, setDisplayAccounts] = useState([]);
  const [sortState, setSortState] = useState({});

  useEffect(() => {
    setIsLoading(true);
    MockApiCall()
      .then((res) => {
        setAccounts(res.MockAccount);
        setDisplayAccounts(res.MockAccount.slice(0, 3));
      })
      .then((res) => {
        setIsLoading(false);
      });
  }, []);

  //LoadMore
  const loadMoreHandler = () => {
    setDisplayAccounts([...accounts]);
    setSortState({});
  };

  const displayLoad = () => {
    if (isLoading) {
      return <LoadMore title='Loading' />;
    }

    if (displayAccounts.length === accounts.length) {
      return null;
    }

    return <LoadMore title='Load More' onClickFn={loadMoreHandler} />;
  };

  //Sort
  const initSortHandler = (event) => {
    const sortTarget = event.target.className.startsWith("account")
      ? "account"
      : "cash";

    const sortType = sortTarget === sortState.target ? !sortState.ascend : true;
    const newSortState = { target: sortTarget, ascend: sortType };
    setSortState(newSortState);
  };

  const idSortHandler = (ascend) => {
    displayAccounts.sort((a, b) => {
      if (ascend) {
        return a.id > b.id ? 1 : -1;
      } else {
        return b.id > a.id ? 1 : -1;
      }
    });
    setDisplayAccounts([...displayAccounts]);
  };

  const cashSortHandler = (ascend) => {
    displayAccounts.sort((a, b) => {
      const valPrev = parseFloat(a.cash);
      const valNext = parseFloat(b.cash);
      if (ascend) {
        return valPrev - valNext;
      } else {
        return valNext - valPrev;
      }
    });
    setDisplayAccounts([...displayAccounts]);
  };

  useEffect(() => {
    if (sortState.target === "account") {
      idSortHandler(sortState.ascend);
    } else if (sortState.target === "cash") {
      cashSortHandler(sortState.ascend);
    }
  }, [sortState]);

  return (
    <div className='App'>
      <main className='main__conatiner'>
        <Header onClickFn={initSortHandler} sortState={sortState} />
        {displayAccounts.map((ele) => {
          return <Account key={[ele.name, ele.id]} props={ele} />;
        })}
        {displayLoad()}
      </main>
    </div>
  );
}

export default App;
