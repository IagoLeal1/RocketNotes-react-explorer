import { FiPlus } from 'react-icons/fi';
import { Brand, Container, Content, Menu, Newnote, Search } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive
          />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: 'React',
              tags: [
                { id: '1', name: 'React' },
                { id: '2', name: 'Rocketseat' },
              ],
            }}
          />
        </Section>
      </Content>

      <Newnote to="/new">
        <FiPlus />
        Criar Nota
      </Newnote>
    </Container>
  );
}
