import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

import GridItem from './gridItem';
import Button from './button';
import Textarea from './textarea';
import RadioGroup from './radioGroup';
import CheckboxGroup from './checkboxGroup';
import ShortTable from './shortTable';
import DetailTable from './detailTable';

const styles = {
  container: {
    padding: 20,
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
        label: 'Show task numbers',
        value: true,
      },
    },
    distributionTypes: [
      {
        label: 'Random',
        value: 'random'
      },
      {
        label: 'Sequential',
        value: 'sequential'
      },
      {
        label: 'Weight',
        value: 'weight',
        disabled: true
      }
    ],
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
    let { names, tasks, distributionType } = this.state,
      answers = [],
      relation = {};// name - task[]
    names = names.split('\n');
    tasks = tasks.split('\n');
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
    const { classes } = this.props;
    const { error, results, checkboxes, distributionTypes } = this.state;
    const addNumbers = checkboxes.addNumbers.value;

    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Great random
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <GridItem size={3}>
            <Textarea
              label="Members"
              value={this.state.names}
              onChange={this.handleChange('names')}
            />
          </GridItem>
          <GridItem size={9}>
            <Textarea
              label="Tasks"
              value={this.state.tasks}
              onChange={this.handleChange('tasks')}
            />
          </GridItem>
          <GridItem size={3}>
            <Button primary onClick={this.handleDistribute}>
              Distribute
            </Button>
            <Button onClick={this.handleShuffle('names')}>
              Shuffle members
            </Button>
            <Button onClick={this.handleShuffle('tasks')}>
              Shuffle tasks
            </Button>
          </GridItem>
          <GridItem size={3}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Distribution type</FormLabel>
              <RadioGroup
                label="DistributionType"
                name="distributionType"
                value={this.state.distributionType}
                onChange={this.handleChange('distributionType')}
                items={distributionTypes}
              />
            </FormControl>
          </GridItem>
          <GridItem size={3}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Parameters</FormLabel>
              <Typography variant="body1" style={{ padding: 12, paddingLeft: 0 }}>
                No parameters
              </Typography>
            </FormControl>
          </GridItem>
          <GridItem size={3}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Options:</FormLabel>
              <CheckboxGroup
                items={checkboxes}
                onChange={this.handleCheck}
              />
            </FormControl>
          </GridItem>
          {error && <GridItem size={12}>
            <Typography variant="h6" color="inherit">
              Error
            </Typography>
          </GridItem>}
          {results && <GridItem size={12}>
            <Typography variant="h6" color="inherit">Short</Typography>
            <ShortTable
              names={results.names}
              relation={results.relation}
            />
            <Typography variant="h6" color="inherit" style={{ marginTop: 20 }}>Details</Typography>
            <DetailTable
              addNumbers={addNumbers}
              answers={results.answers}
            />
          </GridItem>}
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles)(App);
