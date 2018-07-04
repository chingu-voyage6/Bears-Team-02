import React from 'react'
import Aux from '../../hoc/aux';
import './Links.css'

const Links = props => {
  const Link = props.links.map(link => {
    return <a href={link.url} className={link.class}>{link.name}</a>
  })

  return (
    <Aux>
      {Link}
    </Aux>
  )
}

export default Links