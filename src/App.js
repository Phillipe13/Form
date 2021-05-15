import './App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

/*
Nome completo*
Idade* (> 16 anos)
CPF* (000.000.000-00)
Matrícula* (Utilize o formato adotado na UEPB)
Curso*
Endereço*
Número
Complemento
Bairro*
Cidade*
Estado* (Lista das UF's - XX)
CEP* (00000-000)
*/

const schema = Yup.object().shape({
  nome:Yup.string().required(),
  idade:Yup.number().min(16).required()
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
