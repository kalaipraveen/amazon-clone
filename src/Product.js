
import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Title>
                Samsung M20
            </Title>
            <Price>
                $1200
            </Price>
            <Rating>
                ⭐⭐⭐⭐⭐
            </Rating>
            <Image src="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg" />
            <ActionSection>
                <AddToCartButton>
                    Add to cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product


const Container = styled.div`
background-color: white;
max-height: 400px;
flex: 1 ;
padding: 20px;
margin: 10px;
z-index:100;
display: flex;
flex-direction: column;
margin-top: 3px;
`

const Title = styled.span``
const Price = styled.span`
font-weight: 500;

`
const Rating = styled.div``
const Image = styled.img`
max-height: 200px ;
object-fit: contain;
`

const ActionSection = styled.div`
margin-top: 12px;
display: grid;
place-items: center;
`

const AddToCartButton = styled.button`
width: 100px ;
height: 30px ;
background-color: #f0c14b;
border: 2px solid #a88734 ;
border-radius: 2px;

`