"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function InsertUser(username, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname
            },
            select: {
                id: true,
                password: true
            }
        });
        console.log(user);
    });
}
function UpdateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { email, firstname, lastname }) {
        const result = yield prisma.user.update({
            where: {
                username: username,
            },
            data: {
                username: email,
                firstname: firstname,
                lastname: lastname
            }
        });
        console.log(result);
    });
}
// UpdateUser("harry@google.com", {email: "ryan@google.com", firstname: "Ryan", lastname: "Mason"})
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirstOrThrow({
            select: {
                firstname: true,
                lastname: true
            },
            where: {
                username: username
            }
        });
        console.log(res);
    });
}
getUser("robert@google.com");
