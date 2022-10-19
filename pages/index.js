import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/userSlice';

export default function Home() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(getUser());
  });

  return (
    <ul>
      {user.map((item, index) => (
        <li key={index}>
          {item.name} - {item.city}
        </li>
      ))}
    </ul>
  )
}
