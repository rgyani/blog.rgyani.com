import styled from "styled-components";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import { PORTFOLIOS } from "../utils/Portfolio";
import { ARTICLES } from "../utils/Articles";
import Popup from 'reactjs-popup';

import Image from "next/image";
import Head from "next/head";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Polka = styled.div`
  background: linear-gradient(transparent, var(--bg-primary)),
    url("/polka-dots.svg");
  position: absolute;
  inset: 0;
  height: 500px;
  z-index: 1;
`;

const ProfileContainer = styled.div`
  background: var(--bg-secondary);
  background-position:center bottom, left top;
	background-repeat:repeat-x;
	overflow:hidden;
	background-color:var(--bg-secondary);
  border-radius: 10px;
  padding: 10px;
  border: 2px solid rgb(0 0 0 / 12%);
  width:960px;
  margin: 0 auto;
  z-index:2;

  @media only screen and (min-width: 768px) and (max-width: 959px) {
    width:750px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width:470px;
  }
  @media only screen and (max-width: 479px) {
    width:300px;
  }
`;

const About = styled.div`
  float:left;
  margin-top:30px;
  width:490px;
  margin-left:20px;

  h1 {
    font-weight:900;
    color:#000;
    line-height:34px;
    margin-top:8px;
  }

  h3 {
    margin-top:15px;
    font-size:18px;
    color:#000;
    line-height:18px;
  }
  p {
    font-size:14px;
    margin-top:15px;
    color:#000;
    line-height:20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 959px) {
    width:700px;
    h3 {
      margin-top:45px;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width:420px;
		display:block;
  }
  @media only screen and (max-width: 479px) {
    width:280px;
		display:block;
		margin:10px 0 20px 0px;

    h1 {
      line-height:38px;
      font-size:30px;
      text-align:center;
    }
    h3 {
      font-size:14px;
      line-height:14px;
      text-align:center;
      display:inline-flex;
    }
    p {
      text-align:center;
    }
  }
`;



const PersonalInfo = styled.ul`
  float:left;
  margin-top:30px;
  width:310px;
  min-height:230px;
  margin-left:10px;
  background:url(personal-info-sep.png) no-repeat left top;
  padding:20px 0 0 20px;

  li {
		font-size:14px;
		margin-bottom:10px;
		overflow: hidden;
	}

  li label {
		float:left;
		padding:4px 7px;
		border-radius: 3px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
    font-size: 12px;
	}

  li span {
		float:right;
		width:170px;
		color:#000;
	}

  @media only screen and (min-width: 768px) and (max-width: 959px) {
    width:700px;
		margin-left:0px;
		background:none;
		border-top:1px solid var(--bg-tertiary);
    min-height:0px;
    padding:20px 20px 0 20px;
    margin-left:10px;
  }

  @media only screen and (min-width: 480px) and (max-width: 767px) {
    margin-top:0;
		display:block;
		width:420px;
		background:none;
		border-top:1px solid var(--bg-tertiary);
    min-height:0px;
    padding:20px 20px 0 20px;
  }

  @media only screen and (max-width: 479px) {
    margin-top:0;
		display:block;
		width:280px;
		background:none;
		border-top:1px solid var(--bg-tertiary);
		min-height:0px;
    padding: 5px 5px 0 5px;
    margin-left:0px;

  }
`;

const PhotoInner = styled.div`
  float:left;
  background:url(photo-inner.png) no-repeat;
  width:192px;
  height:212px;
  padding:12px 0 0 20px;

  img {
    background-color:#FFF;
  }

  @media only screen and (max-width: 479px) {
    margin-left:40px;
		background:url(photo-inner.png) no-repeat;
		width:192px;
		height:212px;
		padding:12px 0 0 20px;
  }
`;

const Intro = styled.h1`
  max-width: 13ch;
  font-size: 3.85em; // big text = attention
  font-weight: 800;
  line-height: 1.35;
  margin-top: 20px;
`;

const SubHeader = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 5px;
  margin-left: 0 !important;
`;


const TextBtn = styled.button`
  outline: none;
  border: unset;
  color: var(--text-primary);
  background: unset;
  margin-left: auto;
  opacity: 0.75;
  cursor: pointer;
  font-size: 0.9em;
  margin-bottom: 20px;

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const CodeContainerBtn = styled.button`
  position: absolute;
  right: -20px;
  bottom: -18px;
  outline: none;
  border: unset;
  color: var(--text-primary);
  padding: 8px;
  border-radius: 10px;
  background: var(--bg-tertiary);
  opacity: 0.9;
  cursor: pointer;
  border: 2px solid rgb(0 0 0 / 12%);

  align-self: flex-end;
  margin-top: -15px;

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 8px rgb(0 0 0 / 12%);
  }
`;

const CodeContainer = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  display: flex;
  background: var(--bg-secondary);
  border-radius: 10px;
  padding: 10px;
  border: 2px solid rgb(0 0 0 / 12%);

  span {
    user-select: none;
    color: var(----text-muted);
  }

  pre {
    color: var(--text-secondary);
    line-height: 1.25;
  }
`;

const Portfolios = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;

  padding: 5rem 0;
`;

const Portfolio = styled.div`
  display: flex;
  min-width: 400px;
  max-width: 400px;
  background: var(--bg-secondary);
  padding: 15px;
  border-radius: 18px;
  border: 2px solid rgb(0 0 0 / 12%);
  padding-top: 50px;
  position: relative;

  &:first-of-type {
    margin-left: 50px;
  }

  > div {
    > div {
      p {
        line-height: 1;
        margin-bottom: 8px;
        color: var(--text-primary);
        font-size: 1.2em;
        span {
          display: flex;
          align-items: center;
          font-size: 0.85em;
          color: var(--text-secondary);
          margin-top: 5px;
          opacity: 0.75;
          svg {
            width: 1.2em;
            height: 1.2em;
            margin-right: 5px;
          }
        }
      }
    }
    > p {
      margin-top: 5px;
      line-height: 1;
      font-weight: 400;
      color: var(--text-secondary);
      font-size: 1.15em;
      line-height: 115%;
    }
  }
`;

const HeaderWrapper = styled.div`
  margin-right: 15px;

  position: absolute;
  top: -28px;

  left: 14px;
  span {
    border: 2px solid rgb(0 0 0 / 35%) !important;
    border-radius: 18px;
  }
`;

const DocumentationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  padding: 6rem 2rem;

  h1 {
    margin-bottom: 50px;
  }
`;

const Request = styled.div`
  margin-bottom: 50px;
  > span {
    font-weight: 600;
    color: var(--text-secondary);
    padding: 5px 0;
    display: block;
  }

  > * {
    margin-left: 25px;
  }
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Ravi Gyani</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="rgyani" />
        <meta property="og:title" content="Ravi Gyani" />
        <meta property="og:description" content="Personal portfolio of Ravi Gyani." />
        <meta name="twitter:creator" content="@rgyani" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#E9E2D8" />
      </Head>

      <Navbar />
      <Polka />
      <ProfileContainer id="profile">
        <About id="about">
          <PhotoInner><Image src="/photo.jpg" height="186" width="153" /></PhotoInner>
          <h3>God is also a programmer, see the bugs around!</h3>
          <h1>- RAVI GYANI</h1>
          <p>Currently dabbling in AWS, Cloud, BigData, Hadoop, Kafka, Spark, NoSQL DBs, Unity, Web3</p>
        </About>
        <PersonalInfo id="personal_info">
          <li><label>Name</label><span>Ravi Gyani</span></li>
          <li><label>Date of birth</label><span>January 15, 1981</span></li>
          <li><label>Address</label><span>Munich, Germany</span></li>
          <li><label>Email</label><span>rgyani at yahoo dot com</span></li>
        </PersonalInfo>
      </ProfileContainer>
      <Marquee
        speed={50}
        gradientWidth={100}
        style={{ width: "100%" }}
        gradientColor={[234, 226, 215]}
      >
        <Portfolios>
          {PORTFOLIOS.map((portfolio, index) => (
            <Portfolio key={index}>
              <HeaderWrapper>
                <Image
                  style={{
                    borderRadius: "0",
                  }}
                  width={65}
                  height={65}
                  layout="fixed"
                  draggable={false}
                  src={portfolio.thumb}
                  alt={portfolio.title}
                />                  
              </HeaderWrapper>
              <div>
                <div>
                  <p>
                    {portfolio.title}{" "}
                    <span>
                      {portfolio.subtitle}
                    </span>
                  </p>
                </div>
              </div>
            </Portfolio>
          ))}
        </Portfolios>
      </Marquee>
      <DocumentationWrapper id="documentation">
        <Intro>my notes</Intro>
        {ARTICLES.map((category, index) => (
          <Request key={index}>
            <SubHeader>{category.category}</SubHeader>
            {category.articles.map((article, index) => (
              <div key={index}>
                <span>{article.title}</span>
                <CodeContainer>
                  {article.subtitle}
                </CodeContainer>
                <a href={article.link} target="_blank" rel="noreferrer">
                  <TextBtn>read more...</TextBtn>
                </a>
                <br />
              </div>
            ))}
          </Request>
        ))}
      </DocumentationWrapper>
    </Wrapper>
  );
};

export default Home;
