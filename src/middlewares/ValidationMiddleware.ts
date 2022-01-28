import { Request, Response, NextFunction } from "express";
import * as yup from 'yup'

const validate = (schema: yup.AnyObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  try {
    schema.validate(body)
      .then(
        () => {
          next()
        }
      )
      .catch((error) => {
        return res.status(400).json(error)
      })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export default validate