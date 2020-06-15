import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  LongTextInput,
  Edit,
  DisabledInput,
  Create,
  DeleteButton
} from 'react-admin';

export const CommentCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='name' label='Name' />
        <TextInput source='email' label='Email' />
        <LongTextInput source='body' label='Body' />
      </SimpleForm>
    </Create>
  )
  
  export const CommentEdit = (props) => (
    <Edit title='Comment Edit' {...props}>
      <SimpleForm>
        <DisabledInput label='id' source='id' />
        <TextInput source='name' label='Name' />
        <TextInput source='email' label='Email' />
        <LongTextInput source='body' label='Body' />
      </SimpleForm>
    </Edit>
  )
  
  export const CommentList = (props) => (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' label='Name' />
        <TextField source='email' label='Email' />
        {/* <TextField source='title' label='Title' /> */}
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )