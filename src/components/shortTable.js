import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function (props) {
  const { names, relation } = props;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Member</TableCell>
          <TableCell>Tasks</TableCell>
          <TableCell>Count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {names.map((name, id) =>(
          <TableRow key={id}>
            <TableCell component="th" scope="row">{name}</TableCell>
            <TableCell>{relation[name].join(', ')}</TableCell>
            <TableCell>{relation[name].length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}