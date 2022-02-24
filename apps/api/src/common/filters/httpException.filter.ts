import { Catch, ExceptionFilter } from "@nestjs/common";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(err: any, host: any) {
    console.log(err);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const req = ctx.getRequest();
    const errMessage = err?.message;
    const errStatus = err?.status;
    if (err.code === "23505") {
      const strArr = err.detail.split("=");
      response?.status(400).json({
        message: strArr[0] + " " + "already exists",
      });
    } else {
      console.log(err);
      if (errStatus !== 500) {
        delete err?.parameters;
        response?.status(errStatus || 500).json({
          err,
        });
      } else {
        response?.status(500).json({
          message: "some internal error has occured",
        });
      }
    }
  }
}
