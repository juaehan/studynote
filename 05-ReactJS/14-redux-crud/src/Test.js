import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {getList, getItem, postItem, putItem, deleteItem} from './slices/DepartmentSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.DepartmentSlice);

    useEffect(() => {
        //dispatch(getList());
        //dispatch(getList({query: 'MVC학과', page: 2, rows: 5}));
        //dispatch(getItem({deptno: 328}));
        //dispatch(postItem({dname: 'React.js', loc: '1403호'}));
        //dispatch(putItem({deptno: 326, dname: 'React.js수정정', loc: '1406호'}));
        dispatch(deleteItem({deptno: 326}));
    }, [dispatch]);

    return (
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <>
                    {JSON.stringify(data)}
                </>
            )
        )
    );
});

export default Test;