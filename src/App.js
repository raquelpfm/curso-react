import './App.css';
import React, {Component} from 'react';
import Table from './table';
import Form from './form';

class App extends Component {
  state = {
    alunos: []
  }
  removerAluno = (index) => {
    const{alunos} = this.state
    this.setState({
      alunos: alunos.filter((aluno, i) => {
        return i !== index
      })
    })
  }
  handleSubmit = (alunoDisc) => {
    this.setState({
        alunos: [...this.state.alunos, alunoDisc]
    })
}
  render() {
    const {alunos} = this.state
    return (
      <div className='container'>
        <Table alunos = {alunos}
          removerAluno={this.removerAluno} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;