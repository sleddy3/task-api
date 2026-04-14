export function validateCompletedQuery(req, res, next) {
    const { completed } = req.query;

    if (completed === undefined) return next();
    if (completed === 'true') {
        req.query.completed = true;
        return next();
    }
    if (completed === 'false') {
        req.query.completed = false;
        return next();
    }

    return res.status(400).json({
        error: 'completed must be true or false',
    });
}