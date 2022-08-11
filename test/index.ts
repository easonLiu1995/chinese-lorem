import lorem from '../src/index'

for (let i = 0; i < 100; i++) {
  console.log(
    lorem({
      max: 100,
      min: 100,
      usePunctuation: true
    })
  )
}
