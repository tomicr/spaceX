import React, { useState, useRef, useCallback, useEffect } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Launch from './component/Launch';
import useAllLaunches from './service/useAllLaunches';
import useDebounce from './customHook/useDebounce';
import useFilterLaunch from './service/useFilterLaunch';
import { ILaunch } from './model/launchModel';
import { auth } from '../firebase-config';

const Main = function Main() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [launchList, setLaunchList] = useState([]);
  const {
    data: launches,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useAllLaunches(20);
  const { data: filterLaunch } = useFilterLaunch(query);
  console.log('filter', filterLaunch);
  const observer = useRef<IntersectionObserver>();
  const [user, setUser] = useState<User | null>();
  const navigate = useNavigate();
  const showData = filter ? filterLaunch?.data : launches?.pages;

  onAuthStateChanged(auth, (currentUser) => {
    return setUser(currentUser);
  });

  const signout = () => {
    signOut(auth);
    navigate('/');
  };
  // useEffect(() => {
  //   if (filterLaunch) {
  //     setLaunchList((d: any) => d.concat(filterLaunch));
  //   }
  // }, [filterLaunch]);

  const lastLaunchesElementRef = useCallback(
    (node: any) => {
      if (observer) {
        if (observer.current) observer.current?.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            if (isLoading || !hasNextPage) return;
            fetchNextPage();
            console.log('test');
          }
        });
        if (node) observer.current.observe(node);
      }
    },
    [fetchNextPage, isLoading]
  );

  useDebounce(() => {
    if (filter) {
      setQuery(filter);
    }
  }, filter);

  const handleSearch = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div className="logged-in">
        User logged in : {user?.email}
        {'  '}{' '}
        <button className="signOut" type="button" onClick={signout}>
          Sign out
        </button>
      </div>
      <input
        className="input"
        type="text"
        value={filter}
        placeholder="Enter year"
        onChange={handleSearch}
      />
      {/* <ul className="main">
        {isLoading && <h1 className="text-white">Loading...</h1>}
        {!query &&
          launches?.pages.map((page) => {
            return page.data.map((launch) => (
              <div key={launch.mission_name} ref={lastLaunchesElementRef}>
                <Launch launch={launch} />
              </div>
            ));
          })}
        {query.length === 4 &&
          filterLaunch?.data.map((launch: ILaunch) => {
            return (
              <div key={launch.mission_name} ref={lastLaunchesElementRef}>
                <Launch launch={launch} />
              </div>
            );
          })}
      </ul> */}
      {showData &&
        showData.map((launch: ILaunch) => {
          return (
            <div key={launch.mission_name}>
              <Launch launch={launch} />
              <div className="loading" ref={lastLaunchesElementRef} />
            </div>
          );
        })}
      ;
    </div>
  );
};
export default Main;
