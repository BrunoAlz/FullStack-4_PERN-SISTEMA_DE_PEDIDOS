import crypto from "crypto";
import multer from "multer";

import { extname, resolve } from "path";
import { ProductRepository } from "../repository/ProductRepository";
import { responseMessages } from "../constants/responseMessages";

const productRepository = new ProductRepository();

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(4).toString("hex");
          const fileName = `${fileHash}-${file.originalname.replace(" ", "_")}`;

          return callback(null, fileName);
        },
      }),
      fileFilter: async (request, file, callback) => {
        const fileName = file.filename; // Obtém o nome do arquivo

        try {
          // Verifica se o registro já existe no banco
          const productExists = await productRepository.checkIfProductExists(
            fileName
          );

          if (productExists) {
            // O registro já existe, rejeitar o upload
            callback(new Error(responseMessages.productExists.error));
          } else {
            // O registro não existe, permitir o upload
            callback(null, true);
          }
        } catch (error) {
          // Ocorreu um erro ao verificar o registro
          callback(new Error(responseMessages.serverError.error));
        }
      },
    };
  },
};
