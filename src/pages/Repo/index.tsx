import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StarIcon, 
  ForkIcon, 
  LinkButton, 
  GithubIcon 
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/KelvynLenis'}>
          KelvynLenis
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/KelvynLenis/ui-clone'}>
          ui-clone
        </Link>
      </Breadcrumb>

      <p>Contais some ui clones</p>
      
      <Stats>
      <li>
        <StarIcon />
        <b>7</b>
        <span>stars</span>
      </li>
      <li>
        <ForkIcon />
        <b>0</b>
        <span>forks</span>
      </li>
      </Stats>

      <LinkButton href={'https://github.com/KelvynLenis'} >
        <GithubIcon />
        <span>View on github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;