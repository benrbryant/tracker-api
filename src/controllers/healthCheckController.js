import asyncHandler from "../utils/asyncHandler";

export const getHealthStatus = asyncHandler((req, res, next) => {
    res.json({ status: "up" })
})