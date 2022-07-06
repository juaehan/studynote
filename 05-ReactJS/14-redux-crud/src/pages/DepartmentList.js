import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import { useSelector, useDispatch } from 'react-redux';
import {getList, deleteItem} from '../slices/DepartmentSlice';

import Dilog from './Dilog';

const LinkContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
`;

const TopLink = styled(NavLink)`
    margin-right: 15px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #000;
    text-decoration: none;

    &:hover{
        background-color: #06f2;
    }
`;

const DepartmentList = memo(() => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.DepartmentSlice);

    React.useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    /** 수정 */
    const onEditClick = e => {
        e.preventDefault();
        const current = e.target;
        const id = current.dataset.id;
        navigate(`/department_edit/${id}`);
    };

    /** 삭제 */
    const [show, setShow] = React.useState(false);
    // const onDeleteClick = e => {
    //     e.preventDefault();
            
    //     const current = e.target;

    //     if(window.confirm(`정말 ${current.dataset.dname}를 삭제하시겠습니까?`)){
    //         dispatch(deleteItem({
    //             id: current.dataset.id
    //         }));
    //     }
    // };
    
    const onDeleteClick = () => {
        setShow(true);
    }

    // const confirm = (e) => {
    //     // e.preventDefault();
    //     // const current = e.current.target;
    //     // console.log(current);
    //     const current = e.target;
    //     dispatch(deleteItem({
    //         id: e.dataset.id
    //     }))
    //     setShow(false);
    // }

    const cancle = () => {
        setShow(false);
    }

    return (
        <>
            <div>
                <Spinner visible={loading} />

                <LinkContainer>
                    <TopLink to="department_add">학과정보 추가하기</TopLink>
                </LinkContainer>

                {error ? (
                    <ErrorView error={error} />
                ) : data && (
                    <Table>
                        <thead>
                            <tr>
                                <th>학과번호</th>
                                <th>학과명</th>
                                <th>학과위치</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => {
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.dname}</td>
                                            <td>{item.loc}</td>
                                            <td>
                                                <button type="button" data-id={item.id} onClick={onEditClick}>수정하기</button>
                                            </td>
                                            <td>
                                                <button type="button" data-id={item.id} data-dname={item.dname} onClick={onDeleteClick}>삭제하기</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan='5' align='center'>
                                        검색결과가 없습니다.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                )}
            </div>
            
            <Dilog 
                show={show}
                cancle={cancle}
            />
        </>
    );
});

export default DepartmentList;