import styled from "styled-components";
import { GITHUB_REPO, TWITTER, LINKED_IN, CV } from "../utils/Consts";
import { GitHubIcon, TwitterIcon, LinkedInIcon, CVIcon } from "./Icons";

const Container = styled.div`
  position: sticky;
  top: 0;

  background: hsl(35, 31%, 88%, 80%);
  backdrop-filter: blur(8px);
  z-index: 999;
  width: 100%;

  max-width: 100vw;
  overflow-x: hidden;

  border-bottom: 2px solid rgb(0 0 0 / 5%);
`;

const InnerNav = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 1.15em;

  padding: 1.25rem 2rem;

  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  left: 0;
  font-size: 1.25em;
  font-weight: bold;
  color: var(--text-secondary);
  margin-right: 20px;
`;

const StyledLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-weight: 900;
  margin-left: 20px;
  flex: 1;

  li {
    transition: 0.15s ease-in-out;
    color: var(--text-muted);

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  justify-self: right;

  svg {
    display: block;
    height: 30px;
    color: var(--text-muted);

    transition: 0.15s ease-in-out;

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <InnerNav>
        <Title>Ravi Gyani</Title>
        <Socials>
          <a href={GITHUB_REPO} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href={TWITTER} target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href={LINKED_IN} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href={CV} target="_blank" rel="noreferrer">
            <CVIcon />
          </a>
        </Socials>
      </InnerNav>
    </Container>
  );
};

export default Navbar;
