"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
const TypeEnum = zod_1.z.enum(['MOVIE', 'TV_SHOW']);
const favoriteCreateSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'title is required'),
    type: TypeEnum,
    director: zod_1.z.string().min(1, 'director is required'),
    budget: zod_1.z.string().min(1, 'budget is required'),
    location: zod_1.z.string().min(1, 'location is required'),
    duration: zod_1.z.string().min(1, 'duration is required'),
    year: zod_1.z.string().min(1, 'year is required'),
});
const favoriteUpdateSchema = favoriteCreateSchema.partial();
function asyncHandler(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
}
// GET /api/favorites - list all
router.get('/', asyncHandler(async (req, res) => {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.max(1, Math.min(100, Number(req.query.limit) || 10));
    const skip = (page - 1) * limit;
    const [favorites, total] = await Promise.all([
        prisma.favorite.findMany({ orderBy: { id: 'desc' }, skip, take: limit }),
        prisma.favorite.count(),
    ]);
    res.json({ data: favorites, page, limit, total });
}));
// GET /api/favorites/:id - get one
router.get('/:id', asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const favorite = await prisma.favorite.findUnique({ where: { id } });
    if (!favorite) {
        return res.status(404).json({ error: 'Favorite not found' });
    }
    res.json(favorite);
}));
// POST /api/favorites - create
router.post('/', asyncHandler(async (req, res) => {
    const parsed = favoriteCreateSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Validation error', details: parsed.error.flatten() });
    }
    const created = await prisma.favorite.create({ data: parsed.data });
    res.status(201).json(created);
}));
// PUT /api/favorites/:id - update
router.put('/:id', asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const parsed = favoriteUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Validation error', details: parsed.error.flatten() });
    }
    const existing = await prisma.favorite.findUnique({ where: { id } });
    if (!existing) {
        return res.status(404).json({ error: 'Favorite not found' });
    }
    // Build update data object only with provided fields to satisfy exactOptionalPropertyTypes
    const data = {};
    if (parsed.data.title !== undefined)
        data.title = parsed.data.title;
    if (parsed.data.type !== undefined)
        data.type = parsed.data.type; // enum maps correctly
    if (parsed.data.director !== undefined)
        data.director = parsed.data.director;
    if (parsed.data.budget !== undefined)
        data.budget = parsed.data.budget;
    if (parsed.data.location !== undefined)
        data.location = parsed.data.location;
    if (parsed.data.duration !== undefined)
        data.duration = parsed.data.duration;
    if (parsed.data.year !== undefined)
        data.year = parsed.data.year;
    const updated = await prisma.favorite.update({ where: { id }, data });
    res.json(updated);
}));
// DELETE /api/favorites/:id - delete
router.delete('/:id', asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const existing = await prisma.favorite.findUnique({ where: { id } });
    if (!existing) {
        return res.status(404).json({ error: 'Favorite not found' });
    }
    await prisma.favorite.delete({ where: { id } });
    res.status(204).send();
}));
exports.default = router;
//# sourceMappingURL=favorites.js.map