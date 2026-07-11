# 2025 Blog 部署指南

## 1. 安装

按照以下步骤完成部署服务的配置：

- Fork 本项目到你的 GitHub 账户
- **最好不要修改原项目文件名**

> 该项目可以先不做本地开发，直接部署然后配置环境变量即可。

### 环境变量说明

| 变量名 | 说明 |
|--------|------|
| `NEXT_PUBLIC_GITHUB_OWNER` | 你定义的名字 |
| `NEXT_PUBLIC_GITHUB_APP_ID` | 后面会讲 |

---

## 2. 部署

以 Vercel 部署为例：

1. 登录 Vercel 官网：https://vercel.com
2. 点击 **Add new** 按钮 → **Project**
3. 选择刚 Fork 的项目 → 点击 **Import**
4. 点击 **Deploy** 直接部署

---

## 3. 创建 GitHub App 链接仓库

### 3.1 创建 GitHub App

1. 进入 GitHub **个人设置** → 左侧找到最下面的 **Developer Settings**
2. 点击 **New GitHub App**

### 3.2 填写 App 信息

| 字段 | 建议填写 |
|------|----------|
| **GitHub App name** | `你的账户名1234567890` |
| **Homepage URL** | `https://ss.com` |

> 输入内容不影响功能，但有格式要求，按建议填写即可。

### 3.3 配置权限

- **Webhook** 功能 → **关闭**（不需要）
- **Permissions** → **Repository permissions** → **Contents** 设为 `Read and write`

点击 **Create GitHub App** 完成创建。

### 3.4 下载私钥和获取 App ID

1. 点击蓝色 **Generate private key** 按钮，下载私钥文件
   - 保存好私钥文件（丢失后可重新创建下载）
2. 复制页面上的 **App ID**，稍后填入环境变量 `NEXT_PUBLIC_GITHUB_APP_ID`

### 3.5 安装 App 到仓库

1. 在 GitHub 界面左侧找到 **App Install**
2. 点击 **Install**
3. 选择 **Only select repositories** → 选择你 Fork 的项目
4. 点击 **Install** 完成权限设置

### 3.6 配置 Vercel 环境变量

1. 进入 Vercel 主界面 → 左侧找到 **Environment Variables**
2. 点击右上角 **Add Environment Variables**

添加以下变量：

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_GITHUB_OWNER` | 你定义的名字 |
| `NEXT_PUBLIC_GITHUB_APP_ID` | 你之前复制的 App ID |

> 一般只需设置 `OWNER` 和 `APP_ID`，其它配置不用管。
> 设置时将 **Sensitive** 开关关闭。

3. 设置完成后，点击右下角的 **Redeploy** 按钮重新部署
4. 若没有该按钮，需手动再部署一次，让环境变量生效

---

## 4. 完成

部署的网站现在可以开始使用前端修改内容了。
修改的内容必须在密钥实现提交之后vercel部署成功才会生效.

> ⚠️ 网站前端页面删改内容并提示成功后，需要等待后台部署完成，再刷新页面才能完成服务器内容的更新。
