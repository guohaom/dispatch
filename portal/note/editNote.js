import React from 'react';

import RaisedButton from 'material-ui/RaisedButton'


const EditNote = React.createClass({

       getInitState(){
           return ({
               
           })
       },


    // componentDidMount() {
    //     var result = "";
    //     this.setState({
    //         content: result
    //     })
    // }

    render(){
        return(
            <div>
                <RaisedButton label="添加日志" fullWidth={true} />
            </div>
        );
    }


})

export default EditNote;