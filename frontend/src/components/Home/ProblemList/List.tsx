import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { userState } from '../../../recoils';
import { useRecoilState } from 'recoil';
import { ProblemInfo } from '@types';

const URL = import.meta.env.VITE_SERVER_URL;

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 1rem;
`;

const ListTitle = styled.div`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.9rem;
  text-align: center;
  position: absolute;
  left: 3.5rem;
  top: 3rem;
  color: #555555;
  cursor: pointer;
`;

const ProblemListWrapper = styled.div`
  position: absolute;
  top: 9.5rem;
  display: grid;
  grid-template-columns: 37rem 37rem;
  grid-template-rows: 12.2rem 12.2rem 12.2rem;
  column-gap: 3.5rem;
  row-gap: 3.5rem;
  width: fit-content;
`;

const List = () => {
  const [user] = useRecoilState(userState);
  const [problems, setProblems] = useState<ProblemInfo[]>([]);
  useEffect(() => {
    const { ID } = user;
    const fetchURL = ID
      ? `${URL}/problem/random?loginId=${ID}`
      : `${URL}/problem/random?loginId=0`;
    fetch(fetchURL)
      .then((res) => res.json())
      .then((res) => {
        setProblems(Object.values(res));
      });
  }, [user]);
  return (
    <ListWrapper>
    </ListWrapper>
  );
};

export default List;
