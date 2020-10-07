import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin';

const PostEdit = (props) => {
  return (
    <Edit title='Utwórz' {...props} label='Utwórz'>
      <SimpleForm>
        <TextInput source='id' disabled />
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  );
}

export default PostEdit
