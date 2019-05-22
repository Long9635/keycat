import React from 'react'
import styled from 'styled-components'
import { Field } from 'formik'
import { Input } from 'design/atoms/Input'

interface Props {
  hidden?: boolean,
}

const Container = styled.div`
  &[data-hidden="true"] {
    height: 0px;
    overflow: hidden;
  }
`

const AccountField = (props: Props) => {
  const { hidden } = props;

  return (
    <Container data-hidden={hidden}>
      <Field
        name="account"
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            id="account"
            autoComplete="account"
            tabIndex={hidden ? -1 : 0}
            autoCorrect="false"
            placeholder="Account Name"
          />
        )}
      />
    </Container>
  )
}

export default AccountField