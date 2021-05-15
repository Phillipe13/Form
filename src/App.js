import './App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const schema = Yup.object().shape({
  nome:Yup.string().required(),
  idade:Yup.number().min(16).required(),
  cpf:Yup.string().required(),
  matricula:Yup.number().length(9).required(),
  curso:Yup.string().required(),
  endereco:Yup.string().required(),
  numero:Yup.number(),
  complemento:Yup.string(),
  bairro:Yup.string().required(),
  cidade:Yup.string().required(),
  estado:Yup.string().length(2).required(),
  cep:Yup.string().required()

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
              <label htmlFor="endereco">Endereço</label>
              <Field id="endereco" name="endereco" type="text"/>
              {errors.endereco &&(
                <div>{errors.endereco}</div>
              )}
            </div>
            <div>
              <label htmlFor="matricula">Matricula</label>
              <Field id="matricula" name="matricula" type="number"/>
              {errors.matricula &&(
                <div>{errors.matricula}</div>
              )}
            </div>
            <div>
              <label htmlFor="numero">Número</label>
              <Field id="numero" name="numero" type="number"/>
              {errors.numero &&(
                <div>{errors.numero}</div>
              )}
            </div>
            <div>
              <label htmlFor="complemento">Complemento</label>
              <Field id="complemento" name="complemento" type="text"/>
              {errors.complemento &&(
                <div>{errors.complemento}</div>
              )}
            </div>
            <div>
              <label htmlFor="bairro">Bairro</label>
              <Field id="bairro" name="bairro" type="text"/>
              {errors.bairro &&(
                <div>{errors.bairro}</div>
              )}
            </div>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <Field id="cidade" name="cidade" type="text"/>
              {errors.cidade &&(
                <div>{errors.cidade}</div>
              )}
            </div>
            <div>
              <label htmlFor="estado">Estado</label>
              <Field id="estado" name="estado" type="text"/>
              {errors.estado &&(
                <div>{errors.estado}</div>
              )}
            </div>
            <div>
              <label htmlFor="cep">CEP</label>
              <Field id="cep" name="cep" type="text"/>
              {errors.cep &&(
                <div>{errors.cep}</div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
