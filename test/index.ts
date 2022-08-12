import lorem from '../src/index'

for (let i = 0; i < 5; i++) {
  console.log(
    lorem({
      max: 15,
      useSimplified: true,
      usePunctuation: true,
      exclude: '你我'
    })
  )
}
