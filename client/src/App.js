import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './componets/PostList';
import PostCreate from './componets/PostCreate';
import PostEdit from './componets/PostEdit';
import UserList from './componets/UserList';
import UserCreate from './componets/UserCreate';
import UserEdit from './componets/UserEdit';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
