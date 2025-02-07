"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT || 3000;
exports.server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        data: "It Works!",
    }));
});
exports.server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
//# sourceMappingURL=index.js.map