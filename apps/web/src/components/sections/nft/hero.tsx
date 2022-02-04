import Section from 'components/layout/section'
import B from 'logos/b.svg'
import Web3Globe from 'logos/web3-globe.svg'
import Link from 'components/primitives/link'
import Box from 'components/common/box'
import { NFTTopMarquee } from 'components/sections/nft/top-marquee'
import { styled } from '../../../../stitches.config'
import { toVw } from '../posters'

export const NFTHero = () => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NFTTopMarquee />
      <Section
        background="black"
        css={{ px: toVw(12, 1920), flexGrow: 1, display: 'flex' }}
      >
        <Box
          css={{
            border: `1px solid $white`,
            borderRadius: 32,
            padding: toVw(32, 1920),
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <Nav>
            <B />
            <Link href="#">About</Link>
            <Link href="#">The Grotesque</Link>
            <Link href="#">The Team</Link>
            <button>Connect Wallet & Claim</button>
          </Nav>
          <Content>
            <div className="tagline">
              <p>
                On August 29, 2021, SSUMDAY, CLOSER, ABBEDAGGE, FBI, and HUHI
                brought home a historic championship title to 100 Thieves.
                <br />
                To commemorate, Nadeshot commissioned a one-of-a-kind diamond
                chain to gift our players & coaches.
              </p>
              <p>
                On August 29, 2021, SSUMDAY, CLOSER, ABBEDAGGE, FBI, and HUHI
                brought home a historic championship title to 100 Thieves.{' '}
              </p>
            </div>
            <h1>
              basement
              <br />
              grotesque
              <br />
              NFT
            </h1>
          </Content>
          <ActionContainer>
            <Web3Box>
              <div>
                <p>WEB3</p>
                <Web3Globe />
                <p>©{new Date().getFullYear()}</p>
              </div>
              <h3>0.5 ETH</h3>
            </Web3Box>
            <H2>
              <span>MINTED</span> <b>003/500</b>
            </H2>
            <CTA css={{ mt: toVw(32, 1920) }}>CONNECT WALLET & CLAIM</CTA>
          </ActionContainer>
        </Box>
      </Section>
      <NFTTopMarquee />
    </Box>
  )
}

const Nav = styled('nav', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',

  'a, button': {
    fontSize: toVw(18, 1920),
    fontFamily: '$mono',
    textTransform: 'uppercase'
  }
})

const Content = styled('div', {
  py: toVw(24, 1920),
  flexGrow: 1,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '.tagline': {
    display: 'flex',
    fontSize: toVw(14, 1920),
    lineHeight: 18 / 14,
    fontFamily: '$mono',
    mt: toVw(16, 1920),

    p: {
      '&:nth-child(1)': {
        maxWidth: toVw(466, 1920),
        mr: toVw(691, 1920)
      },

      '&:nth-child(2)': {
        maxWidth: toVw(302, 1920)
      }
    }
  },

  h1: {
    mt: toVw(32, 1920),
    fontSize: toVw(47, 1920),
    lineHeight: 1.1,
    textTransform: 'uppercase',
    fontFamily: '$grotequeExtended'
  }
})

const ActionContainer = styled('div', {
  pt: toVw(32, 1920),
  borderTop: '1px solid $white',
  position: 'relative'
})

const Web3Box = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: `calc(100% - ${toVw(32, 1920)})`,
  background: '$black',
  pl: toVw(32, 1920),

  '> div': {
    display: 'flex',
    alignItems: 'flex-end',
    fontSize: toVw(20, 1920),
    justifyContent: 'space-between',

    p: {
      flexShrink: 0,
      minWidth: toVw(66, 1920)
    }
  },

  h3: {
    fontSize: toVw(47, 1920),
    fontFamily: '$grotequeExtended',
    textAlign: 'center'
  }
})

const H2 = styled('h2', {
  fontSize: toVw(115, 1920),
  fontFamily: '$grotequeExtended',
  fontWeight: 900,
  lineHeight: 1.1,
  textTransform: 'uppercase',
  display: 'flex',
  justifyContent: 'space-between',

  b: {
    color: '$orange',
    fontVariantNumeric: 'tabular-nums'
  }
})

const CTA = styled('button', {
  width: '100%',
  borderRadius: '72px',
  border: '1px solid $white',
  height: toVw(98, 1920),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontWeight: 900,
  fontSize: toVw(48, 1920),
  lineHeight: 1.1
})
