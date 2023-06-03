import React, { useState } from "react";
import { Button } from "rsuite";



// Import the default CSS
import "rsuite/dist/rsuite.min.css";
function TableRows({ rows, tableRowRemove, onValUpdate }) {

    
    return rows.map((rowsData, index) => {
        const { name, value, type, notes } = rowsData;
        return (
            <tr key={index}>
                <td>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => onValUpdate(index, event)}
                        name="name"
                        className="form-control"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={value}
                        onChange={(event) => onValUpdate(index, event)}
                        name="value"
                        className="form-control"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={type}
                        onChange={(event) => onValUpdate(index, event)}
                        name="type"
                        className="form-control"
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={notes}
                        onChange={(event) => onValUpdate(index, event)}
                        name="notes"
                        className="form-control"
                    />
                </td>
                <td>
                    <Button color="red" appearance="primary"
                        onClick={() => tableRowRemove(index)}
                    >
                        Delete Object
                    </Button>
                </td>

            </tr>
        );
    });
}
function Table() {


    
    const [rows, initRow] = useState(["", "", ""]);
    const addRowTable = () => {
        const data = {
            name: "",
            value: "",
            type: "",
            notes: "",
        };
        initRow([...rows, data]);
    };
    const tableRowRemove = (index) => {
        const dataRow = [...rows];
        dataRow.splice(index, 1);
        initRow(dataRow);
    };
    const onValUpdate = (i, event) => {
        const { name, value, type, notes } = event.target;
        const data = [...rows];
        data[i][name] = value;
        initRow(data);
    };
    return (
        <>
            <h2 style={{
                backgroundColor: 'blue',
                width: '100%',
                height: '60px',
                textAlign: 'center',
                fontSize: 37,
                color: "white",
                fontFamily: "chalkboard",

            }} >Object Visualizer</h2>
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th style={{ fontSize: 17, fontFamily: "Helvetica-Bold", }} width="25%">Name</th>
                        <th style={{ fontSize: 17, fontFamily: "Helvetica-Bold", }} width="25%">Value</th>
                        <th style={{ fontSize: 17, fontFamily: "Helvetica-Bold", }} width="25%">Type</th>
                        <th style={{ fontSize: 17, fontFamily: "Helvetica-Bold", }} width="25%">Notes</th>
                        <th>
                            <Button color="green" appearance="primary" onClick={addRowTable}>
                                Create Object
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TableRows
                        rows={rows}
                        tableRowRemove={tableRowRemove}
                        onValUpdate={onValUpdate}
                    />
                </tbody>
            </table>
           
           
        </>
    );
}
export default Table;