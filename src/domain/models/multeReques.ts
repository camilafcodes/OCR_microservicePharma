import { Request } from 'express';


export interface MulterRequest extends Request {
    ile?:File
}