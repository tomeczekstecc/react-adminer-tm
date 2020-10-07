import React from 'react';
import { Create, SimpleForm, TextInput, EmailField} from 'react-admin';

const UserCreate = (props) => {
  return (
    <Create title='Utwórz' {...props}>
      <SimpleForm>

        <TextInput source='name' />
        <TextInput source='email' />

      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
