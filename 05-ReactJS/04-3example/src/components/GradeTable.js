import React from 'react';
import { useParams } from 'react-router-dom';
import GradeItem from './GradeItem';
import data from '../GradeData';
import Meta from '../components/Meta';

const GradeTable = () => {
    const {grade} = useParams();
    console.log(grade);

    const key = `${grade}학년`;
    console.log(key);
    
    const currentData = data[key];
    console.log(currentData);
    return (
        <div>
            <Meta title={`${key} ::: React 연습문제`} url={window.location.href} />
            <h2>{key}</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>성별</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((v, i) => {
                        return(
                            <GradeItem 
                                key={i}
                                name={v.이름}
                                gender={v.성별}
                                kor={v.국어}
                                eng={v.영어}
                                mat={v.수학}
                                sin={v.과학}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GradeTable;