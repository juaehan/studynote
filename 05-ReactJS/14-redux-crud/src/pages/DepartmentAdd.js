import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import regexHelper from '../libs/RegexHelper';

import { useSelector, useDispatch } from 'react-redux';
import {getList, deleteItem, postItem} from '../slices/DepartmentSlice';


const TableEx = styled(Table)`
    margin-bottom: 15px;

    .inputWrapper{
        padding: 0;
        position: relative;
        text-align: left;

        .field{
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0 10px;
            outline: none;
            font-size: 14px;
        }

        label{
            margin-left: 7px;
            margin-right: 10px;

            input{
                margin-right: 10px;
            }
        }
    }
`;
const DepartmentAdd = memo(() => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {loading, error} = useSelector((state) => state.DepartmentSlice);

    const onSubmit = React.useCallback((e) => {
        e.preventDefault();

        const current = e.target;

        try{
            regexHelper.value(current.dname, '학과이름을 입력하세요.');
            regexHelper.kor(current.dname, '학과이름은 한글로 입력 가능합니다.');
            regexHelper.minLength(current.dname, 2, '학과이름은 최소 2글자 이상 입력해야 합니다.');
            regexHelper.maxLength(current.dname, 20, '학과이름은 최대 20글자까지 입력 가능합니다.');

            regexHelper.value(current.loc, '학과위치를 입력하세요.');
            regexHelper.minLength(current.loc, 2, '학과위치는 최소 2글자 이상 입력해야 합니다.');
            regexHelper.maxLength(current.loc, 20, '학과위치는 최대 20글자까지 입력 가능합니다.');
        } catch(e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        dispatch(postItem({
            dname: current.dname.value,
            loc: current.loc.value
        })).then(() => {
            navigate('/');
        });
    }, [dispatch, navigate]);

    return (
        <>
            <Spinner visible={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>학과이름</th>
                                <td className="inputWrapper"><input className="field" type="text" name="dname" /></td>
                            </tr>
                            <tr>
                                <th>학과위치</th>
                                <td className="inputWrapper"><input className="field" type="text" name="loc" /></td>
                            </tr>
                        </tbody>
                    </TableEx>

                    <div style={{textAlign: 'center'}}>
                        <button type="submit">저장하기</button>
                    </div>
                </form>
            )}   
        </>
    );
});

export default DepartmentAdd;