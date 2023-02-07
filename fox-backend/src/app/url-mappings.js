import express from 'express'
import { RegisterUser } from '../controllers/user.js'
import { AuthorizeUser } from '../controllers/user.js'
import { TokenAuthMiddleware } from '../middlewares/auth.js'
import { searchBooks } from '../controllers/books.js'
import { favBooks } from '../controllers/books.js'
import { getBooks } from '../controllers/books.js'

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.post('/authorize', AuthorizeUser)
router.post('/register', RegisterUser)


router.use(TokenAuthMiddleware)
router.post('/search-books', searchBooks)
router.post('/fav-books',favBooks)
router.get('/profile/:email',getBooks)

export default router;
