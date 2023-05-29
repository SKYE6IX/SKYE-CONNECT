//Defing custom error handler with class
export class ExpressError extends Error {
    constructor(public message: string, public statusCode: number) {
        super();
    }
}
