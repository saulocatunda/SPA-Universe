import { Router } from './routes.js'

const router = new Router()

router.add('/', 'https://saulocatunda.github.io/SPA-Universe/pages/home')
router.add(
  '/pages/about',
  'https://saulocatunda.github.io/SPA-Universe/pages/about'
)
router.add(
  '/pages/explore',
  'https://saulocatunda.github.io/SPA-Universe/pages/explore'
)
router.add(
  '/pages/404',
  'https://saulocatunda.github.io/SPA-Universe/pages/404'
)

router.handle()

window.route = () => router.route()

window.onpopstate = () => router.handle()
