(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1591:function(n,t){n.exports={content:["section",["p","展示行列数据。"],["h2","设计师专属"],["p","安装 ",["a",{title:null,href:"https://kitchen.alipay.com/"},"Kitchen Sketch 插件 💎"],"，两步就可以自动生成 Ant Design 表格组件。"],["h2","何时使用"],["ul",["li",["p","当有大量结构化的数据需要展现时；"]],["li",["p","当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。"]]],["h2","如何使用"],["p","指定表格的数据源 ",["code","dataSource"]," 为一个数组。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'胡彦斌\'</span><span class="token punctuation">,</span>\n    age<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n    address<span class="token punctuation">:</span> <span class="token string">\'西湖区湖底公园1号\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'胡彦祖\'</span><span class="token punctuation">,</span>\n    age<span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n    address<span class="token punctuation">:</span> <span class="token string">\'西湖区湖底公园1号\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'姓名\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'年龄\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'住址\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","const dataSource = [\n  {\n    key: '1',\n    name: '胡彦斌',\n    age: 32,\n    address: '西湖区湖底公园1号',\n  },\n  {\n    key: '2',\n    name: '胡彦祖',\n    age: 42,\n    address: '西湖区湖底公园1号',\n  },\n];\n\nconst columns = [\n  {\n    title: '姓名',\n    dataIndex: 'name',\n    key: 'name',\n  },\n  {\n    title: '年龄',\n    dataIndex: 'age',\n    key: 'age',\n  },\n  {\n    title: '住址',\n    dataIndex: 'address',\n    key: 'address',\n  },\n];\n\n<Table dataSource={dataSource} columns={columns} />;"]]],meta:{category:"Components",cols:1,type:"数据展示",title:"Table",subtitle:"表格",filename:"components/table/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#设计师专属",title:"设计师专属"},"设计师专属"]],["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#如何使用",title:"如何使用"},"如何使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#在-TypeScript-中使用",title:"在 TypeScript 中使用"},"在 TypeScript 中使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#注意",title:"注意"},"注意"]]],api:["section",["h2","API"],["h3","Table"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","bordered"],["td","是否展示外边框和列边框"],["td","boolean"],["td","false"]],["tr",["td","childrenColumnName"],["td","指定树形结构的列名"],["td","string","[","]"],["td","children"]],["tr",["td","columns"],["td","表格列的配置描述，具体项见下表"],["td",["a",{title:null,href:"https://git.io/vMMXC"},"ColumnProps"],"[","]"],["td","-"]],["tr",["td","components"],["td","覆盖默认的 table 元素"],["td",["a",{title:null,href:"https://git.io/fANxz"},"TableComponents"]],["td","-"]],["tr",["td","dataSource"],["td","数据数组"],["td","any","[","]"],["td"]],["tr",["td","defaultExpandAllRows"],["td","初始时，是否展开所有行"],["td","boolean"],["td","false"]],["tr",["td","defaultExpandedRowKeys"],["td","默认展开的行"],["td","string","[","]"],["td","-"]],["tr",["td","expandedRowKeys"],["td","展开的行，控制属性"],["td","string","[","]"],["td","-"]],["tr",["td","expandedRowRender"],["td","额外的展开行"],["td","Function(record, index, indent, expanded):ReactNode"],["td","-"]],["tr",["td","expandIcon"],["td","自定义展开图标，参考",["a",{title:null,href:"http://react-component.github.io/table/examples/expandIcon.html"},"示例"]],["td","Function(props):ReactNode"],["td","-"]],["tr",["td","expandRowByClick"],["td","通过点击行来展开子行"],["td","boolean"],["td",["code","false"]]],["tr",["td","footer"],["td","表格尾部"],["td","Function(currentPageData)"],["td"]],["tr",["td","indentSize"],["td","展示树形数据时，每层缩进的宽度，以 px 为单位"],["td","number"],["td","15"]],["tr",["td","loading"],["td","页面是否加载中"],["td","boolean","|",["a",{title:null,href:"https://ant.design/components/spin-cn/#API"},"object"]," (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/4544#issuecomment-271533135"},"更多"],")"],["td","false"]],["tr",["td","locale"],["td","默认文案设置，目前包括排序、过滤、空数据文案"],["td","object"],["td","filterConfirm: '确定' ",["br"]," filterReset: '重置' ",["br"]," emptyText: '暂无数据' ",["br"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511"},"默认值"]]],["tr",["td","pagination"],["td","分页器，参考",["a",{title:null,href:"#pagination"},"配置项"],"或 ",["a",{title:null,href:"/components/pagination/"},"pagination"]," 文档，设为 false 时不展示和进行分页"],["td","object"],["td"]],["tr",["td","rowClassName"],["td","表格行的类名"],["td","Function(record, index):string"],["td","-"]],["tr",["td","rowKey"],["td","表格行 key 的取值，可以是字符串或一个函数"],["td","string","|","Function(record):string"],["td","'key'"]],["tr",["td","rowSelection"],["td","表格行是否可选择，",["a",{title:null,href:"#rowSelection"},"配置项"]],["td","object"],["td","null"]],["tr",["td","scroll"],["td","设置横向或纵向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，",["code","true"]," 和 ",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content"},"'max-content'"]],["td","{ x: number ","|"," true, y: number }"],["td","-"]],["tr",["td","showHeader"],["td","是否显示表头"],["td","boolean"],["td","true"]],["tr",["td","size"],["td","表格大小"],["td","default ","|"," middle ","|"," small"],["td","default"]],["tr",["td","title"],["td","表格标题"],["td","Function(currentPageData)"],["td"]],["tr",["td","onChange"],["td","分页、排序、筛选变化时触发"],["td","Function(pagination, filters, sorter, extra: { currentDataSource: [] })"],["td"]],["tr",["td","onExpand"],["td","点击展开图标时触发"],["td","Function(expanded, record)"],["td"]],["tr",["td","onExpandedRowsChange"],["td","展开的行变化时触发"],["td","Function(expandedRows)"],["td"]],["tr",["td","onHeaderRow"],["td","设置头部行属性"],["td","Function(column, index)"],["td","-"]],["tr",["td","onRow"],["td","设置行属性"],["td","Function(record, index)"],["td","-"]]]],["h4","onRow 用法"],["p","适用于 ",["code","onRow"]," ",["code","onHeaderRow"]," ",["code","onCell"]," ",["code","onHeaderCell"],"。"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Table\n  onRow<span class="token operator">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      onClick<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 点击行</span>\n      onDoubleClick<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      onContextMenu<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      onMouseEnter<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 鼠标移入行</span>\n      onMouseLeave<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  onHeaderRow<span class="token operator">=</span><span class="token punctuation">{</span>column <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 点击表头行</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>'},["code","<Table\n  onRow={record => {\n    return {\n      onClick: event => {}, // 点击行\n      onDoubleClick: event => {},\n      onContextMenu: event => {},\n      onMouseEnter: event => {}, // 鼠标移入行\n      onMouseLeave: event => {},\n    };\n  }}\n  onHeaderRow={column => {\n    return {\n      onClick: () => {}, // 点击表头行\n    };\n  }}\n/>"]],["h3","Column"],["p","列描述数据对象，是 columns 中的一项，Column 使用相同的 API。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","align"],["td","设置列的对齐方式"],["td","'left' ","|"," 'right' ","|"," 'center'"],["td","'left'"]],["tr",["td","className"],["td","列样式类名"],["td","string"],["td","-"]],["tr",["td","colSpan"],["td","表头列合并,设置为 0 时，不渲染"],["td","number"],["td"]],["tr",["td","dataIndex"],["td","列数据在数据项中对应的 key，支持 ",["code","a.b.c"],"、",["code","a[0].b.c[1]"]," 的嵌套写法"],["td","string"],["td","-"]],["tr",["td","defaultSortOrder"],["td","默认排序顺序"],["td","'ascend' ","|"," 'descend'"],["td","-"]],["tr",["td","filterDropdown"],["td","可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互"],["td","ReactNode"],["td","-"]],["tr",["td","filterDropdownVisible"],["td","用于控制自定义筛选菜单是否可见"],["td","boolean"],["td","-"]],["tr",["td","filtered"],["td","标识数据是否经过过滤，筛选图标会高亮"],["td","boolean"],["td","false"]],["tr",["td","filteredValue"],["td","筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组"],["td","string","[","]"],["td","-"]],["tr",["td","filterIcon"],["td","自定义 filter 图标。"],["td","ReactNode","|","(filtered: boolean) => ReactNode"],["td","false"]],["tr",["td","filterMultiple"],["td","是否多选"],["td","boolean"],["td","true"]],["tr",["td","filters"],["td","表头的筛选菜单项"],["td","object","[","]"],["td","-"]],["tr",["td","fixed"],["td","列是否固定，可选 ",["code","true"],"(等效于 left) ",["code","'left'"]," ",["code","'right'"]],["td","boolean","|","string"],["td","false"]],["tr",["td","key"],["td","React 需要的 key，如果已经设置了唯一的 ",["code","dataIndex"],"，可以忽略这个属性"],["td","string"],["td","-"]],["tr",["td","render"],["td","生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格",["a",{title:null,href:"#components-table-demo-colspan-rowspan"},"行/列合并"]],["td","Function(text, record, index) {}"],["td","-"]],["tr",["td","sorter"],["td","排序函数，本地排序使用一个函数(参考 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"]," 的 compareFunction)，需要服务端排序可设为 true"],["td","Function","|","boolean"],["td","-"]],["tr",["td","sortOrder"],["td","排序的受控属性，外界可用此控制列的排序，可设置为 ",["code","'ascend'"]," ",["code","'descend'"]," ",["code","false"]],["td","boolean","|","string"],["td","-"]],["tr",["td","sortDirections"],["td","支持的排序方式，取值为 ",["code","'ascend'"]," ",["code","'descend'"]],["td","Array"],["td",["code","['ascend', 'descend']"]]],["tr",["td","title"],["td","列头显示文字"],["td","ReactNode","|","({ sortOrder, filters }) => ReactNode"],["td","-"]],["tr",["td","width"],["td","列宽度（",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241"},"指定了也不生效？"],"）"],["td","string","|","number"],["td","-"]],["tr",["td","onCell"],["td","设置单元格属性"],["td","Function(record, rowIndex)"],["td","-"]],["tr",["td","onFilter"],["td","本地模式下，确定筛选的运行函数"],["td","Function"],["td","-"]],["tr",["td","onFilterDropdownVisibleChange"],["td","自定义筛选菜单可见变化时调用"],["td","function(visible) {}"],["td","-"]],["tr",["td","onHeaderCell"],["td","设置头部单元格属性"],["td","Function(column)"],["td","-"]]]],["h3","ColumnGroup"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","title"],["td","列头显示文字"],["td","string","|","ReactNode"],["td","-"]]]],["h3","pagination"],["p","分页的配置项。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","position"],["td","指定分页显示的位置"],["td","'top' ","|"," 'bottom' ","|"," 'both'"],["td","'bottom'"]]]],["p","更多配置项，请查看 ",["a",{title:null,href:"/components/pagination/"},["code","Pagination"]],"。"],["h3","rowSelection"],["p","选择功能的配置。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","columnWidth"],["td","自定义列表选择框宽度"],["td","string","|","number"],["td",["code","60px"]]],["tr",["td","columnTitle"],["td","自定义列表选择框标题"],["td","string","|","React.ReactNode"],["td","-"]],["tr",["td","fixed"],["td","把选择框列固定在左边"],["td","boolean"],["td","-"]],["tr",["td","getCheckboxProps"],["td","选择框的默认属性配置"],["td","Function(record)"],["td","-"]],["tr",["td","hideDefaultSelections"],["td","去掉『全选』『反选』两个默认选项"],["td","boolean"],["td","false"]],["tr",["td","selectedRowKeys"],["td","指定选中项的 key 数组，需要和 onChange 进行配合"],["td","string","[","]"],["td","[","]"]],["tr",["td","selections"],["td","自定义选择项 ",["a",{title:null,href:"#selection"},"配置项"],", 设为 ",["code","true"]," 时使用默认选择项"],["td","object","[","]","|","boolean"],["td","true"]],["tr",["td","type"],["td","多选/单选，",["code","checkbox"]," or ",["code","radio"]],["td","string"],["td",["code","checkbox"]]],["tr",["td","onChange"],["td","选中项发生变化时的回调"],["td","Function(selectedRowKeys, selectedRows)"],["td","-"]],["tr",["td","onSelect"],["td","用户手动选择/取消选择某行的回调"],["td","Function(record, selected, selectedRows, nativeEvent)"],["td","-"]],["tr",["td","onSelectAll"],["td","用户手动选择/取消选择所有行的回调"],["td","Function(selected, selectedRows, changeRows)"],["td","-"]],["tr",["td","onSelectInvert"],["td","用户手动选择反选的回调"],["td","Function(selectedRows)"],["td","-"]]]],["h3","selection"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","key"],["td","React 需要的 key，建议设置"],["td","string"],["td","-"]],["tr",["td","text"],["td","选择项显示的文字"],["td","string","|","React.ReactNode"],["td","-"]],["tr",["td","onSelect"],["td","选择项点击回调"],["td","Function(changeableRowKeys)"],["td","-"]]]],["h2","在 TypeScript 中使用"],["pre",{lang:"tsx",highlighted:'import { Table } from <span class="token string">\'antd\'</span><span class="token comment" spellcheck="true">;</span>\nimport { ColumnProps } from <span class="token string">\'antd/lib/table\'</span><span class="token comment" spellcheck="true">;</span>\n\ninterface User {\n  key<span class="token punctuation">:</span> number<span class="token comment" spellcheck="true">;</span>\n  name<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>\n}\n\n<span class="token keyword">const</span> columns<span class="token punctuation">:</span> ColumnProps<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>{\n  key<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'Name\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n}<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> data<span class="token punctuation">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>{\n  key<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'Jack\'</span><span class="token punctuation">,</span>\n}<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\nclass UserTable extends Table<span class="token operator">&lt;</span>User<span class="token operator">></span> {}\n<span class="token operator">&lt;</span>UserTable columns<span class="token operator">=</span>{columns} dataSource<span class="token operator">=</span>{data} <span class="token operator">/</span><span class="token operator">></span>\n\n<span class="token operator">/</span><span class="token operator">/</span> 使用 JSX 风格的 API\nclass NameColumn extends Table<span class="token punctuation">.</span>Column<span class="token operator">&lt;</span>User<span class="token operator">></span> {}\n\n<span class="token operator">&lt;</span>UserTable dataSource<span class="token operator">=</span>{data}<span class="token operator">></span>\n  <span class="token operator">&lt;</span>NameColumn key<span class="token operator">=</span><span class="token string">"name"</span> title<span class="token operator">=</span><span class="token string">"Name"</span> dataIndex<span class="token operator">=</span><span class="token string">"name"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>UserTable<span class="token operator">></span>\n\n<span class="token operator">/</span><span class="token operator">/</span> TypeScript <span class="token number">2.9</span> 之后也可以这样写\n<span class="token operator">/</span><span class="token operator">/</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>typescriptlang<span class="token punctuation">.</span>org<span class="token operator">/</span>docs<span class="token operator">/</span>handbook<span class="token operator">/</span>release<span class="token operator">-</span>notes<span class="token operator">/</span>typescript<span class="token operator">-</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">.</span>html#generic<span class="token operator">-</span>type<span class="token operator">-</span>arguments<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>jsx<span class="token operator">-</span>elements\n<span class="token operator">&lt;</span>Table<span class="token operator">&lt;</span>User<span class="token operator">></span> columns<span class="token operator">=</span>{columns} dataSource<span class="token operator">=</span>{data} <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>Table<span class="token operator">&lt;</span>User<span class="token operator">></span> dataSource<span class="token operator">=</span>{data}<span class="token operator">></span>\n  <span class="token operator">&lt;</span>Table<span class="token punctuation">.</span>Column<span class="token operator">&lt;</span>User<span class="token operator">></span> key<span class="token operator">=</span><span class="token string">"name"</span> title<span class="token operator">=</span><span class="token string">"Name"</span> dataIndex<span class="token operator">=</span><span class="token string">"name"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Table<span class="token operator">></span>'},["code","import { Table } from 'antd';\nimport { ColumnProps } from 'antd/lib/table';\n\ninterface User {\n  key: number;\n  name: string;\n}\n\nconst columns: ColumnProps<User>[] = [{\n  key: 'name',\n  title: 'Name',\n  dataIndex: 'name',\n}];\n\nconst data: User[] = [{\n  key: 0,\n  name: 'Jack',\n}];\n\nclass UserTable extends Table<User> {}\n<UserTable columns={columns} dataSource={data} />\n\n// 使用 JSX 风格的 API\nclass NameColumn extends Table.Column<User> {}\n\n<UserTable dataSource={data}>\n  <NameColumn key=\"name\" title=\"Name\" dataIndex=\"name\" />\n</UserTable>\n\n// TypeScript 2.9 之后也可以这样写\n// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#generic-type-arguments-in-jsx-elements\n<Table<User> columns={columns} dataSource={data} />\n<Table<User> dataSource={data}>\n  <Table.Column<User> key=\"name\" title=\"Name\" dataIndex=\"name\" />\n</Table>"]],["h2","注意"],["p","按照 ",["a",{title:null,href:"https://facebook.github.io/react/docs/lists-and-keys.html#keys"},"React 的规范"],"，所有的组件数组必须绑定 key。在 Table 中，",["code","dataSource"]," 和 ",["code","columns"]," 里的数据值都需要指定 ",["code","key"]," 值。对于 ",["code","dataSource"]," 默认将每列数据的 ",["code","key"]," 属性作为唯一的标识。"],["p","如果你的数据没有这个属性，务必使用 ",["code","rowKey"]," 来指定数据列的主键。若没有指定，控制台会出现以下的提示，表格组件也会出现各类奇怪的错误。"],["p",["img",{title:null,src:"https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png",alt:"控制台警告"}]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// 比如你的数据主键是 uid</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// 或</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> record<span class="token punctuation">.</span>uid<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code",'// 比如你的数据主键是 uid\nreturn <Table rowKey="uid" />;\n// 或\nreturn <Table rowKey={record => record.uid} />;']]]}}}]);