import { Request, Response, NextFunction } from 'express';

export default function errorHandler(
    err: any, // يمكن يكون Error أو object
    req: Request,
    res: Response,
    next: NextFunction
): void {
    console.error('🔥 Full error:', err); // يطبع كل شيء للكونسول

    const status = err?.status || 500;

    let message;
    if (typeof err?.message === 'object' && err.message.message) {
        message = err.message;
    } else {
        message = { message: err?.message || 'Internal Server Error' };
    }

    res.status(status).json(message);
}
