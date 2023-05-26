import React from 'react'

export type HeaderProps = {
  
};

type Props = {
  header : string
}

const index = ({header} : Props) => {
  return (
    <div>{header}</div>
  )
}

export default index