export var HttpStatusCodeEnum;
(function (HttpStatusCodeEnum) {
    HttpStatusCodeEnum[HttpStatusCodeEnum["OK"] = 200] = "OK";
    HttpStatusCodeEnum[HttpStatusCodeEnum["BadRequest"] = 400] = "BadRequest";
    HttpStatusCodeEnum[HttpStatusCodeEnum["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCodeEnum[HttpStatusCodeEnum["Forbidden"] = 403] = "Forbidden";
    HttpStatusCodeEnum[HttpStatusCodeEnum["NotFound"] = 404] = "NotFound";
    HttpStatusCodeEnum[HttpStatusCodeEnum["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatusCodeEnum || (HttpStatusCodeEnum = {}));
