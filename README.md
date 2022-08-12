# Chinese Lorem 中文假字
## Usage
### 1. Install
`npm install @easonliu1995/chinese-lorem`
### 2. Import
`import lorem from "@easonliu1995/chinese-lorem"`
### 3. Use Example
`lorem({max: 10})`  
-> 目搞  
-> 此壞布式走初護魚  
`lorem({min: 5, max: 10 })`  
-> 它偉流述特差預  
-> 己行息克事  
`lorem({max: 3, usePunctuation: true})`  
-> 史決。  
-> 檢。  
`lorem({max: 15, usePunctuation: true})`  
-> 武意産，可正願試，望另。  
-> 送員地美照。  
`lorem({max: 15, usePunctuation: true, useSimplified: true})`  
-> 劳区提故胜顺错心青。  
-> 远呀么，万倍。
## Options
```
{
  max: number,
  min: number,
  extend: string,
  exclude: string
  usePunctuation: boolean // default false,
  useSimplified: boolean // default false
}
```
- `max`: `required`
- `min`: can't only have min number, or min number greater than max number.
- `extend`: add more charactor to randomize
- `exclude`: exclude specific character
- `usePunctuation`: add commas and period.  
-> commas appear when words length greater than 5  
-> period appear when words length greater than 2, and only appear once at last character.
- `useSimplified`: use Simplified Chinese.
  
Any improvement suggestions can contact me, thank you!
