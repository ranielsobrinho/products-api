import * as yup from 'yup'

const productSchema = yup.object({
  nome_produto: yup.string().min(5).required('Product name field is required.'),
  quantidade_estoque: yup.number().min(5).required('Quantity field is required.'),
  valor: yup.number().required('Value field is required.'),
  fabricante: yup.number().required('Manufacturer field is required.')
})

export default productSchema