# DataLearn - 基于Python的数据分析在线教育平台

## 项目概述
DataLearn是一款专为商务数据分析与应用专业学生设计的在线教育平台，提供完整的课程体系、互动式学习模块、练习测评功能和成就激励系统。

## 核心功能
- 完整的课程体系：覆盖Python基础、数据可视化、机器学习、商务分析等多个领域
- 互动式学习模块：内置在线Python代码编辑器，支持实时执行
- 学、练习、测评一体化：提供丰富的练习和测评内容
- 成就激励系统：通过徽章和证书激励学生学习

## 技术栈
- 前端：React + TypeScript + Tailwind CSS
- 后端：Supabase (认证、数据库、存储)
- Python执行：Pyodide (浏览器内Python运行时)
- 部署：Cloudflare Pages

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 部署到Cloudflare Pages
1. 登录Cloudflare账户
2. 选择Pages
3. 连接GitHub仓库
4. 配置构建命令：`npm run build`
5. 配置构建输出目录：`dist`
6. 点击部署

## 项目结构
```
src/
  components/     # 基础UI组件
  pages/         # 页面组件
  lib/           # 工具库和配置
  assets/        # 静态资源
  hooks/         # 自定义Hooks
  utils/         # 工具函数
```

## 环境变量
创建 `.env.local` 文件并添加以下环境变量：
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 注意事项
- 本项目使用Supabase作为后端服务，需要创建Supabase项目并配置相应的环境变量
- 本项目使用Pyodide实现浏览器内Python执行，可能会增加初始加载时间
- 部署到Cloudflare Pages时，确保配置正确的构建命令和输出目录