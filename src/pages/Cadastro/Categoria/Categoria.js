import React, { useState } from "react"
import { Link } from "react-router-dom"
import Template from "../../../Template/Template"
import FormField from "../../../components/FormField/FormField"
import { Button } from "components/Button/Button"

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([])
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000000"
  }
  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    )
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
        onSubmit={function handleSubmit(e) {
          e.preventDefault()
          setCategorias([...categorias, values])

          setValues(valoresIniciais)
        }}
      >
        <FormField
          label="Nome da Categoria"
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

        <Button type="submit">Cadastrar</Button>
      </form>

      <ul>
        {categorias.map(categoria => (
          <>
            <li key={`${categoria.nome}`}>{categoria.nome}</li>
          </>
        ))}
      </ul>

      <Link to="/">Voltar</Link>
    </Template>
  )
}

export default CadastroCategoria
