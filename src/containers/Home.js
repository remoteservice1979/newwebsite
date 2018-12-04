import React, { Component } from 'react'
import styled, { css } from 'styled-components'
//
import Color from 'utils/Color'
import Theme from 'utils/Theme'
import { angle } from 'utils/Styles'

import Head from 'components/Head'
import Page from 'components/Page'
import Main from 'components/Main'
import Link from 'components/Link'
import NodeGarden from 'components/NodeGarden'
import TrialForm from 'components/TrialForm'
import { H2, H3, H4, H5, H6, P, Ul, Li, Img, Div, Button, Strong } from 'components/Html'

const belowMobile = `@media(max-width: ${700}px)`
const belowTablet = `@media(max-width: ${1000}px)`

const Left = props => <div className="left" {...props} />
const Right = props => <div className="right" {...props} />
const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const section = css`
  z-index: 0;
  .inner {
    max-width: ${Theme.maxWidth}px;
    margin: 0 auto;
    padding: 10% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  img {
    width: 100%;
  }
  ${belowMobile} {
    .left,
    .right {
      flex: 1 1 100%;
      margin-left: 0;
      margin-right: 0;
    }
    .left {
      margin-bottom: 2rem;
    }
  }
`

const layoutLeft = css`
  .left {
    flex: 2 1 200px;
    text-align: right;
    margin-right: 40px;
  }
  .right {
    flex: 3 1 300px;
  }
`

const layoutRight = css`
  .left {
    flex: 3 1 300px;
  }
  .right {
    margin-left: 40px;
    flex: 2 1 200px;
  }
`

const layoutLeftHalf = css`
  .left {
    flex: 1 1 300px;
    margin-right: 40px;
  }
  .right {
    flex: 1 1 300px;
  }
`

const layoutDark = css`
  background: ${Theme.colors.primaryDarker};
  color: white;
`

const Centered = styled.div`
  text-align: center;
  width: 100%;
`

const SectionKnowEverything = styled(Section)`
  ${section} ${layoutLeft} position: relative;
  background: radial-gradient(
    circle at center,
    ${Theme.colors.primaryDarker} 20%,
    ${Color(Theme.colors.primaryDarker)
    .darken(10)
    .toString()}
  );
  color: white;
  h4 {
    color: ${Theme.colors.primaryLighter};
  }
  img {
    max-width: 940px;
    width: 140%;
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  }
`
const SectionTrackAllTheThings = styled(Section)`
  ${section} ${layoutDark} ${layoutRight} ${angle('right')} position: relative;
  .right {
    z-index: 0;
  }
  img {
    opacity: 1;
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0; 0; 0; 0.2);
  }
    .FirstDiv{width:33%;float:left;padding:20px;}
    .SecondDiv{width:33%;float:left;padding:20px;}
    .ThirdDiv{width:33%;float:left;padding:20px;}
    .h5Div{padding: 20px 0;font-size: 20px;text-align: center;}
    .subDiv{text-align: center;font-size: 15px;font-weight: 500;font-family: sans-serif;letter-spacing: .9px;}
    .h-70{height:75px;}

  .allthethings {
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 400px;
    opacity: 0.2;
    z-index: 0;
  }
`

const SectionCompetitors = styled(Section)`
  ${section} ${layoutLeft} ${layoutDark} ${angle('right')} .left {
    direction: rtl;
    img {
      opacity: 1;
      max-width: 940px;
      width: 160%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .right {
    p {
      strong {
        color: ${Theme.colors.primaryLighter};
      }
    }
  }
`
const SectionDataJunkie = styled(Section)`
  ${section} ${layoutRight} text-align: center .csv, .sql {
    flex: 1 1 30%;
  }
  .main {
    flex: 1 1 34%;
    margin: 0 3%;
  }
  img {
    width: 250px;
    max-width: 100%;
  }
  ${belowTablet} {
    .csv,
    .sql,
    .main {
      flex: 1 1 100%;
      margin-bottom: 3rem;
    }
  }
`
const SectionSchedules = styled(Section)`
  ${section} ${layoutDark} ${angle('right')} align-items: center;
  text-align: center;
  p {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    width: 900px;
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  }
`
const SectionCantAfford = styled(Section)`
  ${section} ${layoutRight} .right {
    img {
      opacity: 1;
      max-width: 940px;
      width: 140%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
`

const SectionContactUs = styled(Section)`
  ${section} ${layoutDark} ${angle('right')} background: ${Theme.colors.primaryDarker};

  &:after {
    display: none;
  }

  .inner {
    display: block;
    text-align: center;
  }
`

const rankDataImages = ['/img/rank.png', '/img/adrank.png', '/img/pixelheight.png']

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      rankDataImageIndex: 0,
      rankDataImage: rankDataImages[0]
    }
  }
  componentDidMount () {
    this.rankDataImageInterval = window.setInterval(
      () =>
        this.setState(state => ({
          rankDataImageIndex: state.rankDataImageIndex + 1,
          rankDataImage: rankDataImages[(state.rankDataImageIndex + 1) % 3]
        })),
      2000
    )
  }
  componentWillUnmount () {
    window.clearInterval(this.rankDataImageInterval)
  }
  render () {
    const { rankDataImage } = this.state
    return (
      <Page>
        <Head title="REMOTE SERVICE SUPPORTS" />
        <Main>
            <SectionKnowEverything>
                <NodeGarden
                  color={Color('white')
                    .setAlpha(0.1)
                    .toString()}
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    zIndex: -1
                  }}
                />
               <H2 full>
                  UpSkill Your Career: Learn from proven industry experts.
                </H2>                       
            </SectionKnowEverything>


            <SectionTrackAllTheThings>
                
                <div className="FirstDiv">
                    <div className="h-70">
                        <h5 className="h5Div">INSTRUCTOR LED ONLINE TRAINING</h5>
                    </div>
                    <div className="subDiv">
                          The training is always interactive with trainer to clarify the doubts of participants straight away in daily sessions.
                    </div>
                </div>
                <div className="SecondDiv">
                    <div  className="h-70">
                        <h5 className="h5Div">24x7 REMOTE SUPPORT</h5>
                    </div>
                    <div className="subDiv">
                        RSS provides excellent remote support to clients so that they can solve technical issues in their current job.
                    </div>
                </div>
                <div className="ThirdDiv">
                    <div className="h-70">
                        <h5 className="h5Div">CORPORATE TRAINING SOLUTIONS</h5>
                    </div>
                    <div className="subDiv">
                        RSS provide complete corporate training solutions for their clients. Most of our client has rated us as the best corporate training company.
                    </div>
                </div>



            </SectionTrackAllTheThings>
         
          
        </Main>
      </Page>
    )
  }
}
