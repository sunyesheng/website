---
id: react-router-v6
title: React-routerV6版本初体验
---

本篇博客对 React17 的 Hooks 源码进行了剖析, 目的是理解 React 的 Hooks 设计

## 1. BrowserRouter vs HashRouter

### 1.1 是什么

BrowserRouter: `window.history`

HashRouter: `window.hash`

### 2.2 区别:

history 调用栈可以保存 state, hash 不可以

## 2. React-router@6.0.0-beta.0 new Feature

### 2.1 路由嵌套：

如果在 Routes 中还有需要嵌套的路由，只需要在父路由加入`.*`的匹配条件

You'll only need the trailing \* when there is another `<Routes>` somewhere in that route's descendant tree

### 2.2 动态参数

- .\*
- :id

`.*`只能用在末尾

> A \* wildcard may be used only at the end of a path, not in the middle.

### 2.3 配置规则

配置规则:

v5: react-router-config

v6: hooks: useRoutes()

> v6 版本相对与 v5 版本，使用了 useRoutes 的 hook 来替换了 v5 的 react-router-config

```typescript jsx
function App() {
  let element = useRoutes([
    { path: '/', element: <MainLayout /> },
    { path: '/home', element: <Home /> },
  ])
  return element
}
```

> 此时需要在 App 中使用 useRoutes 的 hook，并且将他返回,但这样的话，我们的单页面应用的 App 容器就没有了。
> 我们需要在 index 或者在自己项目中自定的 context 中添加 App 容器，类似与下面这样

```typescript jsx
import { BrowserRouter as Router } from 'react-router-dom'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">{children}</div>
      </Router>
    </Provider>
  )
}
```

在代码中的 context 中加入 Router，也就是 BrowserRouter 下增加 App 容器，在 App 中返回 useRoutes()的返回值

### 2.4 使用 navigate 替换 history

V5

```typescript jsx
// This is a React Router v5 app
import { useHistory } from 'react-router-dom'

function App() {
  let history = useHistory()
  function handleClick() {
    history.push('/home')
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  )
}
```

V6

```typescript jsx
// This is a React Router v6 app
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate = useNavigate()
  function handleClick() {
    navigate('/home')
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  )
}
```

### 2.5 重定向

V5 版本重定向

```typescript jsx
<Redirect
  to={{
    pathname: '/login',
    state: { referrer: currentLocation },
  }}
/>
```

V6, to 和 state 属性分开，可读性好，

```typescript jsx
<Navigate to="/home" replace state={state} />
```

`Navigate`标签会`new`一个`location`实例, 如果你想记录 state 值将当前 URL 存入 history 调用栈中,

请使用`navigate(to: string, config: object)` 方法

如果你对`BrowserRouter`的`history`对象不了解的话
请移步这里[MDN history 对象](https://developer.mozilla.org/zh-CN/docs/Web/API/History)

## 3. react-router v5 vs v6

```typescript jsx
// TODO: 在V6中使用element替换component属性的原因

V6: <Route element={<Home />}></Route>
V5: <Route component={Home}></Route>
```

如果你已经知道了什么是`JSX.Element和ReactElement`,请跳过直接看 3.1

我们先来看看在 React 中, 当我们引入一个组件的时候, 他是一个什么样的类型

```typescript jsx
import { Home } from 'components/Home'
```

Home 很简单，就是一个简单的`Function component`

他的类型是这样的: `() => JSX.Element`

这是一个函数，返回了一个`JSX.Element`类型, `JSX.Element`类型也比较简单，他继承于`ReactElement`，而且并没有添加
额外的属性，所有从某种程度上来说他和`ReactElement`属性是约等于的关系

在`React`的`.d.ts`中是这么定义的，可以简单看一看

```typescript
declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
}
```

### 3.1 props 透传问题

由于我们引入组件的时候是这样的类型`() => JSX.Element` 而不是一个组件

所以组件传值成为了`<Route>`使用`component`的问题

React-router 的 V6 官方文档中有这样一段描述:

> The fallback prop takes a React element, not a component.
> This lets you easily pass whatever props you want to your `<Spinner>` from the component that renders it.

在 V5 中如果我们想要给渲染的组件传值，我们第一反应是通过`renderProps`进行 props 透传，类似于这样

```typescript jsx
<Route
  path=":userId"
  render={(routeProps) => <Profile routeProps={routeProps} animate={true} />}
/>
```

但在 V6 中, 使用`element`替换了`component`属性, 可以直接支持传入组件

于是我们的 props 传递问题变成了这样

```typescript jsx
<Route element={<Home title={'home'} />} />
```

相较于 V5 版本，非常简便而且易懂

### 3.2 子路由匹配问题

如果在父路由下还有子路由，需要在顶层路由，只需要添加`.*`通配符

> You'll only need the trailing \* when there is another `<Routes>` somewhere in that route's descendant tree

```typescript jsx
<Route path={'/home/.*'} element={<Home />} />
```

在 Home 中也有子路由，并且需要顶层路由`/Home`下, 只需要在父路由加上通配符`*`

```typescript jsx
export const Home = () => {
  return (
    <div>
      <Route path={'/index'} />
    </div>
  )
}
```

### 3.3 支持的通配符

react-router 的 V6 版本只支持以下俩种通配符

- `.*`
- `:id`

## 参考文献:

- [Github React-router version-7 advanced-guide](https://github.com/ReactTraining/react-router/blob/v6.0.0-beta.0/docs/advanced-guides/migrating-5-to-6.md)
