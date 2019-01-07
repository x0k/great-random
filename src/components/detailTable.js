import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function (props) {
  const { addNumbers, answers } = props;
  return (
    <Table>
      <TableHead>
        <TableRow>
          {addNumbers && <TableCell>Number</TableCell>}
          <TableCell>Task</TableCell>
          <TableCell>Member</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {answers.map((answer, id) => (
          <TableRow key={id}>
            {addNumbers && <TableCell>{id + 1}</TableCell>}
            <TableCell>{answer.task}</TableCell>
            <TableCell>{answer.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}