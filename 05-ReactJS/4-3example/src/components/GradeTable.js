import React from 'react';

import {useParams} from 'react-router-dom';
import GradeItem from './GradeItem';
import Meta from './Meta';
import data from '../GradeData';

const GradeTable = () => {
    /* <내가 한 코딩>
    console.clear();
    const params = useParams(); // {grade: '1'}
    console.log(params);
    const id = parseInt(params.grade);      // 1
    console.log(id);

    let gradeItem = null;
    
    for(const k in data){
        if(parseInt(k) == id){
            gradeItem = data[k];
            // console.log(gradeItem);
        }
        // console.log(parseInt(k));
        // console.log(data[k]);
        // console.log(gradeItem);
    }
    */

    /* <풀이> */
    // URL을 통해 전달된 path 파라미터 추출
    const {grade} = useParams();

    // 파라미터를 활용하여 JSON의 key이름 조합만
    const key = `${grade}학년`;

    // JSON에서 필요한 데이터 추출
    const currentData = data[key];


    return(
        <div>
            <Meta title={`${key}:::React연습문제`} url={window.location.href} />
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
                    {/* <내가 한 코딩>
                    {gradeItem.map((v, i) => {
                        return(<GradeItem 
                                name = {v.이름}
                                gender = {v.성별}
                                kor = {v.국어}
                                eng = {v.영어}
                                mat = {v.수학}
                                sin = {v.과학} />)
                    })} 
                    */}
                    {currentData.map((v, i) => {
                        return (<GradeItem 
                            key = {i}
                            name = {v.이름}
                            gender = {v.성별}
                            kor = {v.국어}
                            eng = {v.영어}
                            mat = {v.수학}
                            sin = {v.과학}/>)
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default GradeTable;