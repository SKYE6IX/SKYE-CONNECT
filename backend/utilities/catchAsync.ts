// Defining an async error handler utility that help instead of using try and catch !!!!
import { Request, Response, NextFunction } from "express";
const catchAsync = (func: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch(next);
    };
};

export default catchAsync;
