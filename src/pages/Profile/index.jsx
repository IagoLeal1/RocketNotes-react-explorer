import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from "./styles";

export function Profile(){
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="http://github.com/IagoLeal1.png" 
          alt="Foto do Usuário" />

          <label htmlFor="avatar">
          <FiCamera />

          <input
            id="avatar"
            type="file"
          />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha Atual"
          type="Password"
          icon={FiLock}
        />

        <Input 
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />

      </Form>

    </Container>
  )
}