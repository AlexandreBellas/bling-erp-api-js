import it from 'japa'

import Bling from '../lib/bling'

it.failing('should fail when an ordinary request is made with a bad API key', async (assert) => {
  const bling = new Bling('1234')

  console.log(await bling.products().all())
})
