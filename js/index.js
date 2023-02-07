import { Router } from './routes.js'

const router = new Router()

router.add(
  '/SPA-Universe/',
  'https://saulocatunda.github.io/SPA-Universe/pages/home'
)
router.add(
  '/SPA-Universe/about',
  'https://saulocatunda.github.io/SPA-Universe/pages/about'
)
router.add(
  '/SPA-Universe/explore',
  'https://saulocatunda.github.io/SPA-Universe/pages/explore'
)
router.add(
  '/SPA-Universe/404',
  'https://saulocatunda.github.io/SPA-Universe/pages/404'
)

router.handle()

window.route = () => router.route()

window.onpopstate = () => router.handle()
