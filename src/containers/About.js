import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
//
import Theme from 'utils/Theme'

import Link from 'components/Link'
import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'

import { H1, H2, H3, H4, H6, P, Img, Button } from 'components/Html'

const densityAnimation = keyframes`
  0%, 100% {
    transform: translateY(-10px);
    opacity: 0;
  }
  10%, 40% {
    transform: translateY(0px);
    opacity: 1;
  }
  50% {
    transform: translateY(150px);
    opacity: 0;
  }
`

const destinyAnimation = keyframes`
  0%, 100% {
    transform: translateY(10px);
    opacity: 0;
  }
  50% {
    transform: translateY(-150px);
    opacity: 0;
  }
  60%, 90% {
    transform: translateY(0px);
    opacity: 1;
  }
`

const delorianAnimation = keyframes`
  0%, 20% {
    transform: translateX(-700px);
    opacity: 0;
  }
  26% {
    transform: translateX(-50px);
    opacity: 1;
  }
  70% {
    transform: translateX(50px);
    opacity: 1;
  }
  80%, 100% {
    transform: translateX(1200px);
    opacity: 0;
  }
`

const delorianBehindAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(70px);
  }
`

const AboutUsDiv = styled.div`
  padding-top: 0;
  background-image: url('/img/about/dot-background.jpg');
  background-repeat: repeat-y;
  background-size: 100%;
  .intro {
    z-index: 1;
    position: relative;
    text-align: center;
    padding: 150px 40px 250px;
    display: flex;
    flex-direction: column;
    min-height: 108vh;
    align-items: center;
    justify-content: center;
   background:rgb(104, 141, 177);
    background-size: cover;
    background-position: top;
    color: #fff;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
    text-shadow: 0 4px 20px #000;
    .-background {
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(104, 141, 177);
    }
    .-content {
      z-index: 1;
    }
    h1 {
      margin: 0 0 10px;
    }
    p {
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.4em;
    }
    .next {
      position: absolute;
      bottom: 20%;
      left: 50%;
      width: 0;
      height: 0;
      animation: arrow-bounce 1s infinite;
      animation-timing-function: ease-out;
      svg {
        width: 60px;
        max-width: 60px !important;
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 2px 5px #000);
      }
    }
  }
  .timeline {
    z-index: 0;
    position: relative;
    .density {
      padding-top: 200px;
      padding-bottom: 80px;
      text-align: center;
      font-weight: bold;
      color: ${Theme.colors.primaryDark};
      animation: ${densityAnimation} 6s infinite;
    }
    .delorianSide {
      position: relative;
      z-index: 1;
      width: 100%;
      text-align: center;
      height: 0;
      animation: ${delorianAnimation} 6s infinite linear;
      div {
        height: 0;
      }
      img {
        width: 400px;
        transform: translateY(-50%);
      }
    }
    .destiny {
      z-index: 0;
      padding-top: 20px;
      margin-bottom: 270px;
      animation: ${destinyAnimation} 6s infinite;

      h2 {
        text-align: center;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
        transform: translateY(120px);
      }
    }
    .delorianBack {
      width: 100%;
      text-align: center;
      margin-bottom: 10rem;
      animation: ${delorianBehindAnimation} 4s infinite ease-in-out;
    }
    h2.roads {
      text-align: center;
      margin: 150px 0 20px;
      font-weight: bold;
      color: ${Theme.colors.primaryDark};
      img {
        width: 400px;
      }
    }


    .event {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto 150px;
      position: relative;
      font-size: 1.2em;
      &:nth-child(odd) .connector {
        transform-origin: left;
        background: rgba(0, 0, 0, 0.4);
      }
      .left,
      .right {
        flex: 1 1 50%;
      }
      .left {
        text-align: right;
        padding-right: 50px;
        p {
          margin-right: 0;
        }
      }
      .right {
        text-align: left;
        padding-left: 50px;
        p {
          margin-left: 0;
        }
      }
      h4 {
        margin: 0;
        font-weight: 600;
      }
      p {
        max-width: 350px;
      }
      img {
        width: 400px;
      }
    }
  }

    .aboutus{padding:5%;}
  .aboutusFst h5{font-size: 22px;
    padding: 20px 0;
    text-transform: uppercase;
    font-weight: bold;}
  .aboutusSec{font-weight: 500;
    padding: 10px 0;
    line-height: 20px;
    font-family: sans-serif;
    font-size: 15px;}
    .aboutusThrd{font-weight: 500;
    padding: 10px 0;
    line-height: 20px;
    font-family: sans-serif;
    font-size: 15px;}



  .team {
    padding: 20px;
    padding-top: 100px;
    padding-bottom: 100px;
    background: ${Theme.colors.primaryDark};
    h2 {
      color: #fff;
      text-align: center;
      margin: 0 0 30px;
    }
    .inner {
      display: flex;
      flex-wrap: wrap;
    }
    .member {
      flex: 1 1 31%;
      margin: 0 1% 20px;
      position: relative;
      padding: 120px 20px 20px;
      text-align: center;
      border-radius: 5px;
      background: #fff;
      &.derek .member-image .inner {
        background-image: url('/img/about/derek.jpg');
      }
      &.joe .member-image .inner {
        background-image: url('/img/about/joe.jpg');
      }
      &.tanner .member-image .inner {
        background-image: url('/img/about/tanner.jpg');
      }
      .member-image {
        position: absolute;
        left: 50%;
        top: 70px;
        transform: translate(-50%, 0);
        width: 70%;
        height: 0;
        .inner {
          position: absolute;
          bottom: 0;
          width: 100%;
          margin: 0 auto;
          border-radius: 500px;
          border: solid 5px #fff;
          background-position: center;
          background-size: cover;
          box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
          &:before {
            content: '';
            display: block;
            width: 100%;
            padding-top: 100%;
          }
        }
      }
      h3 {
        color: ${Theme.colors.primary};
      }
      p {
        line-height: 1.3em;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event .connector {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event:nth-child(odd) .right {
      order: -1;
    }
  }

  @media screen and (max-width: 700px) {
    .timeline .event {
      .left,
      .right {
        flex: 1 1 100%;
        padding: 0 !important;
        transform: none !important;
        text-align: center !important;
      }
      .left p,
      .right p {
        margin-left: auto;
        margin-right: auto;
      }
      .left img,
      .right img {
        margin-bottom: 20px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .team .member {
      flex: 1 1 100%;
      margin: 150px 0 20px;
      transform: none !important;
    }
  }

  @media screen and (max-width: 900px) {
    .team .member .member-image {
      top: 100px;
      width: 200px;
    }
  }

  @-moz-keyframes arrow-bounce {
    0%,
    100% {
      transform: translateY(0px);
    }

    40% {
      transform: translateY(10px);
    }
  }

  @-webkit-keyframes arrow-bounce {
    0%,
    100% {
      transform: translateY(0px);
    }

    40% {
      transform: translateY(10px);
    }
  }

  @-o-keyframes arrow-bounce {
    0%,
    100% {
      transform: translateY(0px);
    }

    40% {
      transform: translateY(10px);
    }
  }

  @keyframes arrow-bounce {
    0%,
    100% {
      transform: translateY(0px);
    }

    40% {
      transform: translateY(10px);
    }
  }
`

export default class About extends Component {
  render () {
    return (
      <Page>
        <Head title="About Us" />
        <Main>
          <AboutUsDiv>
            <section className="intro">
              <div className="-background" />
              <div className="-content">
                <H1>ABOUT US</H1>
                <P>
                 We understand that you have worked extremely hard to get to where you are and you are backed by credentials that support your passion.
                </P>
              </div>
              <Link className="next" to="/about/#timeline">
                <svg
                  width="53px"
                  height="30px"
                  viewBox="0 0 53 30"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path
                      d="M3.03204743,3.40265339 L26.4497561,25.9830173 L49.8674649,3.09093941"
                      id="Path-1"
                      stroke="#FFFFFF"
                      strokeWidth="5"
                    />
                  </g>
                </svg>
              </Link>
            </section>

            <section className="aboutus">
                <div className="aboutusFst">
                    <h5>About us</h5>
                </div>
                <div className="aboutusSec">
                    We understand that you have worked extremely hard to get to where you are and you are backed by credentials that support your passion. But most employers and several organizations now looks for more competency proof to complement those credentials, so how do you intend to stand out from the competition? RSS is a live and interactive e-learning platform that offers professional online education to help companies improve their profitability drastically. We provide several cyber training in various fields which includes but not limited to: Devop, Business Analytics, Database administration, VMware, Selenium, Amazon Web Services, Bigdata, Python, Identity Management, IT service, Management, NoSQL DB Courses, IT Networking and Server Administration Courses.
                </div>
                <div className="aboutusThrd">
                    Our courses are perfectly designed for individuals seeking further professional recognition and independent certification to enhance their course outcome and qualities. We are renown for building pathways to successful careers and with over 5 years of certification program, we have acquired the needed experience to partner with you in the development and delivery of a recognized and sustainable career for your profession.
                </div>
            </section>


            <section className="team">
              
              <div className="inner">
                <div className="member derek">
                 
                  <H3>Learn Online</H3>
                
                  <P>
                   Don’t worry about keeping up with your day to day task and at the same time meeting up with your training. Everything is accessible on the go without interrupting your personal life.
                  </P>
                </div>
                <div className="member joe">
                  
                  <H3>Quality</H3>
                  <P>
                   we're proud of our unrivalled reputation in the interactive e-learning training platform, and known for our unmatched support while juggling work and study commitments. Our flexible study options and several online learning tools are all designed to help maximize your study time and help you focus on your weak areas.
                  </P>
                </div>
                <div className="member tanner">
                  
                  <H3>Guarantee</H3>
                  <P>
                   We are confident that our approach, our dedicated training philosophy and our full time support combined with your hard work will lead you to success.
                  </P>
                </div>
              </div>
            </section>
          </AboutUsDiv>
        </Main>
      </Page>
    )
  }
}
