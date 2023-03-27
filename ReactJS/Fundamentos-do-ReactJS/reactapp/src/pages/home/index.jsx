import React, { useState, useEffect } from 'react';
import './styles.css'

import {Card} from '../../components/Card';

export function Home() {

  /*let studentName = "";

  function handleNameChange(name) {
    studentName = name;
  }*/

  // O estado guarda dois elementos. O primeiro é onde será guardada o conteúdo do estado e a função que atualiza esse estado
  // Esse primeiro estado atualiza o primeiro nome 
  const [studentName, setStudentName] = useState("");

  // Armazenando os estudantes da lista de presença
  // Aqui armazena somente a lista de estudantes
  const [students, setStudents] = useState([]);

  // Criando um estado que tem como padrão de valor um objeto
  const [user, setUser] = useState({ name: '', avatar: ''});

  // Toda vez que chama a função handleAddStudent será criado um objeto com as propriedades name e time que,após ser montado o objeto, será adicionado no estado setStudents.
  function handleAddStudent() {
    const newStudent = {
      // Usando o componente que guarda o conteúdo do estado
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    
    // Inicialmente irá sobrepor as informações por causa do princípio da Imutabilidade. Sendo assim, é necessário recuperar o que tinha anteriormente no estado e criar um "novo valor" para "acumular" os valores/estudantes, por isso usaremos o prevState. Na imutabilidade, não será alterado o valor, e sim substituir este por inteiro. 
    // Usamos o ...(spredoperator) para pegar o conteúdo anterior e inserir ele dentro desse array e não fazer arrays dentro de outros arrays.
    // Recupera o conteúdo anterior no estado do ....prevState, cria um novo conteúdo no novo array do newStudent
    setStudents(prevState => [...prevState, newStudent]);
  }

  // UseEffect
  /*useEffect(() => {
    console.log("useEffect foi chamado!");
  }, [students, setStudentName]);*/

  // Consumindo API
  useEffect(() => {
    fetch('https://api.github.com/users/isaberamos')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/isaberamos')
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
    })
  }

  fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar}alt="Foto de perfil"/>
        </div>
      </header>

        <input type="text" placeholder="Digite o nome..." 
        // Propriedade que entrega um evento quando a propriedade de um evento muda. O event.target.event retorna o valor atualizado
        onChange={(event) => setStudentName(event.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>Adicionar</button>

        {
          // Criando dentro do student as propriedades name e student
          students.map((student) => (
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time}
            />
          ))}

    </div>
    
  );
}

export default Home;