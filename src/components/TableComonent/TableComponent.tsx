// src/TableComponent.tsx
import React, { useEffect, useState } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Post } from '../../DataModel/post';

const TableComponent: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the data', error);
                setLoading(false);
            });
    }, []);

    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'User ID', width: 150 },
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'body', headerName: 'Body', width: 600 }
    ];

    return (
        <div style={{  width: '100%' }}>
            <DataGrid
                rows={posts}
                columns={columns}
                rowHeight={50}
                loading={loading}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 10,
                      },
                    },
                  }}
                  pageSizeOptions={[10]}
                  autoHeight
            />
        </div>
    );
};

export default TableComponent;
