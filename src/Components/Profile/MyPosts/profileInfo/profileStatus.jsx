import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activatedEditMode}>{this.props.status || 'No status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                        <span onChange={this.onStatusChange} onBlur={this.deactivatedEditMode}>
                            <input autoFocus={true} value={this.state.status}/>
                        </span>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;