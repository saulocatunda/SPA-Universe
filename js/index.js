import { Router } from './routes.js'

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/explorer', '/pages/explore.html')
router.add(404, '/pages/404.html')

router.handle()

window.route = () => router.route()

window.onpopstate = () => router.handle()
