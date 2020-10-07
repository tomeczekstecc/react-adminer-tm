import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='Utwórz' {...props} label='Utwórz'>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='body' />
        <DateInput label='Published at' source='publishedAt' />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
