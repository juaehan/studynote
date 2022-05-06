import React from 'react';
import PropTypes from 'prop-types';
import GradeData from '../GradeData';

const GradeItem = ({name, grade, gender, kor, eng, math, sinc}) => {
    const sum = parseInt(kor + eng + math + sinc);
    const avg = parseInt(sum / 4)
    return(
        <tr align="center">
            <td><strong>{name}</strong></td>
            <td><strong>{grade}</strong></td>
            <td>{gender}</td>
            <td>{kor}</td>
            <td>{eng}</td>
            <td>{math}</td>
            <td>{sinc}</td>
            <td><strong>{sum}</strong></td>
            <td><strong>{avg}</strong></td>
        </tr>
    );
};

GradeItem.propTypes = {
    name: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
};

GradeItem.defaultProps = {
    kor: 0,
    eng: 0,
    math: 0,
    sinc: 0,
};

export default GradeItem;