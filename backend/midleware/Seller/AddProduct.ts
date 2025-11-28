import express from 'express'
import auth from "../Auth";
import error from "../../class/error";
import products from "../../dataBase/Products";
import successful from "../../class/successful";

const router = express.Router();
router.use(auth);

router.post('/', async (req: any, res: any, next: any) => {
    try {
        if (!req.auth || !req.auth.IsSupporter) {
            return res.status(error.haveNotAccess('supporter').status).json(error.haveNotAccess('supporter').message);
        }

        const body = req.body as {
            ProductName?: string;
            Count?: number | string;
            Price?: number | string;
            Description?: string;
            Img?: string;
            TheGame?: string;
        };
        if (!body.ProductName || body.ProductName.toString().trim() === '') {
            return res.status(error.notProvides('ProductName').status).json(error.notProvides('ProductName').message);
        }

        const count = Number(body.Count);
        const price = Number(body.Price);

        if (Number.isNaN(count) || count < 0) {
            return res.status(error.notProvides('valid Count').status).json(error.notProvides('valid Count').message);
        }

        if (Number.isNaN(price) || price < 0) {
            return res.status(error.notProvides('valid Price').status).json(error.notProvides('valid Price').message);
        }

        const allowed = {
            ProductName: body.ProductName,
            Count: count,
            Price: price,
            Description: body.Description?.toString() ?? '',
            Img: body.Img?.toString() ?? '',
            TheGame: body.TheGame?.toString() ?? ''
        };

        const newProduct = await new products(allowed).save();

        return res.status(201).json({
            message: successful.successful().message,
            product: newProduct
        });
    } catch (e) {
        next(e);
    }
});
export default router;