import { Router } from 'express';
import Foo from '../models/foo';

const fooRouter = new Router();

/**
 * Handle GET requests. All items.
 */
fooRouter.get('/', (req, res) => {
    Foo.find((err, items) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send(items);
    });
});

/**
 * Handle GET requests. Single item.
 */
fooRouter.get('/:id', (req, res) => {
    // req.params.id
    // @TODO
});

/**
 * Handle POST requests. Add new item.
 */
fooRouter.post('/', (req, res) => {
    const newItem = new Foo(req.body);
    newItem.save((err, newItem) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).send(newItem);
    });
});

/**
 * Handle PUT requests. Edit single item.
 */
fooRouter.put('/:id', (req, res) => {
    Foo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedItem) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(updatedItem);
        }
    );
});

/**
 * Handle DELETE requests. Delete single item.
 */
fooRouter.delete('/:id', (req, res) => {
    Foo.findByIdAndRemove(req.params.id, (err, deletedItem) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send({ message: 'Todo was deleted.', deletedItem });
    });
});

export default fooRouter;
