import React from 'react';
import PropTypes from 'prop-types';

const GradeItem = ({name, gender, kor, eng, mat, sin}) => {
    const sum = parseInt(kor + eng + mat + sin);
    const avg = parseInt(sum / 4);
    return (
        <tr>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{kor}</td>
            <td>{eng}</td>
            <td>{mat}</td>
            <td>{sin}</td>
            <td>{sum}</td>
            <td>{avg}</td>
        </tr>
    );
};

GradeItem.propTypes = {
    name : PropTypes.string.isRequired,
    gender: PropTypes.string,
    kor: PropTypes.number,
    eng: PropTypes.number,
    mat: PropTypes.number,
    sin: PropTypes.number
};

GradeItem.defaultProps = {
    kor: 0,
    eng: 0,
    mat: 0,
    sin: 0
};
export default GradeItem;