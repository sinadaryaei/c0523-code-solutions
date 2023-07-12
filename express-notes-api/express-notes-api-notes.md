# express-notes-api-notes

## Notes

All student notes should be written here.

JS:

```javascript
app.get('/api/notes/:id', validateId, findNote, (req, res) => {
                              +             +
                              |             |
 res.json(req.note);          v             +------------------------+
                                                                     |
                 function validateId(req, res, next) {               |
});                const id = parseInt(req.params.id, 10);           |
                   if (!Number.isInteger(id) || id <= 0) {           |
                     res.status(400).json({ error: ERRORS.ID });     |
                     return;                                         |
                   }                                                 |
                   req.id = id;                                      v
                   next();
                 }                                 async function findNote(req, res, next) {
                                                     try {
                                                       const data = await DataHandler.read();
                                                       const note = data.notes?.[req.id];
                                                       if (note) {
                                                         req.note = note;
                                                         req.data = data;
                                                         next();
                                                       } else {
                                                         res.status(404).json({ error: ERRORS.NOT_FOUND(req.id) });
                                                       }
                                                     } catch (err) {
                                                       next(err);
                                                     }
                                                   }
```

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
