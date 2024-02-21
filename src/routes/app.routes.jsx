import { Route, Routes, Navigate } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}