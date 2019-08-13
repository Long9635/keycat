import React, { useEffect } from 'react'
import styled from 'styled-components'
import textBalancer from 'text-balancer'
import PageLayout from 'design/layouts/PageLayout'
import { media } from 'design/utils'
import Features from './Features'
import { AboutSection } from './About.styled'
import Supports from './supports/Supports'
import { Typewriter } from 'modules/modules'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto 48px auto;
  padding: 0 24px;
  color: #24292e;
  box-sizing: border-box;

  ${media.lessThan('medium')`
    margin-top: 0px;
  `}

  ${media.lessThan('small')`
    margin-top: -20px;
  `}
`

const Headline = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  margin: 0 auto;
  font-family: var(--font-heading);

  ${media.lessThan('medium')`
    font-size: 56px;
  `}

  ${media.lessThan('small')`
    font-size: 48px;
  `}
`

const Secondary = styled.h2`
  font-size: 20px;
  line-height: 1.4;
  color: #333;
  font-weight: 400;
  margin: 20px 0;
  max-width: 480px;
  font-family: var(--font-serif);
  padding-left: 24px;

  ${media.lessThan('small')`
    font-size: 16px;
  `}
`

const BrowserSupport = styled.div`
  font-size: 14px;
  color: #808080;
  margin: 0 auto;
  margin-top: 20px;
`

const GotoArrow = styled.span`
  margin-left: 4px;
  display: inline-block;
  transition: 0.2s transform ease;
`

const GotoPlayground = styled.div`
  text-align: center;
  margin-top: 30px;

  a {
    padding: 20px 40px;
    margin: 0 auto;
    font-size: 16px;
    color: #277bff;
    text-align: center;
    border: 1px solid;
    border-color: rgba(16, 116, 231, 0.5);
    user-select: none;
    vertical-align: middle;
    font-weight: 500;
    display: inline-block;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
      border-color: #1074e7;
      text-decoration: none;
      color: #0366d6;

      ${GotoArrow} {
        transform: translateX(4px);
      }
    }
  }
`

interface IProps {
  path: string
}

const About: React.FunctionComponent<IProps> = () => {
  useEffect(() => {
    textBalancer.balanceText()
  }, [])

  return (
    <PageLayout
      main={
        <Container>
          <AboutSection>
            <Headline>
              <Typewriter
                options={{
                  loop: true,
                  cursor: '|',
                }}
                onInit={w => {
                  w.typeString('Chrome')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Safari')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Firefox')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('iOS')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Android')
                    .pauseFor(2000)
                    .deleteAll()
                    .start()
                }}
              />
            </Headline>
            <Headline>is-a-wallet</Headline>
            <Secondary>
              No installations needed. <br /> Keycat runs on Chrome, Firefox, Safari. <br /> Mobile and Desktop.
            </Secondary>
            <GotoPlayground>
              <a href="/playground">
                Visit Playground
                <GotoArrow>→</GotoArrow>
              </a>
              <BrowserSupport className="balance-text">
                Keycat runs on Safari, Chrome, Firefox regardless of mobile or desktop.
              </BrowserSupport>
            </GotoPlayground>
          </AboutSection>
          <Supports />
          <Features />
        </Container>
      }
    />
  )
}

export default About
