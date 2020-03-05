import React from 'react';

class TableOne extends React.Component {

        render() {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Year
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.table.map((entry) => {
                            return (
                                <tr>
                                    <td>{entry.title}</td>
                                        <td>{entry.year}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )
        }

}

export default TableOne;