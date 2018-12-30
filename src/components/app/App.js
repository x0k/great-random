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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
  for(let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function rndDist(names, tasks, answers, ct) {
  for (let i = 0; i < Math.floor(tasks.length/names.length); i++) {
    names = shuffle(names);
    for (let j = 0; j < names.length; j++) {
      answers.push({task: tasks[i*names.length+j], name: names[j]});
      ct[names[j]].push(i*names.length+j+1);
    }
  }
  names = shuffle(names);
  for (let i = Math.floor(tasks.length/names.length)*names.length; i < tasks.length; i++){
    answers.push({task: tasks[i], name: names[i%names.length]});
    ct[names[i%names.length]].push(i+1);
  }
}

function seqDist(names, tasks, answers, ct) {
  let c = 0;
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < Math.ceil(tasks.length/names.length) - ( (i < tasks.length % names.length) || (tasks.length % names.length === 0) ? 0 : 1); j++){
      answers.push({task: tasks[c], name: names[i]});
      c++;
      ct[names[i]].push(c);
    }
  }
}

function massDist () {

}

function dst(type, names, tasks, answers, ct) {
  switch(type) {
  case 'random':
    return rndDist(names, tasks, answers, ct);
  case 'sequential':
    return seqDist(names, tasks, answers, ct);
  case 'weight':
    return massDist(names, tasks, answers, ct);
  default:
    return -1;
  }
}

class App extends Component {

  state = {
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
    },
    names: '',
    tasks: '',
    distributionType: 'random',
    error: false,
    results: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  handleCheck = name => (event, value) => {
    this.setState((state, props) => {
      state.checkboxes[name].value = value;
      console.log(state.checkboxes);
      return state;
    });
  }

  handleShuffle = name => event => {
    this.setState((state, props) => {
      let items = state[name].split('\n');
      state[name] = shuffle(items).join('\n');
      return state;
    });
  }

  handleDistribute = event => {
    let { names, tasks, checkboxes, distributionType } = this.state,
      { shuffleNames, shuffleTasks } = checkboxes,
      answers = [],
      relation = {};// name - task[]
    names = names.split('\n');
    tasks = tasks.split('\n');
    if (shuffleNames.value)
      names = shuffle(names);
    if (shuffleTasks.value)
      tasks = shuffle(tasks);
    for (let name of names)
      relation[name] = [];
    if (names.length < 2 || tasks.length < 2) {
      this.setState({ error: true });
      return;
    }
    dst(distributionType, names, tasks, answers, relation);
    this.setState({
      error: false,
      results: { names, answers, relation }
    });
  }

  render() {
    let { classes } = this.props,
      { error, results, checkboxes } = this.state,
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
                label="Исполнители"
                value={this.state.names}
                multiline
                rows="30"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('names')}
              />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className={classes.container}>
              <TextField
                fullWidth
                label="Задачи"
                value={this.state.tasks}
                multiline
                rows="30"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('tasks')}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.container}>
              <Button color="primary" className={classes.button} onClick={this.handleDistribute}>
                Распределить
              </Button>
              <Button className={classes.button} onClick={this.handleShuffle('names')}>
                Перемешать имена
              </Button>
              <Button className={classes.button} onClick={this.handleShuffle('tasks')}>
                Перемешать задания
              </Button>
            </div>
          </Grid>
          <Grid item xs={3}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Опции:</FormLabel>
              <FormGroup>
                {checkboxNames.map((name, id) => (
                  <FormControlLabel key={id}
                    control={
                      <Checkbox checked={checkboxes[name].value} onChange={this.handleCheck(name)} value={name} color="primary" />
                    }
                    label={checkboxes[name].label}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.container}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Распределение</FormLabel>
                <RadioGroup
                  aria-label="DistributionType"
                  name="distributionType"
                  value={this.state.distributionType}
                  onChange={this.handleChange('distributionType')}
                >
                  <FormControlLabel value="random" control={<Radio color="primary"/>} label="Случайное" />
                  <FormControlLabel value="sequential" control={<Radio color="primary"/>} label="Последовательное" />
                  <FormControlLabel value="weight" control={<Radio color="primary"/>} label="Весовое" disabled/>
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.container}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Параметры</FormLabel>
                Нет параметров
              </FormControl>
            </div>
          </Grid>
          {error &&<Grid item xs={12}>
            <div className={classes.container}>
              <Typography variant="h6" color="inherit">
                Ошибка
              </Typography>
            </div>
          </Grid>}
          {results && <Grid item xs={12}>
            <div className={classes.container}>
              <Typography variant="h6" color="inherit">Кратко</Typography>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Исполнитель</TableCell>
                    <TableCell>Задания</TableCell>
                    <TableCell>Количество</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results.names.map((name, id) =>(
                    <TableRow key={id}>
                      <TableCell component="th" scope="row">{name}</TableCell>
                      <TableCell>{results.relation[name].join(', ')}</TableCell>
                      <TableCell>{results.relation[name].length}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Typography variant="h6" color="inherit">Подробно</Typography>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    {addNumbers && <TableCell>Номер</TableCell>}
                    <TableCell>Задание</TableCell>
                    <TableCell>Исполнитель</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results.answers.map((answer, id) =>(
                    <TableRow key={id}>
                      {addNumbers && <TableCell>{id + 1}</TableCell>}
                      <TableCell>{answer.task}</TableCell>
                      <TableCell>{answer.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Grid>}
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles)(App);
