import { Background, Form, FormContainer, InputsContainer, SignInContainer, SingUp } from "./styles";
import { Lock, EnvelopeSimple } from "phosphor-react"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../../components/Button/styles";
import { api } from "../../lib/axios";
import { useGames } from "../../hooks/useGames";

const signInSchema = z.object({
  email: z.string().min(5).max(200),
  password: z.string().min(8).max(16)
})

type SignInInputs = z.infer<typeof signInSchema>

export function SignIn() {
  const { register, handleSubmit } = useForm<SignInInputs>({
    resolver: zodResolver(signInSchema)
  })

  return (
    <SignInContainer>
    <FormContainer>
      <Form >
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
        {...register("email")}
      />

      <Input 
        type="text"
        placeholder="Senha"
        icon={<Lock size={20}/>}
        {...register("password")}
      />

      </InputsContainer>
       
      <StyledButton type="submit" variant="red">
        Entrar
      </StyledButton>

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