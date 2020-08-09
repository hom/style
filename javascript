1. 在 `HTML` `DOM` 中触发的时间请加上 `on` 前缀，比如 `onSelectTaskType` ，在 `JavaScript` 中调用的时间不需要添加前缀，比如 `getPlanList`
```js
// button
<button on-click="onClickButton">Button</button>
```

2. 在 `Form` 表单中触发的事件请添加表单的类型，比如 `input` 表达的 `change` 事件，可更改触发时间名称为 `onInputName`，在 `select` 表单中，`change` 事件为 `onSelectTaskType`
```js
// element-ui input的change事件为onInputValueName或者 onChangeInputValueName
<el-input v-model="value" type="text" @change="onInputValueName" @focus="onFocusValueName" @blur="onBlurValueName" />
```
