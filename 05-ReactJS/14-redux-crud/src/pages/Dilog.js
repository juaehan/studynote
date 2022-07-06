import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import {getList, deleteItem} from '../slices/DepartmentSlice';

const Dilog = memo(({show, cancle}) => {
    const dispatch = useDispatch();
    if(!show){
        return
    }
    
    const confirm = (e) => {
        const current = e.target;

        dispatch(deleteItem({
            id: current.dataset.id
        }));
    };

    return (
        <div className="overlay">
            <div className="dialog">
                <div className="dialog__content">
                    <h2>삭제하겠니?</h2>
                    <p>어쩌고 저쩌고</p>
                </div>
                <hr />
                <div className="dialog__footer">
                    <button className="dialog__cancel" onClick={cancle}>Cancle</button>
                    <button className="dialog__confirm" onClick={confirm}>응 삭제해</button>
                </div>
            </div>
        </div>
    );
});

export default Dilog;