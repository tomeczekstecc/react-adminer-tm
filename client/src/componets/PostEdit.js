import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostEdit = (props) => {
  return (
    <Edit title='Utwórz' {...props} label='Utwórz'>
      <SimpleForm>
        <TextInput source='id' disabled />
        <TextInput source='title' />
        <TextInput source='body' />
        <DateInput label='Published at' source='publishedAt' />
      </SimpleForm>
    </Edit>
  );
}

export default PostEdit
