import React, { memo, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import {useSelector, useDispatch} from 'react-redux';
import {getList} from '../slices/DepartmentSlice';

// 입력 컨트롤들을 포함하는 박스
const ControlContainer = styled.form`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding:10px 0;

    .controll {
        margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        padding: 7px 10px 5px 10px;
        border: 1px solid #ccc;
    }

    .clickable{
        background-color: #fff;
        color: #000;
        text-decoration: none;
        cursor: pointer;

        &:hover{
            background-color: #06f2;
        }

        &:active{
            transform: scale(0.9 0.9);
        }
    }
`;

const DepartmentList = memo(() => {
    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const {loading, data, error} = useSelector((state) => state.DepartmentSlice);

    /** 백엔드에 전달할 파라미터 상태값 */
    // 검색어
    const [query, setQuery] = useState('');
    // 목록 수
    const [rows, setRows] = useState(10);

    /** 입력요소에 접근할 참조변수 */
    const refTextInput = useRef();

    /** 페이지 마운트와 동시에 실행되는 hook -> 리덕스를 통해 목록을 조회한다. */
    React.useEffect(() => {
        dispatch(getList({
            query: query,
            rows: rows
        }));
    }, [dispatch, query, rows]);

    /** 검색 이벤트 */
    const onSearchSubmit = useCallback(e => {
        e.preventDefault();

        const input = refTextInput.current;
        setQuery(input.value);
    }, []);

    /** 목록 수 변경 이벤트 */
    const onRowsChange = useCallback(e => {
        e.preventDefault();
        setRows(parseInt(e.currentTarget.value));
    },[]);

    return (
        <div>
            <Spinner visible={loading} />

            <ControlContainer onSubmit={onSearchSubmit}>
                <select name='rows' className='controll' defaultValue={rows} onChange={onRowsChange}>
                    <option value="10">10개씩 보기</option>
                    <option value="20">20개씩 보기</option>
                    <option value="30">30개씩 보기</option>
                </select>
                <input type='text' name='query' className='controll' defaultValue={query} ref={refTextInput} />
                <button type='submit' className='controll clickable'>검색</button>
                <NavLink to="department_add" className="controll clickable">학과정보 추가하기</NavLink>
            </ControlContainer>

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
                        {data.item.length > 0 ? (
                            data.item.map((item, index) => {
                                return (
                                    <tr key={item.deptno}>
                                        {/** 데이터를 텍스트로 출력 */}
                                        <td>{item.deptno}</td>
                                        <td>{item.dname}</td>
                                        <td>{item.loc}</td>
                                        <td>
                                            <button type='button' data-deptno={item.deptno}>
                                                수정하기
                                            </button>
                                        </td>
                                        <td>
                                            <button type='button' data-deptno={item.deptno} data-dname={item.dname}>
                                                삭제하기
                                            </button>
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
    );
});

export default DepartmentList;