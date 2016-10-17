import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



export default class TaskList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
      tableData : []
    };
  }

  componentDidMount(){
    console.log("begin fetch data");
    fetch("http://localhost:3000/data").then(

           response => response.json().then( value => {
            console.log(value);
            this.setState({tableData: value});
           } )
    )
  
  }
    render(){
        var tableData = this.state.tableData;
        return(

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.map( (row, index) => (
                        <TableRow key={index} selected={row.selected}>
                            <TableRowColumn>{index}</TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.status}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            
            </Table>

        )
    }

}

