import styled from 'styled-components'


const ProductWrapper = styled.div`
      width: 100%;
      padding: 10px;
      border: 1px solid #efefef;
      border-radius: 6px;

      @media(min-width: 768px){
        width: 48%;
      }

      @media(min-width: 1000px){
        width: 30%;
      }

      @media(min-width: 1200px){
        width: 23%;
      }
`

const ProductImage = styled.img`
      width: 100%;
      height: 250px;
      object-fit: cover;
   `

const ProductInfoWrapper = styled.div`
      padding: 15px 0;
`

const ProductTitle = styled.h2`
      color: #474f50;
      font-size: 28px;
      font-weight: 400;
`

const ProductPrice = styled.h3`
       color: #474f50;
       font-size: 23px;
       font-weight: 400;
`

const ShopButton = styled.button`
      border: none;
      outline: none;
      background-color: #f1eded;
      padding: 10px 20px;
      border: 1px solid #f1e6e6;
      cursor: pointer;
      transition: 0.5s ease-in-out;

      &:hover{
        background-color: #f7f7f7;
      }
      
`



const Product = ({ img, title, price }) => {
  return (
    <ProductWrapper>

          <ProductImage src={img} alt="product"/>

        <ProductInfoWrapper>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>${price}</ProductPrice>
        </ProductInfoWrapper>
         
         <ShopButton>Buy now</ShopButton>
    </ProductWrapper>
  )
}

export default Product