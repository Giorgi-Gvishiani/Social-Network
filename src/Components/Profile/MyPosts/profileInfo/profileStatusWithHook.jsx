import React, {useEffect, useState} from "react";

const ProfileStatusWithStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activatedEditMode = () => {
        setEditMode(true)
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
            <div>
                <span onClick={activatedEditMode}>{props.status || 'No status'}</span>
            </div>
            }
            {editMode &&
            <div>
                        <span onChange={onStatusChange} onBlur={deactivatedEditMode}>
                            <input autoFocus={true} value={status}/>
                        </span>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithStatus;