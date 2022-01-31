import * as yup from 'yup'

const manufactureSchema = yup.object({
  nome_fabricante: yup.string().required("Manufacturer name is required."),
  telefone: yup.number().required("Phone number is required.")
})

export default manufactureSchema