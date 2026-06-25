# 是什么
一个AI驱动的Android自动化测试项目(纯视觉方案)

## 怎么使用
1. 设置AI模型:
- 要求大模型支持多模态（视觉理解）
- 在根目录下新建.env 文件
- 先加以下内容 
```shell
MIDSCENE_MODEL_BASE_URL="你使用的的大模型URL"
MIDSCENE_MODEL_API_KEY="大模型的API KEY"
MIDSCENE_MODEL_NAME="模型名称"
MIDSCENE_MODEL_FAMILY="模型类别"

例如：
千问多模态大模型
MIDSCENE_MODEL_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
MIDSCENE_MODEL_API_KEY="sk-aaabbbccc"
MIDSCENE_MODEL_NAME="qwen3.6-plus"
MIDSCENE_MODEL_FAMILY="qwen3.6"

智谱多模态大模型
MIDSCENE_MODEL_BASE_URL="https://open.bigmodel.cn/api/paas/v4"
MIDSCENE_MODEL_API_KEY="key-aaabbbccc"
MIDSCENE_MODEL_NAME="GLM-5V-Turbo"
MIDSCENE_MODEL_FAMILY="glm-v"

```

2. 安装依赖:
使用bun 安装依赖，没有bun 可自行安装 
[bun 安装](https://bun.net.cn/docs/installation)
[bun 镜像，换国内阿里源](https://blog.mvui.cn/detail/3328.html)

```bash
bun install
```

1. 连接手机
手机安装 Telegram App <br></br>

1. 运行:
```bash
bun run index.ts
```

## 参考文档
[Midscene.js官网文档](https://midscenejs.com/zh/introduction)

[Midscene.js Github仓库](https://github.com/web-infra-dev/midscene)
