import './App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  nome:Yup.string().required(),
  idade:Yup.number().min(16).required(),
  cpf:Yup.string().required(),
  curso:Yup.string().required(),
  endereco:Yup.string().required(),
  numero:Yup.number().required()  
})

function App() {
  
  return (
    <div ClassName = "App">
      <h1>Formulário</h1>
      <Formik
        validationSchema={schema}
        initialValues={
          {
            nome:'',
            idade:'',
            cpf:'',
            matricula:'',
            curso:'',
            endereço:'',
            numero:'',
            complemento:'',
            bairro:'',
            cidade:'',
            estado:'',
            cep:'',
          }
        }
      >
        {({errors})=>(
          <Form>
            <div>
              <label htmlFor="nome">Nome</label>
              <Field id="nome" name="nome" type="text"/>
              {errors.nome &&(
                <div>{errors.nome}</div>
              )}
            </div>
            <div>
              <label htmlFor="idade">Idade</label>
              <Field id="idade" name="idade" type="number"/>
              {errors.idade &&(
                <div>{errors.idade}</div>
              )}
            </div>
            <div>
              <label htmlFor="curso">Curso</label>
              <Field id="curso" name="curso" type="text"/>
              {errors.curso &&(
                <div>{errors.curso}</div>
              )}
            </div>
            <div>
              <label htmlFor="cpf">CPF</label>
              <Field id="cpf" name="cpf" type="text"/>
              {errors.cpf &&(
                <div>{errors.cpf}</div>
              )}
            </div>
            <div>
              <label htmlFor="endereco">Idade</label>
              <Field id="endereco" name="endereco" type="text"/>
              {errors.endereco &&(
                <div>{errors.endereco}</div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;