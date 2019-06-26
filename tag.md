### 标签栏的实现
1. 标签配置： `name: required` `noCache` `affix`
2. 标签数据存放在状态管理器里面： `visitedViews` 存放当前显示的所有标签页；`cachedViews` 存放所有固定的标签页

### 初始化标签逻辑
1. 当页面挂载时，触发初始化标签方法

   1. 从用户路由表里面获取所有可访问路由
   2. 利用递归函数筛选出所有包含 `affix` 属性的路由
   3. 仅当筛选的路由的 `name` 属性不为空时，才会触发分发函数，将固定显示的路由添加到状态管理器的 `visitedViews` 里面
   4. 循环输出 `visitedViews` 生成初始默认路由

### 添加标签逻辑
1. `watch` 监听路由变化，当路由改变时，利用路由的 `name` 属性判断当前路由是否已经存在于 `cachedViews` 
2. 判断路由的 `path` 是否存在于 `visitedViews` 