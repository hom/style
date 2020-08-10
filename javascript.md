1. 在 `HTML` `DOM` 中触发的时间请加上 `on` 前缀，比如 `onSelectTaskType` ，在 `JavaScript` 中调用的时间不需要添加前缀，比如 `getPlanList`
```js
// button
<button on-click="onClickButton">Button</button>
```

2. 在 `Form` 表单中触发的事件请添加表单的类型，比如 `input` 表达的 `change` 事件，可更改触发时间名称为 `onInputName`，在 `select` 表单中，`change` 事件为 `onSelectTaskType`

   > Why?
   >
   > 通过给事件添加 `on` 前缀我们可以知道事件是从 `HTML` 中触发的，并在事件第二位添加 `Input` `Select` `Focus` `Blur` 等标记，我们可以知道事件是从 `form` 表单中的元素触发的特定事件
```js
// element-ui input的change事件为onInputValueName或者 onChangeInputValueName
<el-input v-model="value" type="text" @change="onInputValueName" @focus="onFocusValueName" @blur="onBlurValueName" />
```

3. 在 `vue` 等支持 `jsx` 语言的前端开发框架中，如果使用 `js` 中的方法，也需要加上 `on` 的事件前缀

   > Why?
   >
   > 通过添加通用的 `on` 事件前缀，我们可以知道事件是从 `HTML` 中请求触发

