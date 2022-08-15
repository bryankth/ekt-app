import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { Ektpages } from '../ekt'
import { useAuth } from '../ekt/hooks/useAuth'

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuth();
  // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

  useEffect(() => {
      checkAuthToken();
  }, [])
  
  if ( status === 'checking' ) {
      return (
          <h3>Cargando...</h3>
      )
  }
  return (
    <Routes>
        { 
            (status === 'not-authenticated')
          ?(
          <>
            <Route path="/auth/*" element={ <Login /> } />
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
          </>
          ) 
          : (
            <>
              <Route path="/*" element={ <Ektpages /> } />
              <Route path="/*" element={ <Navigate to="/" /> } />
            </>
          )
        }
    </Routes>
  )
}
