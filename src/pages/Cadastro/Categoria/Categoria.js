import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template from './../../../Template/Template';
import FormField from '../../../components/FormField/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  };
  const [values, setValues] = useState(valoresIniciais);

  function setValue(fieldName, value) {
    setValues({
      ...values,
      [fieldName]: value
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  // Dois jeitos de fazer a mesma função
  // function handleChange(e) {
  //   const { getAttribute, value } = e.target;
  //   setValue(getAttribute('name'), value);
  // }

  return (
    <Template>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={event => {
          console.log(categorias);
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {categorias.map(categoria => (
          <li key={categoria.nome}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">Voltar</Link>
    </Template>
  );
}

export default CadastroCategoria;
