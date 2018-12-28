import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  button: {
    width: '100%',
  },
  container: {
    margin: 10,
  }
};

function shuffle (array) {
  for(var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function rndDist(names, tasks, answers, ct) {
  for (var i = 0; i < Math.floor(tasks.length/names.length); i++) {
    names = shuffle(names);
    for (var j = 0; j < names.length; j++) {
      answers.push({task: tasks[i*names.length+j], name: names[j]});
      ct[names[j]].push(i*names.length+j+1);
    }
  }
  names = shuffle(names);
  for (var i = Math.floor(tasks.length/names.length)*names.length; i < tasks.length; i++){
    answers.push({task: tasks[i], name: names[i%names.length]});
    ct[names[i%names.length]].push(i+1);
  }
}

function seqDist(names, tasks, answers, ct) {
  var c = 0;
  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < Math.ceil(tasks.length/names.length) - ( (i < tasks.length % names.length) || (tasks.length % names.length == 0) ? 0 : 1); j++){
      answers.push({task: tasks[c], name: names[i]});
      c++;
      ct[names[i]].push(c);
    }
  }
}

class App extends Component {

  state = {
    constrols: {
      checkboxes: {
        addNumbers: {
          label: 'Добавлять номера заданий',
          value: true,
        },
        shuffleNames: {
          label: 'Перемешать имена',
          value: true,
        },
        shuffleTasks: {
          label: 'Перемешать задания',
          value: false,
        },
      }
    },
    values: {
      names: [],
      tasks: []
    },
    error: false,
    results: false
  };

  handleChange = name => (event, value) => {
    this.setState((state, props) => {
      state.constrols.checkboxes[name].value = value;
      return state;
    });
  };

  handleText = name => event => {
    let value = event.target.value.split('\n');
    this.setState((state, props) => {
      state.values[name] = value;
      return state;
    });
  }

  handleClick = event => {
    let { names, tasks } = this.state.values,
      { shuffleNames, shuffleTasks } = this.state.constrols,
      answers = [],
      relation = {};// name - task[]
    if (shuffleNames)
      names = shuffle(names);
    if (shuffleTasks)
      tasks = shuffle(tasks);
    for (let name of names)
      relation[name] = [];
    if (names.length < 2 || tasks.length < 2 || rndDist(names, tasks, answers, relation) == -1) {
      this.setState({ error: true });
      return;
    }
    this.setState({
      error: false,
      results: { names, answers, relation }
    });
  }

  render() {
    let { classes } = this.props,
      { error, results } = this.state,
      { checkboxes } = this.state.constrols,
      addNumbers = checkboxes.addNumbers.value,
      checkboxNames = Object.keys(checkboxes);

    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Великий Рандом
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <div className={classes.container}>
              <TextField
                fullWidth
                label="Участники"
                defaultValue={this.state.values.names.join('\n')}
                multiline
                rows="30"
                margin="normal"
                variant="outlined"
                onChange={this.handleText('names')}
              />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className={classes.container}>
              <TextField
                fullWidth
                label="Задачи"
                defaultValue={this.state.values.tasks.join('\n')}
                multiline
                rows="30"
                margin="normal"
                variant="outlined"
                onChange={this.handleText('tasks')}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.container}>
              <Button color="primary" className={classes.button} onClick={this.handleClick}>
                Распределить
              </Button>
            </div>
          </Grid>
          <Grid item xs={9}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Опции:</FormLabel>
              <FormGroup>
                {checkboxNames.map((name, id) => (
                  <FormControlLabel key={id}
                    control={
                      <Checkbox checked={checkboxes[name].value} onChange={this.handleChange(name)} value={name} color="primary" />
                    }
                    label={checkboxes[name].label}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          {error &&<Grid item xs={12}>
            <Typography variant="h6" color="inherit">
              Ошибка
            </Typography>
          </Grid>}
          {results && <Grid item xs={12}>
            <Typography variant="h6" color="inherit">Кратко</Typography>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Имя</TableCell>
                  <TableCell align="left">Задания</TableCell>
                  <TableCell align="right">Количество</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.names.map((name, id) =>(
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">{name}</TableCell>
                    <TableCell align="left">{results.relation[name].join(', ')}</TableCell>
                    <TableCell align="right">{results.relation[name].length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography variant="h6" color="inherit">Подробно</Typography>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {addNumbers && <TableCell>Номер</TableCell>}
                  <TableCell align="left">Задание</TableCell>
                  <TableCell align="left">Исполнитель</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.answers.map((answer, id) =>(
                  <TableRow key={id}>
                    {addNumbers && <TableCell>{id + 1}</TableCell>}
                    <TableCell align="left">{answer.task}</TableCell>
                    <TableCell align="left">{answer.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>}
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles)(App);
