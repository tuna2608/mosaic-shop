import React from 'react'
import HeaderComponent from '../../../components/client/HeaderComponent/HeaderComponent'
import FooterComponent from '../../../components/client/FooterComponent/FooterComponent'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 80px;
    background-color: aqua;
    padding: 0 135px;
    height: 100px;
`
const Title = styled.div`
    width: 100%;
    text-align: center;
    background-color: grey;
    font-weight: bold;
    font-size: 48px;
`


const UploadPicture = () => {
  return (
    <>
        <HeaderComponent/>
        <Container>
            <Title>Tranh mosaics DIY</Title>
            
        </Container>
        <FooterComponent/>
    </>
  )
}

export default UploadPicture
