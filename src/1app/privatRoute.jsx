import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { LINKS_ADMIN } from '../6shared/consts'
export default function PrivatRoute({ ...props }) {
  const auth = useSelector((state) => state.app.auth)
  return auth ? <Outlet /> : <Navigate to={LINKS_ADMIN.auth.href} replace={true} />
}
