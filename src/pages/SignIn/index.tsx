import { Background, Form, FormContainer, InputsContainer, SignInContainer, SingUp } from "./styles";
import { Lock, EnvelopeSimple } from "phosphor-react"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <SignInContainer>
    <FormContainer>
      <Form>
        <h1>Empire God of War</h1>

        <div>
          <strong>Os Deuses estão esperando por você, Espartano! </strong>
          {/* <span>Faça login e encare vários desafios no universo de Gof of War!</span> */}
          <span>No universo de God of War existe milhares de inimigos. Kratos está entediado sem aventuras, faça Login e diverta-se com as lâminas do caos!</span>
        </div>

      <InputsContainer>

      <Input 
        type="text"
        placeholder="E-mail"
        icon={<EnvelopeSimple size={20}/>}
      />

      <Input 
        type="text"
        placeholder="Senha"
        icon={<Lock size={20}/>}
      />

      </InputsContainer>
       
      <Button title="Entrar"/>

      <SingUp>
        <span>Ainda não tem uma conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </SingUp>

      </Form>
      </FormContainer>
      <Background />
    </SignInContainer>
  )
}