import { ContainerProducts } from '../ListProducts/style'
import { ProductCart } from './style';
import { Modal } from '@mui/material';

function ListProductsCart() {
    return (
        <ContainerProducts>
            <ProductCart>
                <img src="https://imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399" alt="" />
                <span className='product-name-cart'>nome do produto</span>
                <span className='price-product-cart'>VALOR UNITARIO: R$40.00</span>
                <button className='remove-product-cart'>excluir</button>
                <input type="number" min="1" className='amount-of-product-cart' />
                <button className='finalize-purchase-cart'>finalize purchase</button>
            </ProductCart>
        </ContainerProducts>
    )
}

export default ListProductsCart