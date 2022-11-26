import { Background, Form, FormContainer, InputsContainer, SignInContainer, SingUp } from "./styles";
import { Lock, EnvelopeSimple, User  } from "phosphor-react"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import bgImage from "../../assets/bg-signup.png"

export function SignUp() {
  return (
    <SignInContainer>
    <FormContainer>
      <Form>
        <h1>Empire God of War</h1>

        <div>
          <strong>Faça seu cadastro</strong>
          {/* <span>Faça login e encare vários desafios no universo de Gof of War!</span> */}
          <span>Cadastre-se para entrar na maior aventura dos 9 reinos!</span>
        </div>

      <InputsContainer>

      <Input 
        type="text"
        placeholder="Nome"
        icon={<User size={20}/>}
      />

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
       
      <Button title="Cadastrar"/>

      <SingUp>
        <Link to="/">
          Voltar para página de login
        </Link>
      </SingUp>

      </Form>
      </FormContainer>
      <Background />
    </SignInContainer>
  )
}