"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const favorites_1 = __importDefault(require("./routes/favorites"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/favorites', favorites_1.default);
// Basic health check
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'favorite-movies-backend' });
});
// Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, _req, res, _next) => {
    const status = typeof err?.status === 'number' ? err.status : 500;
    const message = err?.message || 'Internal Server Error';
    const response = { error: message };
    if (process.env.NODE_ENV !== 'production' && err?.stack) {
        response.stack = err.stack;
    }
    res.status(status).json(response);
});
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
exports.default = app;
//# sourceMappingURL=index.js.map