import React from 'react'
import { Container } from './styledComponents/Container'
import { Name } from './styledComponents/Name'
import { Separator } from './styledComponents/Separator'
import { SubInfo } from './styledComponents/SubInfo'
import { Carreer } from './styledComponents/Carreer'
import { Text } from './styledComponents/Text'
import { Link } from './styledComponents/Link'

export const SampleComponent = () => {
  return (
    <Container>
      <Name>Karim Bolkovich</Name>
      <Separator />
      <SubInfo>
        <Carreer>Front End Engineer</Carreer>
        <div
          style={{
            marginLeft: 15,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <p style={{ marginRight: 10, fontSize: 12 }}>
            <span>👾</span>
          </p>
          <Carreer>45</Carreer>
        </div>
      </SubInfo>
      <Text>
        Hey! I don't exist at all... I'm just a creation of the imagination of
        an Alien inside another Alien controled by the amazing Matrix inside the
        Nodriza, wait... what?
      </Text>
      <Link href='https://carlosumanha.now.sh' target='blank'>
        Know the creator
      </Link>
    </Container>
  )
}
