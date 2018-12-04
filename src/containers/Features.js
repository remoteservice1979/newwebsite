import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
//
import Theme from 'utils/Theme'
import Color from 'utils/Color'
import { angle } from 'utils/Styles'

import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import Link from 'components/Link'
import Icon from 'components/Icon'
import TrialForm from 'components/TrialForm'
import { Button, H2, H4, H5, H6, P, Strong, Span, Ul, Li, Img } from 'components/Html'
import { Container, Center } from 'components/Layout'

const below900 = '@media screen and (max-width: 900px)'

const FeaturesNav = props => (
  <nav {...props}>
    <div className="inner">
      <ul data-gumshoe>
        <li>
          <Link to="/features/#ANGULAR">ANGULAR</Link>
        </li>
        <li>
          <Link to="/features/#REACTJS">REACTJS</Link>
        </li>
        <li>
          <Link to="/features/#BLOCKCHAIN">BLOCKCHAIN</Link>
        </li>
      </ul>
    </div>
  </nav>
)

const FeaturesNavDiv = styled(FeaturesNav)`
  position: fixed;
  width: 100%;
  top: 52px;
  left: 0;
  padding: 0;
  transition: all 0.3s ease;
  background: ${Color(Theme.colors.primaryDarkest)
    .setAlpha(0.9)
    .toString()};
  text-align: center;
  z-index: 999;
  overflow: hidden;
  .inner {
    position: relative;
    height: 200%;
    overflow: hidden;
  }
  ul {
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  li {
    display: inline-block;
    a {
      color: #fff;
      padding: 17px 10px;
      display: block;
      transition: all 0.2s ease;
      opacity: 1;
    }
  }
  + * {
    padding-top: 50px;
  }
  
  ${below900} {
    height: 50px;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(to right; transparent; transparent 60%; rgba(0; 0; 0; 0.7));
    }
    .inner {
      height: 200%;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    ul {
      white-space: nowrap;
      margin-right: 200px;
    }
  }

  @media screen and (min-width: 1300px) {
    .subNav {
      padding: 0 10%;
    }
  }
`

const section = css`
  padding: 10% 20px;
`

const imageSwapAnimation = keyframes`
  0%, 40% {
    opacity: 0;
  }
  60%, 100% {
    opacity: 1;
  }
`

const SectionBrandsCmp = props => (
  <section {...props}>
    <Container>
      <H2 className="badge">
       
        <Span>ANGULAR</Span>
      </H2>
        <section>
            <div className="AngularTxt">
                Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.

The framework consists of several libraries, some of them core and some optional.

You write Angular applications by composing HTML templates with Angularized markup, writing component classes to manage those templates, adding application logic in services, and boxing components and services in modules.

Then you launch the app by bootstrapping the root module. Angular takes over, presenting your application content in a browser and responding to user interactions according to the instructions you've provided.
            </div>
        </section>
    </Container>
  </section>
)

const SectionBrands = styled(SectionBrandsCmp)`
  ${section} padding-top: 15rem;
.AngularTxt{font-size: 15px;
    font-family: sans-serif;
    line-height: 20px;
    color: #333;
}
  .badge {
    text-align: center;
    white-space: nowrap;
    > strong,
    > span {
      display: inline-block;
    }
    > strong {
      position: relative;
      padding: 10px 13px 67px;
      margin: 0 10px;
      color: white;
      box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2);
      background: ${Theme.colors.primaryDark};
      border-radius: 5px;
      div {
        position: absolute;
        height: 10px;
        left: 10px;
        z-index: 1;
        border-radius: 3px;
        &.line1 {
          top: 56px;
          width: 80%;
          background: ${Theme.colors.primaryLight};
        }
        &.line2 {
          top: 69px;
          width: 40%;
          background: ${Theme.colors.success};
        }
        &.line3 {
          top: 81px;
          width: 65%;
          background: ${Theme.colors.danger};
        }
        &.line4 {
          top: 94px;
          width: 20%;
          background: ${Theme.colors.warning};
        }
      }
    }
  }
  .images {
    padding-top: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .domain-wrap,
  .brand-wrap {
    z-index: 1;
    flex: 1 1 100%;
    margin: 0px auto;
    width: 100%;
    max-width: 600px;
    display: block;
  }
  .domain-wrap .domain,
  .brand-wrap .domain,
  .domain-wrap .brand,
  .brand-wrap .brand,
  .domain-wrap .img,
  .brand-wrap .img {
    position: relative;
  }
  .domain-wrap .img img,
  .brand-wrap .img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .domain-wrap .img img:last-child,
  .brand-wrap .img img:last-child {
    animation: ${imageSwapAnimation} 4s linear infinite alternate;
  }
  .domain-wrap h4 {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    margin-bottom: 20px;
  }
  .domain:after {
    content: '';
    padding-top: 18.69%;
    display: block;
  }
  .vs {
    z-index: 0;
    flex: 1 1 100%;
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
    span {
      position: relative;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 10px;
      padding: 12px 10px 10px;
      :after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        width: 200px;
        height: 2px;
        background: rgba(0, 0, 0, 0.2);
        transform: translateY(-50%);
        left: 100%;
      }
      :before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        width: 200px;
        height: 2px;
        background: rgba(0, 0, 0, 0.2);
        transform: translateY(-50%);
        right: 100%;
      }
    }
  }
  .brand-wrap > img {
    display: block;
    width: 200px;
    margin: 0 auto 20px;
  }
  .brand:after {
    content: '';
    padding-top: 76.16%;
    display: block;
  }
  .one {
    display: block;
    margin: 0 auto;
    width: 700px;
    max-width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .two {
    display: block;
    margin: 0 auto;
    width: 500px;
    max-width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    h4 {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 900px) {
    > h2 {
      margin-bottom: 60px;
      strong {
        display: inline-block;
        margin: 0 10px;
      }
      span {
        display: inline-block;
      }
    }
    .images {
      flex-direction: row;
      .domain-wrap,
      .brand-wrap {
        flex: 1 1 40%;
      }
      .vs {
        flex: 1 1 10%;
        margin-top: 100px;
      }
    }
  }
`

const SectionCompetitionCmp = props => (
  <section {...props}>
    <Container>
      <H2>
        <Img src="/img/competitorWaves.png" />
        <div>REACT JS</div>
      </H2>
      <div className="AngularTxt">
        RSS React.js Training makes you learn, a front-end JavaScript Library builds usable and highly interactive UI components and mobile applications. React is modular, maintainable, flexible and scalable. All these features make it an ideal choice for use in various applications.
      </div>
      
    </Container>
  </section>
)

const SectionCompetition = styled(SectionCompetitionCmp)`
  ${section} ${angle('right')} background: ${Theme.colors.primaryDarker};
  color: white;
  h2 {
    text-align: center;
    margin: 0 0 50px;
    img {
      width: 250px;
      margin-bottom: 20px;
    }
  }
  strong {
    color: ${Theme.colors.primaryLighter};
  }
  .AngularTxt{font-size: 15px;
    font-family: sans-serif;
    line-height: 20px;
    color: #333;
}
  .one,
  .two {
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    text-align: center;
  }
  .one > div,
  .two > div {
    flex: 1 1 100%;
    padding: 20px;
  }
  .one img,
  .two img {
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  @media screen and (min-width: 900px) {
    .one,
    .two {
      flex-direction: row;
      flex: 1 0 auto;
    }
    .one > div,
    .two > div {
      flex: 0 0 50%;
    }
    .one .right {
      text-align: left;
    }
    .one .left {
      text-align: right;
    }
    .two {
      text-align: right;
      > .right {
        order: -1;
      }
    }
    .two .left {
      text-align: left;
    }
  }
`

const SectionScheduling = styled(props => (
  <section {...props}>
    <Container>
      <Center>
        <Img src="/img/scheduleDots.png" />
        <H2>BLOCKCHAIN</H2>
        <H6>
            A blockchain is a digitized, decentralized, public ledger of all cryptocurrency transactions.Doing so creates an indelible record that cannot be changed; furthermore, the record's authenticity can be verified by the entire community using the blockchain instead of a single centralized authority.
        </H6>
        <div className="AngularTxt">
            <strong>Use Case: Contract Management System (CMS)</strong><br/>
            <strong>Problem Statement:</strong> In booking current contracting system, to book an accommodation/hotel room, a single contract is recorded multiple times based upon the number of market sources, each source market are unable to sync and yield based upon the needs.
<br/><strong>Solution: </strong>There is a need for a single Smart contract across multiple source markets which should be configurable, define rules to determine appropriate source markets demands, provide options to capture room types and fulfill accommodation needs. CMS is built on hyperledger blockchain, which enables to create a single Smart contract created across all source markets, provides options to demand for more accommodations and improve business by selling accommodation till last minute.
        </div>
      </Center>
    </Container>
  </section>
))`
  ${section} img {
    display: block;
    margin: 0 auto 20px;
    width: 250px;
  }
  .AngularTxt{font-size: 15px;
    font-family: sans-serif;
    line-height: 20px;
    color: #333;
}
.AngularTxt strong{font-weight:bold;}
  h2 {
    text-align: center;
    margin: 0 0 3rem;
  }
  h6 {
    width: 800px;
    max-width: 100%;
  }
  .scheduleImg {
    width: 750px;
  }
  p {
    width: 600px;
    max-width: 100%;
  }
`

const SectionDataCmp = props => (
  <section {...props}>
    <Container>
      <div className="-header">
        <H2 className="-one">Serp</H2>
        <Img src="/img/serp.png" />
        <H2 className="-two">Data</H2>
      </div>
      <Center>
        <H6 className="description">
          Out of the box, Nozzle can show you data you've probably only imagined in your wildest
          dreams. <Strong>Ad-adjusted rank, pixel height,</Strong> and even{' '}
          <Strong> click-to-call phone numbers</Strong> are just a few examples of the immense
          detail we give you on the SERP. Honestly, we can't wait to see what you can do with it!
        </H6>
      </Center>
      <div className="boxes">
        <div className="box -metrics">
          <H4>
            <Icon i="gauge" /> Metrics
          </H4>
          <div className="-image">
            <Img src="/img/metrics.png" />
          </div>
          <div className="content">
            <ul>
              <li>Estimated Traffic</li>
              <li>PPC Value</li>
              <li>Search Volume</li>
            </ul>
            <P>
              Advanced metrics that go above and beyond to help identify and{' '}
              <Strong>assign dollar amounts and revenue to your SEO</Strong>
            </P>
          </div>
        </div>
        <div className="box -data">
          <H4>
            <Icon i="trophy" /> Rank
          </H4>
          <div className="-image">
            <Img src="/img/rank-wide.png" />
          </div>
          <div className="content">
            <ul>
              <li>Pixels from Top</li>
              <li>Ad-adjusted Rank</li>
              <li>Blended Rank</li>
            </ul>
            <P>
              Blended Rank is expected from any rank tracker, but at Nozzle we don't think that's
              enough. <Strong>Ad-adjusted Rank</Strong> and <Strong>Pixels from Top of page</Strong>{' '}
              are new and powerful metrics unique to Nozzle, and will surely put your rank tracking
              above your competitors.
            </P>
          </div>
        </div>
        <div className="box -keywordGroups">
          <H4>
            <Icon i="bullseye" /> Keyword Groups
          </H4>
          <div className="-image">
            <Img src="/img/keywordGroups.png" />
          </div>
          <div className="content">
            <ul>
              <li>Group-level Scheduling</li>
              <li>Pay Once, Use Anywhere</li>
              <li>Bulk-Keyword Management</li>
            </ul>
            <div>
              <P>
                Nozzle takes keyword groups to a whole new level with{' '}
                <Strong>group-driven performance dashboards, drill-through, and comparison</Strong>.
                If that wasn't cool enough, you can place keywords in{' '}
                <Strong>as many groups as you want</Strong>, and only pay <Strong>once</Strong>
              </P>
            </div>
          </div>
        </div>
        <div className="box -globalLocal">
          <H4>
            <Icon i="marker" /> Global &amp; Local
          </H4>
          <div className="-image">
            <Img src="/img/location.png" />
          </div>
          <div className="content">
            <ul>
              <li>Any Engine</li>
              <li>Any Country</li>
              <li>Any Location</li>
            </ul>
            <P>
              To <Strong>understand your audience</Strong>, you need to search like your audience.
              Want the results from a mobile Google search at that famous coffee shop in downtown
              London? We've got them.
            </P>
          </div>
        </div>
        <div className="box -mozSocial">
          <H4>
            <Icon i="mobile" /> Devices &amp; OS
          </H4>
          <div className="-image">
            <Img src="/img/devices.png" />
          </div>
          <div className="content">
            <ul>
              <li>Desktop, Tablet, Mobile</li>
              <li>Windows, MacOS, iOS, Android</li>
              <li>App Store, Play Store</li>
            </ul>
            <P>
              Track your rankings at the deepest level of user engagement with Nozzle's powerful{' '}
              <Strong>device, OS, and platform</Strong> options. Uncover untapped marketing
              opportunities and beat the competition from every angle.
            </P>
          </div>
        </div>
        <div className="box -ads">
          <H4>
            <Icon i="dollar" /> Ads
          </H4>
          <div className="-image">
            <Img src="/img/abs.png" />
          </div>
          <div className="content">
            <ul>
              <li>AdWords</li>
              <li>Ad Extensions</li>
              <li>Product Listing Ads (PLA)</li>
            </ul>
            <P>
              Get up close and personal with paid results and{' '}
              <Strong>discover how they affect</Strong> your results day to day.
            </P>
          </div>
        </div>
      </div>
      <Center>
        <Link to="/features/#trial">
          <Button color="success" burst>
            Get the Datas!
          </Button>
        </Link>
      </Center>
    </Container>
  </section>
)

const SectionData = styled(SectionDataCmp)`
  ${section} ${angle('right')} background: ${Theme.colors.primaryDarker};
  color: white;
  .-header {
    h2,
    img {
      margin: 0 auto;
      display: block;
      text-align: center;
    }
    h2 {
      .-one {
        font-size: 120px;
        font-weight: bolder;
        text-transform: uppercase;
        line-height: 90px;
        margin-bottom: 5px;
      }
      .-two {
        margin-bottom: 30px;
      }
    }
    img {
      width: 230px;
    }
  }
  .description {
    margin: 0 auto 40px;
    max-width: 700px;
  }
  .boxes {
    display: flex;
    flex-wrap: wrap;
  }
  .box {
    flex: 1 1 100%;
    margin-bottom: 20px;
    background: #fff;
    color: initial;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h4 {
      margin: 10px 0 0;
      padding: 10px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.7);
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      i {
        margin-right: 10px;
        :before {
          transform: scale(1.3);
          display: inline-block;
        }
      }
    }
    .-metrics {
      i {
        color: ${Theme.colors.success};
      }
      li:before {
        background-color: ${Theme.colors.success};
      }
    }
    .-data {
      i {
        color: #ff4a4a;
      }
      li:before {
        background-color: #ff4a4a;
      }
    }
    .-keywordGroups {
      i {
        color: ${Theme.colors.primaryLight};
      }
      li:before {
        background-color: ${Theme.colors.primaryLight};
      }
    }
    .-globalLocal {
      i {
        color: #f76f00;
      }
      li:before {
        background-color: #f76f00;
      }
    }
    .-mozSocial {
      i {
        color: #c300a4;
      }
      li:before {
        background-color: #c300a4;
      }
    }
    .-ads {
      i {
        color: ${Theme.colors.vendors.bing};
      }
      li:before {
        background-color: ${Theme.colors.vendors.bing};
      }
    }
    .-image {
      position: relative;
      width: 100%;
      :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        boxshadow: inset 0 40px 40px -40px rgba(0, 0, 0, 0.3),
          inset 0 -40px 40px -40px rgba(0, 0, 0, 0.3);
      }
      img {
        display: block;
        margin: 0 auto;
        z-index: 0;
      }
    }
    .content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: stretch;
      padding: 20px 10px;
      > * {
        flex: 1 1 50%;
      }
    }
    p {
      margin: 0;
      padding: 10px 10px 0 0;
    }
    ul {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${Theme.colors.text};
    }
    li {
      padding: 10px 10px 10px 30px;
      position: relative;
      :before {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        left: 10px;
        top: 50%;
        border-radius: 50px;
        transform: translateY(-50%);
      }
    }
  }
  @media screen and (max-width: 400px) {
    .box .content > * {
      flex: 1 1 100%;
    }
  }

  @media screen and (min-width: 700px) {
    .box {
      flex: 1 1 48%;
      margin: 0 1% 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    .box {
      flex: 1 1 31%;
      margin: 0 1% 20px;
    }
  }
`

const SectionAgenciesCmp = props => (
  <section {...props}>
    <Container>
      <Img src="/img/agency.png" />
      <H2>Agency Tools</H2>
      <div className="wrap">
        <div className="one">
          <Img src="/img/teams.png" />
        </div>
        <div className="two">
          <H4>Manage your agency like a boss.</H4>
          <Ul className="list">
            <Li>Segment Teams &amp; Clients</Li>
            <Li>Aggregated views and bulk keyword management</Li>
            <Li>Unlimited users at no extra charge</Li>
          </Ul>
          <br />
          <br />
          <Link to="/features/#trial">
            <Button color="success" burst>
              Try it out!
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  </section>
)

const SectionAgencies = styled(SectionAgenciesCmp)`
  ${section} img {
    display: block;
    margin: 0 auto 20px;
    width: 200px;
  }
  h2 {
    text-align: center;
    margin: 0 0 70px;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .one {
    margin: 0 0 70px;
    text-align: center;
    img {
      width: 400px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
      border-radius: 7px;
    }
  }
  .two {
    font-size: 1.2em;
    text-align: center;
    h4 {
      margin: 0 0 20px;
    }
    ul {
      display: inline-block;
      text-align: left;
    }
  }
  @media screen and (min-width: 900px) {
    .wrap {
      flex-direction: row;
      .one,
      .two {
        flex: 1 1 50%;
      }
      .one {
        margin: 0;
      }
      .two {
        padding: 20px;
        text-align: left;
      }
    }
  }
`

const SectionReputationCmp = props => (
  <section {...props}>
    <Container>
      <Img src="/img/reputation.png" />
      <H2>Reputation Management</H2>
      <div className="wrap">
        <div className="one">
          <H4>Keep the "you know what" from hitting the fan.</H4>
          <div>
            <Ul>
              <Li>Track and discover both positive and negative domains</Li>
              <Li>Get notified when they enter or exit any page or position</Li>
              <Li>Preventative - Catch negative sites before they rank high</Li>
            </Ul>
          </div>
          <Link to="/features/#trial">
            <Button color="success" burst>
              Show My Trends
            </Button>
          </Link>
        </div>
        <div className="two">
          <Img src="/img/reputationChange.png" />
        </div>
      </div>
    </Container>
  </section>
)

const SectionReputation = styled(SectionReputationCmp)`
  ${section} ${angle('right')} background: ${Theme.colors.primaryDarker};
  color: white;
  img {
    display: block;
    margin: 0 auto 20px;
    width: 350px;
  }
  h2 {
    text-align: center;
    margin: 0 0 70px;
  }
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .one {
    text-align: center;
    margin: 0 0 70px;
    h4 {
      margin: 0 0 30px;
    }
    ul {
      display: inline-block;
    }
  }
  .two {
    text-align: center;
    img {
      width: 400px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
      border-radius: 7px;
    }
  }
  @media screen and (min-width: 900px) {
    .wrap {
      flex-direction: row;
      .one,
      .two {
        flex: 1 1 50%;
      }
      .one {
        padding: 20px;
        text-align: right;
      }
      .two {
        margin: 0;
      }
    }
  }
`
const SectionIntegrationsCmp = props => (
  <section {...props}>
    <Container>
      <Img src="/img/integrations.png" />
      <H2>Integrations &amp; Export</H2>
      <P>
        We've made sure that all of the data you pay for is truly yours to command. Every data point
        is ultra-portable and accessible through a variety of providers and exportable data types.
      </P>
      <div className="-boxes">
        <div className="-box">
          <H5>Business Intelligence</H5>
          <ul>
            <li>
              <Link to="http://www.tableau.com/" target="_blank">
                Tableau
              </Link>
            </li>
            <li>
              <Link to="https://www.google.com/analytics/data-studio/" target="_blank">
                Google Data Studio
              </Link>
            </li>
            <li>
              <Link to="https://www.domo.com/" target="_blank">
                Domo
              </Link>
            </li>
          </ul>
        </div>
        <div className="-box">
          <H5>Marketing</H5>
          <ul>
            <li>
              <Link to="http://datarama.com/" target="_blank">
                Datarama
              </Link>
            </li>
            <li>
              <Link to="https://reportgarden.com/" target="_blank">
                Report Garden
              </Link>
            </li>
          </ul>
        </div>
        <div className="-box">
          <H5>Data</H5>
          <ul>
            <li>API</li>
            <li>Big Query / MySQL</li>
            <li>CSV</li>
          </ul>
        </div>
      </div>
      <Center>
        <Link to="/features/#trial">
          <Button color="success" burst>
            Try it out!
          </Button>
        </Link>
      </Center>
    </Container>
  </section>
)

const SectionIntegrations = styled(SectionIntegrationsCmp)`
  ${section} ${angle('right')} img {
    display: block;
    margin: 0 auto 20px;
    width: 150px;
  }
  h2 {
    text-align: center;
    margin: 0 0 30px;
  }
  p {
    display: block;
    margin: 0 auto 40px;
    font-size: 1.2em;
    width: 800px;
    max-width: 100%;
  }
  .-boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 1.2em;
  }
  .-box {
    flex: 1 1 100%;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    margin: 0 0 20px;
    padding: 20px;
    text-align: center;
    h5 {
      color: ${Theme.colors.primaryDarker};
      margin: 0 0 20px;
      border-bottom: 3px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 10px;
    }
    ul {
      display: inline-block;
    }
    li {
      margin-bottom: 10px;
      font-weight: 600;
    }
    a {
      color: ${Theme.colors.primaryLight};
    }
  }
  @media screen and (min-width: 600px) {
    .-box {
      flex: 1 1 300px;
      margin: 0 1% 20px;
    }
  }
`

const SectionContactUsCmp = props => (
  <section {...props}>
    <Container>
      <H2 full>Let's start your free trial!</H2>
      <TrialForm />
      <H6 full>or</H6>
      <Link to="tel:1855NOZZLE1">
        <Button color="primaryDark" burst>
          Call 1-855-NOZZLE1
        </Button>
      </Link>
    </Container>
  </section>
)

const SectionContactUs = styled(SectionContactUsCmp)`
  ${section} ${angle('right')} background: ${Theme.colors.primaryDarker};
  color: white;
  :after {
    display: none;
  }
  display: block;
  text-align: center;
`

export default class Features extends Component {
  render () {
    return (
      <Page>
        <Head title="Features" />
        <Main>
          <FeaturesNavDiv />
          <SectionBrands id="ANGULAR" />
          <SectionCompetition id="REACTJS" />
          <SectionScheduling id="BLOCKCHAIN" />
        </Main>
      </Page>
    )
  }
}
