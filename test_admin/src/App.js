import React from 'react'

import { Admin, Resource, ListGuesser } from 'react-admin';

import Dashboard from './Dashboard';

import dataProvider from './dataProvider'

export default function App() {
  return (
    <Admin dashboard={()=><Dashboard name='David Sling' />} dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
  )
}
