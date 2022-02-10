
import React from 'react'
import "./index.css"
import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Content from './layout/Content';
import Widgets from './layout/Widgets';

export default function App() {
  return (
      <Container>
        <Sidebar/>
        <Content/>
        <Widgets/>
      </Container>
  )
}

