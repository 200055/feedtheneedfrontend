import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const BlogList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="blog_name" />
                <TextField source="short_desc" />
                <TextField source="blog_desc" />
                <TextField source="blog_category" label="Blog Category" />
                {/* <EditButton basePath="/users" />
                <DeleteButton basePath="/users" /> */}
            </Datagrid>
        </List>
    )
}